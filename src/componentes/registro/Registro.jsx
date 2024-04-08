import React, { useState } from 'react'; // Importa useState desde React


export default function Registro() {

    const [values, setValues] = useState({
        documento: "",
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        telefono: "",
        fecha: "",
        contra: "",
        contra2: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
    }

    return (
        <div className="principal1">
            <form>
                <div className="form-group">
                    <label htmlFor="documento">Documento</label>
                    <input type="number" className="form-control" id="documento" name="documento" value={values.documento} onChange={handleChange} placeholder="Debe de estar entre 5 y 10 digitos" />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={values.nombre} onChange={handleChange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido" name="apellido" value={values.apellido} onChange={handleChange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Direccion</label>
                    <input type="password" className="form-control" id="direccion" name="direccion" value={values.direccion} onChange={handleChange} placeholder="Debe tener un formato valido Ejemplo: user@gmail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" className="form-control" id="telefono" name="telefono" value={values.telefono} onChange={handleChange} placeholder="Debe ser de 10 numeros" />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="fecha" name="fecha" value={values.fecha} onChange={handleChange} placeholder="Dede ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label htmlFor="contraseña"> Contraseña </label>
                    <input type="password" className="form-control" id="contra" name="contra" value={values.contra} onChange={handleChange} placeholder="debe ser de minimo 8 caracteres, una mayuscula, una minuscula, un numero " />
                </div>
                <div className="form-group2">
                    <label htmlFor="contraseña2">Repita su contraseña</label>
                    <input type="password" className="form-control" id="contra2" name="contra2" value={values.contra2} onChange={handleChange} placeholder="Repita su contraseña" />
                </div>
                <button type="submit" >Registrarme</button>
            </form>
        </div>
    )
}