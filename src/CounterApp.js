import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value); //retona un arreglo con 2 valores

    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter((counter)=> counter = value);
    }
    const handleSubtract = () => {
        setCounter(counter-1);
    }
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>Has clickeado {counter} veces</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 1
}

export default CounterApp
