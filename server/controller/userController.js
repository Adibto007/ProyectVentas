    // const fs = require('fs').promises;
    // const path = require('path');

    // const userFilepath = path.join(__dirname, "../../src/componentes/registro-usuario.json");

    // const controller = {
    //     register: async function (req, res) {
    //         try {
    //             const userData = await fs.readFile(userFilepath, "utf-8");
    //             const users = JSON.parse(userData);

    //             const ultimo = users.length;
    //             const usuarioNuevo = {
    //                 id: ultimo + 1,
    //                 identificacion: req.body.identificacion,
    //                 nombre: req.body.nombres,
    //                 apellido: req.body.apellidos,
    //                 email: req.body.email,
    //                 direccion: req.body.direccion,
    //                 telefono: req.body.telefono,
    //                 fechaNacimiento: req.body.fechaNacimiento,
    //                 password: req.body.password,
    //                 estado: "activo",
    //                 rol: "Usuario",
    //                 fecha_creacion: new Date(),
    //             };

    //             for (x of users) {
    //                 if (x.email === req.body.email || x.identificacion === req.body.identificacion) {
    //                     res.status(400).send("El email ya existe");
    //                     return;
    //                 }
    //             }

    //             users.push(usuarioNuevo);

    //             await fs.writeFile(userFilepath, JSON.stringify(users, null, 4));
    //             res.status(200).send("Usuario Registrado");
    //         } catch (error) {
    //             console.error("Error al procesar el registro", error);
    //             res.status(500).send("Error interno del servidor");
    //         }
    //     },

    //         login: async function (req, res) {
    //             try {
    //                 const usersData = await fs.readFile(userFilepath, "utf-8");
    //                 const users = JSON.parse(usersData);

    //                 for (x of users) {
    //                     if (
    //                         x.email === req.body.email &&
    //                         x.password === req.body.password &&
    //                         x.rol === req.body.rol

    //                     ) {
    //                         console.log(x.nombre, x.apellido)
    //                         return res.json({
    //                             nombre: x.nombre,
    //                             apellido: x.apellido,
    //                             email: x.email
    //                         });

    //                     }
    //                 }
    //                 res.json({title:"error"});
    //             } catch (error) {
    //                 console.error("Error al procesar el registro:", error);
    //                 res.status(500).send("Error interno del servidor");
    //             }
    //         },
    //     };

    //     module.exports = controller;

    const express = require('express');
    const app = express();
    const axios = require('axios');
    const cors = require('cors');
    app.use(cors());
    const mysql = require('mysql2');
const connection = require('../configBD/configBD.js');

const controller = {
    register: function (req, res) {
        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/665625a6e41b4d34e4faef34',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-Key": "$2a$10$1kZaCJWEs7fLiFTxRCaYlOnKO3EKEh9Nq.k5h7MOgPBS9sJNl0gWe"
            }
        };

        axios(config)
            .then(result => {
                let id = result.data.record.length + 1
                const usuarioNuevo = {
                    id: id,
                    identificacion: req.body.identificacion,
                    nombre: req.body.nombres,
                    apellido: req.body.apellidos,
                    email: req.body.email,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono,
                    fechaNacimiento: req.body.fechaNacimiento,
                    password: req.body.password,
                    estado: "activo",
                    rol: "Usuario",
                    fecha_creacion: new Date(),
                };

                // Verificar si el usuario ya existe en JSONBin
                if (result.data.record.some(x => x.email === req.body.email)) {
                    return res.status(400).send("Usuario ya existe en la Base de Datos");
                }
                
                // Guardar en JSONBin
                result.data.record.push(usuarioNuevo);
                axios.put("https://api.jsonbin.io/v3/b/665625a6e41b4d34e4faef34", result.data.record, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Master-Key": "$2a$10$1kZaCJWEs7fLiFTxRCaYlOnKO3EKEh9Nq.k5h7MOgPBS9sJNl0gWe"
                    }
                    
                })
                
                .then(response => {
                    if (response.status === 200) {
                        // Guardar en MySQL
                        const sql = 'INSERT INTO usuarios (nombre, apellido, email, direccion, telefono, fechaNacimiento, password, identificacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                        const values = [
                            usuarioNuevo.nombre,
                            usuarioNuevo.apellido,
                            usuarioNuevo.email,
                            usuarioNuevo.direccion,
                            usuarioNuevo.telefono,
                            usuarioNuevo.fechaNacimiento,
                            usuarioNuevo.password,
                            usuarioNuevo.identificacion
                        ];
                        res.send("usuario");

                        connection.query(sql, values, (error, results) => {
                            if (error) {
                                console.error("Error al insertar en MySQL:", error);
                                return res.status(500).send("Error interno al registrar usuario");
                            }
                            console.log("Usuario registrado en MySQL correctamente");
                            
                            
                        });
                    } else {
                        res.status(400).send("No se pudo actualizar en JSONBin");
                    }
                })
                .catch(error => {
                    console.error("Error al actualizar en JSONBin:", error);
                    res.status(500).send("Error interno al registrar usuario");
                });
            })
            .catch(error => {
                console.error("Error al consultar JSONBin:", error);
                res.status(500).send("Error interno al registrar usuario");
            });
    }
};

module.exports = controller;
