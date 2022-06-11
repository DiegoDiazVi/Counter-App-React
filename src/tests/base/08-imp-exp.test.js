import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id);
        expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar undefined si un heroe por id no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('Debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner(owner);
        const heroeData = heroes.filter(heroe => heroe.owner === owner);
        expect(heroeOwner).toEqual(heroeData);

    });
    test('Debe retornar un arreglo con length 2 con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroeOwner = getHeroesByOwner(owner);
        expect(heroeOwner.length).toBe(2);
    });
});