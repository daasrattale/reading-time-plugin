/**
 * Represents the config of the Reading Time Plugin.
 */
interface ReadingTimePluginConfig {
    /**
     * The word per minutes rate.
     */
    wordsPerMinute?: number;

    /**
     * Filters words.
     * @param word string 
     * @returns boolean
     */
    filterWord?: (word: string) => boolean
}


interface EstimationResults {
    minutes: number;
    wordsCount: number
}

interface ReadingTimePluginResults {
    /**
     * Estimates reading time of text.
     * @param text string - The text to be estimated.
     * @returns number
     */
    estimate: (text: string) => EstimationResults;
    /**
     * Configuration object - ReadingTimePluginConfig.
     */
    config: ReadingTimePluginConfig,
}

/**
 * Returns the count of word of a provided string.
 * @param str string - A str to be checked, how many words it has.
 * @returns number - Words count.
 */
function wordCounter(str: string, isWord: (word: string) => boolean): number {
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
function isWord(str: string): boolean {
    if (!str) return false;
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
 * @param config.wordsPerMinute number? - The words per minute rate (optional, default: 225).
 * @param config.filterWord (word: string) => boolean - Filters words (optional).
 * 
 * @returns ReadingTimePluginResults - Results Object.
 */
function readingTimePlugin(config: ReadingTimePluginConfig): ReadingTimePluginResults {

    const { wordsPerMinute = 225, filterWord = isWord } = config;

    const estimate = (text: string) => {
        let readingTime: number = 0;
        let wordsCount: number = 0;

        if (!!text) {
            wordsCount = wordCounter(text, filterWord);
            readingTime = Math.ceil(wordsCount / wordsPerMinute);
        }

        return {
            minutes: readingTime,
            wordsCount
        }
    }

    return { estimate, config }
}

export { EstimationResults, ReadingTimePluginConfig, ReadingTimePluginResults, isWord };
export default readingTimePlugin;

