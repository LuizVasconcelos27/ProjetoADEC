
function somar(a, b) {
    return a + b;
}

test('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
});
