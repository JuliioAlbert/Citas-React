import React, { Fragment, useState } from 'react';
import shorid from 'shortid';


const Formulario = ({ crearCita }) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',

    });

    const [error, guardarError] = useState(false)


    //Funcion que se ejectua cuando el usuario escribe 

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer los valores 

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //cuando el usuario presiona agregar cita 

    const submitCita = e => {
        e.preventDefault();

        //Validar 

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || sintomas.trim() === '' || hora.trim() === '') {
            guardarError(true);
            return;
        }
        //Eliminar msj 
        guardarError(false);

        //Asignar un ID
        cita.id = shorid();
        //Crear la Cita 
        
        crearCita(cita);
        
        // reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >

                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;