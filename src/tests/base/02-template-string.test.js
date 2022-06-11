import '@testing-library/jest-dom';
import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => { 
    test('prueba en el metodo getSaludo con argumento', () => {
        const nombre = 'Diego';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre)
    });
    test('prueba en el metodo getSaludo sin argumento', () => { 
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Ronny');
    });
});