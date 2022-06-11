import { retornaArreglo   } from "../../base-pruebas/07-deses-arr";

describe('Pruebas desestructuración', () => { 
    test('Debe retornar un arreglo', () => { 
        const arr = retornaArreglo();
        expect(arr).toEqual(['ABC',123])
    });
    test('Tipo de desestructuración', () => {
        const [letras,numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});