import React, {Fragment, useState} from 'react';

const AltaProducto = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        precio: 0
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.precio)
    }
    return ( 
        <Fragment>
            <h1>Alta de Producto -&gt; {datos.nombre}</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col-md-3'>
                    <input
                        className='form-control'
                        placeholder='Nombre'
                        type='text'
                        name='nombre'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-md-3'>
                    <input
                        className='form-control'
                        placeholder='Precio'
                        type='number'
                        name='precio'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-md-3'>
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >Guardar</button>
                </div>
            </form>
        </Fragment>

     );
}
 
export default AltaProducto;