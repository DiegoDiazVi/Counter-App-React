import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas de <PirmeraApp />', () => {
    test('debe mostrar el mensaje Hola soy ronny', () => {
        const saludo = 'Hola, soy ronny';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    });
});