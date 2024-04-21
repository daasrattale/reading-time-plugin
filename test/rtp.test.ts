import readingTimePlugin, { ReadingTimePluginConfig, ReadingTimePluginResults } from "../src/index";

test("time with default values", () => {
     const config: ReadingTimePluginConfig = {
          text: "Hello World"
     }

     const expectedResults: ReadingTimePluginResults = {
          minutes: 1,
          wordsPerMinute: 225,
          words: 2
     }

     const result: ReadingTimePluginResults = readingTimePlugin(config);


     expect(result).toStrictEqual(expectedResults);
});


test("time with custom works per minute", () => {
     const config: ReadingTimePluginConfig = {
          text: "Hello World",
          wordsPerMinute: 123
     }

     const expectedResults: ReadingTimePluginResults = {
          minutes: 1,
          wordsPerMinute: 123,
          words: 2
     }

     const result = readingTimePlugin(config);

     expect(result).toStrictEqual(expectedResults);
});


test("time with empty string", () => {
     const config: ReadingTimePluginConfig = {
          text: ""
     }

     const expectedResults: ReadingTimePluginResults = {
          minutes: 0,
          wordsPerMinute: 225,
          words: 0
     }

     const result = readingTimePlugin(config);

     expect(result).toStrictEqual(expectedResults);
});


test("time with non-words", () => {
     const config: ReadingTimePluginConfig = {
          text: "Hello World !, The world 1s Amazing !"
     }

     const expectedResults: ReadingTimePluginResults = {
          minutes: 1,
          wordsPerMinute: 225,
          words: 6
     }

     const result = readingTimePlugin(config);

     expect(result).toStrictEqual(expectedResults);
});
