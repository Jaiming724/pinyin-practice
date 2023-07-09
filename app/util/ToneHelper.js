export const convertToTone = (char, tone) => {
    const toneMap = {
        a: ['ā', 'á', 'ǎ', 'à'],
        e: ['ē', 'é', 'ě', 'è'],
        i: ['ī', 'í', 'ǐ', 'ì'],
        o: ['ō', 'ó', 'ǒ', 'ò'],
        u: ['ū', 'ú', 'ǔ', 'ù'],
        ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
        A: ['Ā', 'Á', 'Ǎ', 'À'],
        E: ['Ē', 'É', 'Ě', 'È'],
        I: ['Ī', 'Í', 'Ǐ', 'Ì'],
        O: ['Ō', 'Ó', 'Ǒ', 'Ò'],
        U: ['Ū', 'Ú', 'Ǔ', 'Ù'],
        Ü: ['Ǖ', 'Ǘ', 'Ǚ', 'Ǜ'],
    };

    if (char in toneMap) {
        const toneIndex = parseInt(tone, 10) - 1;
        return toneMap[char][toneIndex];
    } else {
        return char;
    }
};
