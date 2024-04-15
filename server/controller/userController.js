const fs = require('fs').promises;
const path = require('path');

const userFilepath = path.join(__dirname, "../src/componentes/registro-usuario.json");

const controller = {
    register: async function (req, res) {
        try {
            const userData = await fs.readFile(userFilepath, "utf-8");
            const users = JSON.parse(userData);

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
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

            for (x of users) {
                if (X.email === req.body.email || X.identificacion === req.body.identificacion) {
                    res.status(400).send("El email ya existe");
                    return;
                }
            }

            users.push(usuarioNuevo);

            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
            res.status(200).send("Usuario Registrado");
        } catch (error) {
            console.error("Error al procesar el registro", error);
            res.status(500).send("Error interno del servidor");
        }
    },




        login: async function (req, res) {
            try {
                const usersData = await fs.readFile(userFilePath, "utf-8");
                const users = JSON.parse(usersData);

                for (x of users) {
                    if (
                        x.email === req.body.email &&
                        x.password === req.body.password &&
                        x.rol === req.body.rol
                    ) {
                        res.status(200).send("0k");
                        return;
                    }
                }
                res.status(400).send("Error");
            } catch (error) {
                console.error("Error al procesar el registro:", error);
                res.status(500).send("Error interno del servidor");
            }
        },
    };

    module.exports = controller;