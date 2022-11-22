export const sum = (a: number, b: number) => {
    return a + b;
}

export const mult = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentense: string) => {
    const words = sentense.toLowerCase().split(" ")
    return words.filter(w => w !== "" && w !== "-").
        map(w => w.replace("!", "")
        .replace(".", "")
        .replace(",", "")
    )
}