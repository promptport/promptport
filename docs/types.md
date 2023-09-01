---
id: prompt-types
title: 📋 Types Of Prompts
sidebar_position: 2
---

------

This classification is specifically for `text-to-text` type prompts.



## Giving Instructions

Giving Instructions prompts directly describe the operation object and task content in the content. This approach is clear in purpose and easy to understand.



Example (sanitized):

```
### Prompt
Read the following sales email. Remove any personally identifiable information (PII), and replace it with the appropriate placeholder. For example, replace the name "John Doe" with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com


### GPT-3.5 Response
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: [PHONE]
Email: [EMAIL]
```

The processed content has sanitized names, phone numbers, email addresses, etc. However, some sensitive information, such as the sender's name and merchant name, has not been processed.



Using Giving Instructions prompts can quickly make LLMs understand our needs and solve problems. When the target object's scope becomes broader and the task content becomes more complex, we need to add a description of the target content in the prompt, simplify or split complex tasks, so that we can get the expected results more efficiently. Otherwise, you will only get a response that you think is unintelligent.



## Role-playing

Role-playing prompts are often used for text stylization. It involves asking LLMs to pretend to be someone or act in a certain way, modifying its writing style according to the assigned role. This can be used to change tone, style, and even the depth of the information presented.



Example (food review):

```
### Prompt
Write a review of [pizza place]

### GPT-3.5-turbo Response
Title: An Unforgettable Pizza Experience at [Pizza Place]

Rating: ⭐️⭐️⭐️⭐️⭐️ (5/5)

[Pizza Place] is a haven for pizza lovers, and after trying their delicious creations, I am convinced that it is one of the best pizza joints in town. From their top-notch service to the unforgettable taste of their pies, this place truly exceeded my expectations.

... [rest of the review]
```

Optimized to use the tone of a Michelin column writer to write a food review.

```
### Prompt
You are a food critic writing for the Michelin Guide. Write a review of [random pizza place].

### GPT-3.5-turbo Response
Restaurant Review: [Random Pizza Place]

Rating: ★★★★☆ (4 out of 5 stars)

... [rest of the review]
```



Role-playing prompts focus more on the style and tone of the output content. These factors are the key to deciding whether to use role-playing prompts. For example, if the goal is a math problem, you should think clearly at the beginning whether the result focuses on the solution process or the correctness of the final result. If the correctness of the final result is required, there is no need to spend a lot of time describing a character role to solve this problem. It is more effective to find a way to make LLMs better understand this problem.



## Few-shot Prompting

The prompt provides relevant example content, hoping that LLMs will imitate the example content to handle the target task. This is currently the most effective way to handle customized demand scenarios, such as hoping that LLMs can output content in a specific format. Depending on the number of examples provided, it is divided into the following types:

- 0 shot prompting: no example content
- 1 shot prompting: 1 example content
- few shot prompting: 2 or more example content

Example (Judging comment attitude):

```
### Prompt
Great product: positive
Didn't work very well: negative
Super helpful, worth it: positive
The product can be better:

### GPT-3.5-turbo Response
negative
```

After giving an example, even without additional task descriptions, LLMs can accurately identify that the task is to analyze the content's semantics to get the result of `positive` or `negative`. We only need to replace the target content with variables, and this prompt can be reused efficiently, and the output result is very stable. This is very, very important in engineering projects.