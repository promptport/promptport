---
id: principles-2
title: 原则2
sidebar_position: 3
---

----

## 技巧 1：一步一步完成任务

链式思维（COT），能大大提高结果的准确性。面对复杂任务，大模型不会主动将任务进行拆解处理。当任务结果依赖中间过程状态，那我们在写提示词的时候，应该将提示词进行一步一步拆分，让大模型按照设计的流程一步一步操作。



示例：

```
Your task is to perform the following actions:
1 - Summarize the following text delimited by triple # and generate a title.
2 - Translate the text and title into English.
3 - Output a JOSN object with the following keys: origin_text, origin_title, en_title, en_text.

Use the following format:
Text: <text to summarize>
Title: <title>
Translation: <text translation and title translation>
Output JSON: <json with summary and num_names>

Text: ###text###
```



## 技巧 2：自我检查

这个技巧主要是为了解决大模型幻觉问题，在使用大模型的时候应该经常能遇到 AI 在一本正经地胡说八道，为了避免这种情况，需要让 AI 对结果进行自我检查。检查必然会对应存在一个用于判定是否正确的标准或者正确答案，一般这个标准或者正确答案可以通过我们举例提供，也可以让AI自己一步一步推导，然后将推导结果和我们任务的目标结果进行对比，得到最终结果。



示例：

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


