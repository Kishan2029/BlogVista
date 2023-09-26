export const stringSplit = (string) => {
    return string.split("\n");
}

export const stringConcat = (string, len) => {
    return string.length > len ? string.slice(0, len) + "..." : string;
}
