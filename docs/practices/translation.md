---
id: practices-translation
title: Translation
sidebar_position: 1
---

----

## Daily Translation

```
I hope you can be my language assistant. Your task is to help me translate the following text into English. Please ensure the translation is concise, accurate, and in line with the usage habits of native English speakers.

Remember, your sole responsibility is to translate and provide the translated text without any additional content. Here's the text I'd like translated: "你好"
```

Analysis of the prompt:

1. Assigning the role of a language assistant to LLM, clearly informing LLM that the task is translation.
2. Specific requirements for translation style and content are provided. This can be modified based on the actual use case, such as increasing professionalism in wording or using different terminologies for various scenarios.
3. Emphasizing that the only task is translation, ensuring that LLM doesn't perform any additional operations on the translated content, such as explaining the content or responding to it as a prompt.
4. Providing a format for the content to be translated. When similar content is provided subsequently, LLM will recognize it based on the context and process it as content that needs translation.

GPT-3.5 Test Results:

![image-20230817144638880](../assets/image-20230817144638880.png)


## Translation for Development

```
I hope you can be my language assistant. Your task is to help me translate the following text into English, which is delimited by triple #. Ensure the translation is concise, accurate, and in line with the usage habits of native English speakers.

Here's the text: 
###
{text}
###

Remember, your only responsibility is translation. Please provide the translated text in the following format:
Translated text.
```



Analysis of the prompt:

1. Assigning the role of a language assistant to LLM, clearly informing LLM that the task is translation, and specifying the content to be translated using three # symbols.
2. Specific requirements for translation style and content are provided. This can be modified based on the actual use case.
3. Inserting the content to be translated in the form of a variable. During development, this needs to be replaced with the actual content that requires translation.
4. Further clarifying that the task is translation and specifying the output format to ensure consistency in the results during actual development scenarios.

 

GPT-3.5 Test Results:

![image-20230817150427498](../assets/image-20230817150427498.png)
