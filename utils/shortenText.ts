const shortenText = (text: string, n: number): string => {
    if (text.length > n) {
        return text.substring(0, n).concat('...')
    }
    return text
}

export default shortenText;
