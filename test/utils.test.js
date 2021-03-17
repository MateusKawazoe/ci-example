const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
        test('inicio igual ou menor que o fim', () => {
            expect(gerarNumeroAleatorio(20, 15))
                .toBe(-1);
        });
        test('numero aleatório entre o inicio e o fim', () => {
            expect(gerarNumeroAleatorio(20, 100))
                .toBeWithinRange(20, 100)
        });

        expect.extend({
            toBeWithinRange(received, floor, ceiling) {
                if (received => floor && received <= ceiling) {
                    return {
                        message: () =>
                            `expected ${received} not to be within range ${floor} - ${ceiling}`,
                        pass: true
                    }
                } else {
                    return {
                        message: () =>
                            `expected ${received} to be within range ${floor} - ${ceiling}`,
                        pass: false
                    }
                }
            }
        })
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
        test('comprimento diferente do tamanho da cadeia', () => {
            expect(acharCaracter(10, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
        test('comprimento diferente do tamanho da cadeia', () => {
            expect(acharCaracter(5, 'abcde', 'z'))
                .toBe('caracter não encontrado');
        });
        test('posição do caracter', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe(2);
        });
    });
});