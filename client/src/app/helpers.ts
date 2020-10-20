export const convertCentsIntoReais = (centsAmount: number) => {
    const reais = centsAmount / 100;
    return reais.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};