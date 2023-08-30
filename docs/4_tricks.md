---
id: usage-tricks
title: 🛠️ Usage tricks
sidebar_position: 4
description: Usage tricks for the most questions.
---

------

> They can do a lot of things, but they need careful instruction to do them well.


## Principles for Using Prompts

- Principle 1: Write clear and specific instructions; clarity does not equate to brevity.
- Principle 2: Give the model some time to think.

These principles are proposed by the course [ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction). Combined with practical operations, they hope to assist in crafting your prompts.



## Principle 1

### Trick 1: Use Delimiters

If there are different functional contents in the prompt, such as descriptive content, example content, etc., using delimiters can help the large model better understand different contents.

Common delimiters:

```
Triple quotes: """

Triple backticks: ```

Triple dashes: ---

Angle brackets: < >

XML tags: <tag> </tag>
```

Example:

```
Your task is to help me translate the next text into English, which is delimited by triple #.
Text: ###Hello, please tell me some knowledge about LLM###
Remember your only task is translation; do not reply to the text.
```

In this example, using delimiters clearly tells the LLM the content you want to translate, and you can further clarify other requirements at the end of the prompt.



### Trick 2: Structured Output

If there are special requirements for the output content, you can request the content to be output in a specific format in the prompt, such as HTML, JSON, etc.

Example:

```
Please generate a fairy tale for me. Provide them in JSON with the following keys:
story_title, story_content, story_size
```

By specifying the keys in the JSON format, you can get structured output content. This tip is very suitable for LLM-based development scenarios.

It's important to note that whether it's GPT-3.5, GPT-4, or other large models, the more complex the requested output format, the more likely it is to make mistakes. Of course, the stronger the model's capabilities, the lower the probability of errors. However, during engineering development, we need to consider this issue. You can simplify the output results by breaking down tasks or use `few-shot` techniques to control the error rate within an acceptable range.



### Trick 3: Conditional Checks

Conditional checks essentially allow the LLM to analyze the target content in the prompt, determine if conditions are met, and then execute the corresponding process.

Example:

```
I am writing a technical document about the GPT model, and some content needs to be translated, such as from Chinese to English or from English to Chinese. I hope you can help me with the translation task. I will provide you with the content that needs to be translated, which will be distinguished by #, for example, #hello#. 
Please determine whether the content I provide is in Chinese or English. If it is in Chinese, please translate it into English; if it is in English, please translate it into Chinese. 
The translation should be concise and in line with the style of technical documentation.
```

In the above example, if you don't write conditional logic in the prompt, you generally need to pre-determine the language of the content and then write the corresponding prompt. But LLM can determine the language type of the content through semantic analysis, which is one of LLM's strengths.



### Trick 4: Few-shot

`Few-shot` includes concepts like `zero-shot` and `one-shot`. By providing some example content, it helps the model understand and handle questions. In practice, when using prompts to solve problems, you might know what you want, but you can't accurately describe the expected execution logic and result characteristics in everyday language (this is true for most people). The more complex the task, the harder it is. `Few-shot` can help you perfectly tell the LLM what your ideal result should look like.

Example:

```
Your task is to answer my question like an LLM expert.

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

<user>: Tell me about LLM.
```



## Principle 2

### Trick 1: Complete Tasks Step by Step

Chain thinking (COT) can greatly improve the accuracy of results. When faced with complex tasks, large models won't actively break down the tasks. When the task result depends on the intermediate process state, we should break down the prompt step by step when writing it, allowing the large model to operate step by step according to the designed process.

Example:

```
Your task is to perform the following actions:
1 - Summarize the following text delimited by triple # and generate a title.
2 - Translate the text and title into English.
3 - Output a JSON object with the following keys: origin_text, origin_title, en_title, en_text.

Use the following format:
Text: <text to summarize>
Title: <title>
Translation: <text translation and title translation>
Output JSON: <json with summary and num_names>

Text: ###text###
```



### Trick 2: Self-check

This tip is mainly to solve the hallucination problem of large models. When using large models, you should often encounter LLM talking nonsense with a straight face. To avoid this situation, you need to let the LLM self-check the results. There must be a standard or correct answer for the check. This standard or correct answer can be provided by us as an example, or the LLM can deduce it step by step and then compare the deduced result with the target result of our task to get the final result.

Example:

````
Your task is determine if the student's solution is correct or not.
To solve the problem do the following:
- First, work out your own solution to the problem.
- Then compare your solution to the student's solution and evaluate \
if the student 's solution is correct or not. Don't decide if the student's \
solution is correct until you have done the problem yourself.

Use the following format:
...

Question:
```
question content
```

Student's solution:
```
Student's solution content.
```
````

