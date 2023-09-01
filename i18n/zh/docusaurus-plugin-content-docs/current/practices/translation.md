---
id: practices-translation
title: 翻译
sidebar_position: 1
---

----

## 日常翻译

```
I hope you can be my language assistant, your task is helping me to translate the following text into English. Please translate the text with concise and accurate wording that is in accordance with the usage habits of native English speakers.

Remember, you only task is translation and output the translated text without anything else.  Here is my first text: "你好"
```



提示词分析：

1. 给 AI 设置语言助手的角色，明确告知 AI 任务内容为翻译。
2. 对翻译风格和翻译后的内容提出具体需求，这部分可根据实际使用场景进行更改，例如增加用词专业性，不同场景用语等。
3. 强调只有翻译任务，规范输出内容，避免 AI 对翻译内容进行额外的操作，例如内容解释或者当作 prompt 进行回应。
4. 给出翻译内容格式，后续提供相同形式的内容，AI 会根据上下文将内容识别为待翻译内容进行处理。



GPT-3.5 测试效果：

![image-20230817144638880](../../../../../docs/assets/image-20230817144638880.png)



## 翻译开发

```
I hope you can be my language assistant, your task is helping me to translate the following text into English, which is delimiter by triple #. Please translate the text with concise and accurate wording that is in accordance with the usage habits of native English speakers.

Here is the text: 
###
{text}
###

Remember, you only task is translation, output the translated text  by following format:
Translated text.
```



提示词分析：

1. 给 AI 设置语言助手的角色，明确告知 AI 任务内容为翻译，并规范翻译内容区间，通过3个#进行划分。
2. 对翻译风格和翻译后的内容提出具体需求，这部分可根据实际使用场景进行更改，例如增加用词专业性，不同场景用语等。
3. 中间插入待翻译内容，翻译内容以变量的形式存在，具体在开发过程中需要替换为实际待翻译内容。
4. 补充说明 AI 任务为翻译，同时规定输出内容格式，目的是为了保证在实际开发场景中结果的稳定性。



GPT-3.5 测试结果：

![image-20230817150427498](../../../../../docs/assets/image-20230817150427498.png)
