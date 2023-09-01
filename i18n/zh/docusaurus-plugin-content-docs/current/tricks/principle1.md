---
id: principles-1
title: 原则1
sidebar_position: 2
---

----

## 技巧 1：使用分隔符

如果提示词中存在不同功能性的内容，例如描述性内容，示例内容等，使用分隔符能够让大模型更好的理解不同的内容。



常用分隔符：

```
Triple quotes: """

Triple backticks: ```

Triple dashes: ---

Angle brackets: < >

XML tags: <tag> </tag>
```



示例：

```
Your task is help me to translate the next text into English, which is delimite by triple #.
Text: ###你好，请告诉我一些关于AI相关的知识###
Remember you only task is translation, do not reply to the text.
```

在这个示例中，使用分隔符能够清楚告诉AI你想要翻译的内容，并且可以在提示词最后再补充说明其他的需求。



## 技巧 2：结构化输出

如果对于输出内容有特殊需求，可在提示词要求以特定格式输出内容。例如 HTML, JSON 等。



示例：

```
Please generate a fairy tale for me. Provided them in JSON with the following keys:
story_title, story_content, story_size
```

通过指定 JSON 格式的 key 可以得到结构化的输出内容，这个技巧非常适用基于AI的开发的场景。

需要特别注意的是，无论是 GPT-3.5，GPT-4 或者别的大模型，要求的输出格式越复杂越容易出错。当然大模型能力越强出错的概率越低，但在工程开发的过程中，我们需要考虑到这个问题。可以通过拆分任务，简化输出结果，也可以通过 `few-shot` 等技巧尽量将这个错误率控制在可接受范围内。



## 技巧 3：条件检查

条件检查实质是让AI对提示词中的目标内容进行分析，判断条件是否满足，然后执行对应的流程。



示例：

```
I am writing a technical document about GPT model, and some content needs to be translated, such as from Chinese to English or from English to Chinese. I hope you can help me with the translation task. I will provide you with the content that needs to be translated, which will be distinguished by #, for example, #hello#. 
Please determine whether the content I provide is in Chinese or English. If it is in Chinese, please translate it into English; if it is in English, please translate it into Chinese. 
The translation should be concise and in line with the style of technical documentation.
```

上述的示例中，如果不在提示词中写入条件判断逻辑，一般我们需要将内容的语言预判断，然后编写对应的提示词。但 LLM 可以通过语义分析，判断内容的语言类型，这也是 LLM 的强项。



## 技巧 4：Few-shot 

`Few-shot` 包括了 `zero-shot `, `one-shot` 等概念，通过提供一些示例内容，帮助模型理解和处理问题。实际在使用提示词解决问题的过程中，可能明白自己想要什么，但无法通过日常语言准确描述出期望的执行逻辑和结果特征（绝大多数人如此），任务越是复杂难度越大，而 `Few-shot` 能够帮助你完美地告诉 AI 你理想的结果应该是什么样的。



示例：

```
Your task is to answer my question like a AI expert.

<user>: Tell me about GPT.

<assistant>: 
1. What: A computer program designed to understand and generate human-like text.
2. How: Built using something called the "Transformer architecture".
3. Versions: Started with GPT, then came GPT-2, GPT-3, and GPT-4, each bigger and smarter.
4. Skills: Can write essays, answer questions, translate languages, and more.
5. Learning Style: Can quickly pick up tasks even with just a few examples.
6. Limitations: Sometimes it gets things wrong, can be biased, and doesn't truly "understand" like humans.
7. Use Cases: Developers can plug it into apps or services.
8. Concerns: It's powerful, so there's worry about misuse or job impacts.

<user>: Tell me about AI.
```
