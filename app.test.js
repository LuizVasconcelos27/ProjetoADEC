function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

test('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
});

test('deve subtrair dois números corretamente', () => {
    expect(subtrair(5, 3)).toBe(2);
});

test('deve multiplicar dois números corretamente', () => {
    expect(4 * 3).toBe(12);
});