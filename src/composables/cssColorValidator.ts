export const isValidColor = (value: string): boolean => {
    const s = new Option().style;
    s.color = value;
    return s.color !== '';
}