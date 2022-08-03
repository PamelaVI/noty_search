import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'entretainment', label: 'Entretenimiento' },
        { value: 'science', label: 'Ciencia' },
        { value: 'technology', label: 'Tecnologia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'health', label: 'Salud' },
        { value: 'business', label: 'Negocios' }
    ]

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Noticias Al Instante</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;