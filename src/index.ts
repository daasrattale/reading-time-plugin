/**
 * Represents the config of the Reading Time Plugin.
 */
interface ReadingTimePluginConfig {
    /**
     * The text to be estimated.
     */
    text: string;
    /**
     * The word per minutes rate.
     */
    wordsPerMinute?: number
}


interface ReadingTimePluginResults {
    minutes: number;
    wordsPerMinute: number,
    words: number
}

/**
 * Returns the count of word of a provided string.
 * @param str string - A str to be checked, how many words it has.
 * @returns number - Words count.
 */
function wordCounter(str: string): number {
    const text = str.split(/\s+/)
    let wordCount = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i]!)) {
            wordCount++
        }
    }
    return wordCount;
}

/**
 * Returns is the the provided string is a word.
 * @param str string - A str to be checked if it's a word.
 * @returns boolean
 */
function isWord(str: string) {
    let alphaNumericFound = false
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if ((code > 47 && code < 58) ||
            (code > 64 && code < 91) ||
            (code > 96 && code < 123)) {
            alphaNumericFound = true
            return alphaNumericFound
        }
    }
    return alphaNumericFound
}

/**
 * Returns the estimated time to read a provided text.
 * @param config ReadingTimePluginConfig - A configuration object for the plugin.
 * @param config.text string - The text to be estimated.
 * @param config.wordsPerMinute number? - The words per minute rate (optional, default: 225).
 * 
 * @returns ReadingTimePluginResults - Results Object.
 */
function readingTimePlugin({ text, wordsPerMinute = 225 }: ReadingTimePluginConfig): ReadingTimePluginResults {
    let readingTime = 0;
    let words = 0;

    if (!!text) {
        words = wordCounter(text);
        readingTime = Math.ceil(words / wordsPerMinute);
    }

    return {
        minutes: readingTime,
        wordsPerMinute,
        words
    }
}

export { ReadingTimePluginConfig, ReadingTimePluginResults };
export default readingTimePlugin;

