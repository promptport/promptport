---
id: principles-2
title: Principle 2
sidebar_position: 3
---

----

## Trick 1: Complete Tasks Step by Step

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



## Trick 2: Self-check

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

