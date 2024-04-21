import readingTimePlugin, { EstimationResults, ReadingTimePluginConfig, isWord } from "../src/index";

test("time with default values", () => {
     const initialConfig: ReadingTimePluginConfig = {}

     const expectedResults: EstimationResults = {
          minutes: 1,
          wordsCount: 2
     }

     const { estimate, config } = readingTimePlugin(initialConfig);

     expect(estimate("Hello World")).toStrictEqual(expectedResults);
     expect(config).toStrictEqual(initialConfig);
});


test("time with custom words per minute", () => {
     const initialConfig: ReadingTimePluginConfig = {
          wordsPerMinute: 123
     }

     const expectedResults: EstimationResults = {
          minutes: 1,
          wordsCount: 2
     }

     const { estimate, config } = readingTimePlugin(initialConfig);

     expect(estimate("Hello World")).toStrictEqual(expectedResults);
     expect(config).toStrictEqual(initialConfig);
});


test("time with empty string", () => {
     const initialConfig: ReadingTimePluginConfig = {}

     const expectedResults: EstimationResults = {
          minutes: 0,
          wordsCount: 0
     }

     const { estimate, config } = readingTimePlugin(initialConfig);

     expect(estimate("")).toStrictEqual(expectedResults);
     expect(config).toStrictEqual(initialConfig);
});



test("time with special characters", () => {
     const initialConfig: ReadingTimePluginConfig = {}

     const expectedResults: EstimationResults = {
          minutes: 1,
          wordsCount: 6
     }

     const { estimate, config } = readingTimePlugin(initialConfig);

     expect(estimate("Hello World !, The world 1s Amazing !")).toStrictEqual(expectedResults);
     expect(config).toStrictEqual(initialConfig);
});


test("time with custom filter function", () => {
     const initialConfig: ReadingTimePluginConfig = {
          filterWord: (word: string) => {
               return isWord(word) && word != "1s"
          }
     }

     const expectedResults: EstimationResults = {
          minutes: 1,
          wordsCount: 5
     }

     const { estimate, config } = readingTimePlugin(initialConfig);

     expect(estimate("Hello World !, The world 1s Amazing !")).toStrictEqual(expectedResults);
     expect(config).toStrictEqual(initialConfig);
});