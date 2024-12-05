import { expect, test, describe } from "vitest";
import { somar, subtrair, multiplicar, dividir } from './calculadora';

describe('Calculadora', () => {
    // Teste para a função de somar 
    test('soma 2 + 3', () => {
    expect(somar(2, 3)).toBe(5);
    });
    // Teste para a função de subtrair
    test('subtrai 5 - 3', () => {
    expect(subtrair(5, 3)).toBe(2);
    });
    // Teste para função de multiplicar
    test('multiplica 2 * 3', () => {
    expect(multiplicar(2, 3)).toBe(6);
    });

    // Teste 1 para função de dividir 
    test('divide 6 / 2', () => {
    expect(dividir(6, 2)).toBe(3);
    });
    // Teste 2 para função de dividir 
    test('não deve permitir divisão por zero', () => {
    expect(() => dividir(6, 0)).toThrow("Divisão por zero não permitida");
    });
});