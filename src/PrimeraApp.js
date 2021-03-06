import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

// functional components


const PrimeraApp = ( {saludo, subtitulo} ) => {


    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Esta es mi primera app'
}

export default PrimeraApp;