# Reading Time Plugin

## Overview
The Reading Time Plugin is a lightweight tool designed to estimate the reading time for a given text. It is particularly useful for content creators and developers who want to provide readers with an indication of how long it might take to read an article, blog post, or any other text-based content.

## Features
- **Simple Integration**: Easily integrate the plugin into your website or application with minimal setup.
- **TS Supported**: The plugin supports typescript.
- **Customization**: Customize the reading speed and formatting to suit your preferences and the specific requirements of your project.
- **Efficiency**: Lightweight and efficient implementation ensures minimal impact on performance.

## Installation
You can install the Reading Time Plugin via npm:

```bash
npm install reading-time-plugin
```

## Example

```ts
    // Setting basic config.
    const config: ReadingTimePluginConfig = {
        text: "Hello World!", // text to be estimated
        wordsPerMinute: 225, // reading rate, optional, default 225 words per minute.
    }
    // Getting results {minutes, words, and used wordPerMinute rate}.
    const result: ReadingTimePluginResults = readingTimePlugin(config);

  /*
     results = {
          minutes: 1,
          words: 2,
          wordsPerMinute: 225
     }
  */

    return result;

```
