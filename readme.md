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

## Usage

First, let's import the plugin.

```ts
import readingTimePlugin, { ReadingTimePluginConfig, ReadingTimePluginResults } from 'reading-time-plugin';

```

Then, let's add the plugin config and get its results.

```ts
    // Setting basic config.
    const config: ReadingTimePluginConfig = {}
    // Getting results {minutes, words, and used wordPerMinute rate}.
    const { estimate, config } = readingTimePlugin(config);

  /*
     estimate(text) => {
          minutes: 1,
          wordsCount: 2
     }

     config = {
        wordsPerMinute: 225
     }
  */
```

# API

```ts
const {estimate, config} = readingTimePlugin(config);
```

- `estimate: (text: string) => EstimationResults` - Returns the extimated reading time (`minutes`) and the text word count `wordCount`.
- `config.wordsPerMinute` - The words per minute rate (optional, default: 225).
- `config.filterWord?: (word:string) => boolean` - Filters text's words (optional). Default function will filter special caracters.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
