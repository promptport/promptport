---
id: create-with-ai
title: 用 AI 创建提示词
sidebar_position: 6
description: 通过 ChatGPT 创建提示词调试示例.
---

------

## 调试过程

以下内容是通过 GPT-4 创建 prompt 的过程，作为参考，希望给你在创建 prompt 的时候一点帮助：

User:

```
我现在需要从AI 技术专业的角度分析一篇 AI 技术报告，我希望使用 GPT 帮我完成分析的工作，请你帮我生成一个提示词能够让 GPT 帮我完成报告分析。
```

Assistant:

```
当然可以。为了更好地帮助您生成一个提示词，我需要了解一下这篇AI技术报告的主要内容和您希望分析的方向或重点。如果您能提供报告的链接或简短描述，我可以为您提供更准确的提示词。如果没有具体的报告，我也可以为您提供一个通用的提示词模板。您希望如何进行呢？
```

User:

```
通用的提示词模版
```

Assistant:

````
```
请从AI技术专业的角度分析以下报告，指出其主要观点、技术亮点、可能存在的问题或不足，以及对未来技术发展的预测或建议。报告内容如下：[插入报告内容]
```

您可以将 [插入报告内容] 替换为您具体的AI技术报告内容，然后使用这个提示词来引导GPT进行分析。

希望这个模板对您有所帮助！如果有其他需求或问题，请随时告诉我。
````

User:

```
英文输出提示词
```

Assistant:

````
当然可以，以下是该提示词模板的英文版本：

```
Please analyze the following AI technical report from a professional AI perspective. Identify its main points, technical highlights, potential issues or shortcomings, and predictions or recommendations for future technological developments. The report content is as follows: [Insert Report Content Here]
```

You can replace [Insert Report Content Here] with the specific content of your AI technical report, and then use this prompt to guide GPT in its analysis.

I hope this template is helpful! Let me know if you have any other questions or needs.
````

User:

```
在此基础上，增加 AI 报告分析背景说明，增加报告分析要求
```

Assistant:

````
当然可以。以下是一个更详细的英文提示词模板，其中包含了AI报告分析的背景说明和分析要求：

```
Background: The AI field is rapidly evolving, with new methodologies and applications emerging regularly. It's crucial to critically analyze technical reports to understand their implications, strengths, and weaknesses.

Analysis Requirements:
1. Provide a brief summary of the report's main objectives and findings.
2. Identify its main points and technical highlights.
3. Point out any potential issues, shortcomings, or areas that might require further research.
4. Offer predictions or recommendations for future technological developments based on the report's content.
5. Comment on the report's relevance and significance in the current AI landscape.

Please analyze the following AI technical report considering the above requirements. The report content is as follows: [Insert Report Content Here]
```

您可以将 [Insert Report Content Here] 替换为您具体的AI技术报告内容，然后使用这个提示词来引导GPT进行分析。

这个模板为您提供了一个更全面的分析框架。如有其他需求或问题，请随时告诉我。
````

User:

```
增加格式化输出总结内容，例如列表的方式
```

Assistant:

````
当然可以。以下是一个增加了格式化输出要求的英文提示词模板：

```
"Background: The AI field is rapidly evolving, with new methodologies and applications emerging regularly. It's crucial to critically analyze technical reports to understand their implications, strengths, and weaknesses.

Analysis Requirements:
1. Provide a brief summary of the report's main objectives and findings.
2. Identify its main points and technical highlights.
3. Point out any potential issues, shortcomings, or areas that might require further research.
4. Offer predictions or recommendations for future technological developments based on the report's content.
5. Comment on the report's relevance and significance in the current AI landscape.

Please analyze the following AI technical report considering the above requirements. The report content is as follows: [Insert Report Content Here]

Format for Analysis Output:
- **Summary**: [Brief summary of the report]
- **Main Points and Highlights**:
  1. [First main point/highlight]
  2. [Second main point/highlight]
  3. [And so on...]
- **Potential Issues/Shortcomings**:
  1. [First issue/shortcoming]
  2. [Second issue/shortcoming]
  3. [And so on...]
- **Predictions/Recommendations**: [Your predictions or recommendations]
- **Relevance in Current AI Landscape**: [Your comments on its relevance and significance]"
```

您可以将 [Insert Report Content Here] 替换为您具体的AI技术报告内容，然后使用这个提示词来引导GPT进行分析，并按照指定的格式输出分析结果。

这个模板为您提供了一个更明确和结构化的分析框架。如有其他需求或问题，请随时告诉我。
````

User:

```
输出内容中，增加报告名称，报告作者等信息
```

Assistant:

````
当然可以。以下是一个进一步增加了报告名称、报告作者等信息的英文提示词模板：

```
"Background: The AI field is rapidly evolving, with new methodologies and applications emerging regularly. It's crucial to critically analyze technical reports to understand their implications, strengths, and weaknesses.

Analysis Requirements:
1. Provide a brief summary of the report's main objectives and findings.
2. Identify its main points and technical highlights.
3. Point out any potential issues, shortcomings, or areas that might require further research.
4. Offer predictions or recommendations for future technological developments based on the report's content.
5. Comment on the report's relevance and significance in the current AI landscape.

Please analyze the following AI technical report considering the above requirements. The report content is as follows: [Insert Report Content Here]

Format for Analysis Output:
- **Report Title**: [Title of the report]
- **Author(s)**: [Name(s) of the author(s)]
- **Publication Date**: [Date of publication, if available]
- **Summary**: [Brief summary of the report]
- **Main Points and Highlights**:
  1. [First main point/highlight]
  2. [Second main point/highlight]
  3. [And so on...]
- **Potential Issues/Shortcomings**:
  1. [First issue/shortcoming]
  2. [Second issue/shortcoming]
  3. [And so on...]
- **Predictions/Recommendations**: [Your predictions or recommendations]
- **Relevance in Current AI Landscape**: [Your comments on its relevance and significance]"
```

您可以将 `[Insert Report Content Here]`、`[Title of the report]`、`[Name(s) of the author(s)]` 等占位符替换为您具体的AI技术报告内容和相关信息，然后使用这个提示词来引导GPT进行分析，并按照指定的格式输出分析结果。

这个模板为您提供了一个更完整和结构化的分析框架。如有其他需求或问题，请随时告诉我。
````

User:

```
很好在此基础上，我希望总结更加侧重技术创新和实际应用场景的内容
```

Assistant:

````
了解您的需求。以下是一个更加侧重于技术创新和实际应用场景的英文提示词模板：

```
"Background: The AI field is characterized by rapid technological innovations and diverse applications. Analyzing technical reports with a focus on these aspects helps in understanding the cutting-edge developments and their real-world implications.

Analysis Requirements:
1. Provide a brief summary of the report's main objectives and findings.
2. Highlight the innovative AI technologies or methodologies introduced in the report.
3. Describe the real-world application scenarios where these innovations can be applied or are being applied.
4. Point out any potential challenges or limitations in implementing these technologies in practical scenarios.
5. Offer predictions or recommendations for future technological developments based on the report's content.
6. Comment on the report's relevance and significance in the current AI landscape, especially in terms of technological innovation and application.

Please analyze the following AI technical report considering the above requirements. The report content is as follows: [Insert Report Content Here]

Format for Analysis Output:
- **Report Title**: [Title of the report]
- **Author(s)**: [Name(s) of the author(s)]
- **Publication Date**: [Date of publication, if available]
- **Summary**: [Brief summary of the report]
- **Innovative Technologies/Methodologies**:
  1. [First innovative technology/methodology]
  2. [Second innovative technology/methodology]
  3. [And so on...]
- **Application Scenarios**:
  1. [First application scenario]
  2. [Second application scenario]
  3. [And so on...]
- **Challenges/Limitations**: [Challenges or limitations in practical implementation]
- **Predictions/Recommendations**: [Your predictions or recommendations]
- **Relevance in Current AI Landscape**: [Your comments on its relevance and significance in terms of innovation and application]"
```

您可以将模板中的占位符替换为您具体的AI技术报告内容和相关信息，然后使用这个提示词来引导GPT进行分析，并按照指定的格式输出分析结果。

这个模板更加强调了技术创新和实际应用场景的分析。如有其他需求或问题，请随时告诉我。
````

User:

```
很好，请从专业 prompt engineer 角度分析上述提示词的优点，用列表的格式输出
```

Assistant:

```
当然可以。以下是从专业的prompt engineer角度分析上述提示词的优点：

- **明确性**:
  1. **目标导向**：提示词明确指出了分析的重点，如技术创新和实际应用场景。
  2. **详细的要求**：通过列出具体的分析要求，确保了GPT能够全面地进行分析。

- **结构化**:
  1. **背景描述**：为GPT提供了AI领域的背景信息，有助于生成更为相关的分析内容。
  2. **格式化输出**：通过指定输出格式，确保了GPT生成的内容结构清晰、易于理解。

- **全面性**:
  1. **多角度分析**：除了技术和应用，还涵盖了挑战、限制和未来预测等方面。
  2. **报告基本信息**：包含报告的标题、作者和发布日期等信息，使得分析更为完整。

- **灵活性**:
  1. **占位符使用**：通过使用占位符，使得该提示词模板可以应用于多种AI技术报告的分析。
  2. **适应性**：提示词的结构允许用户根据需要进行微调，以满足特定的分析需求。

这些优点确保了提示词可以有效地引导GPT进行深入、结构化和全面的分析，同时也为用户提供了足够的灵活性来适应不同的报告内容。
```

User:

```
很好，请帮我总结为4点，分别对应明确性，结构化等方面
```

Assistant:

```
当然可以，以下是对上述提示词优点的简化总结，分为四个主要方面：

- **明确性**:
  - 提示词明确指出了分析的重点和目标，如技术创新和实际应用场景，确保了GPT能够全面地进行分析。

- **结构化**:
  - 通过背景描述和指定的输出格式，提示词为GPT提供了清晰的分析框架，使生成的内容结构化、有逻辑性。

- **全面性**:
  - 提示词涵盖了从技术到应用，再到挑战和未来预测的多个方面，确保了分析的全面性。

- **灵活性**:
  - 通过使用占位符和模块化的结构，提示词模板可以轻松地应用于多种AI技术报告的分析，同时为用户提供了调整的灵活性。

这四个方面共同确保了提示词可以有效地引导GPT进行深入、结构化和全面的分析，同时也为用户提供了足够的灵活性。
```

## 总结

通过上述和 GPT-4 的几轮交互，便通过 GPT-4 创建了一个用于分析研究报告的 prompt。随着大语言模型不断地技术更新，prompt 数据越来越多，通过 AI 本身来创建 prompt 肯定会成为 prompt engineer 的重要技能之一，每个人都可以尝试通过这种方式创建自己的 prompt，为了更好的通过 AI 创建 prompt，需要掌握以下几点：

1. 基本了解大语言模型，了解一些 prompt 基本特征和技巧
2. 搞明白自己要的是什么
3. 搞明白自己要的是什么
4. 搞明白自己要的是什么

