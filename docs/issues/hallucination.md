---
id: issues-hallucination
title: Hallucination
sidebar_position: 1
---

----

### What is Hallucinations?
LLMs (Large Language Models) respond to your questions or tasks, essentially "guessing" the answer you want based on its training data, one word at a time. However, this answer cannot guarantee truthfulness or accuracy. LLMs might be making things up while sounding very serious, which is why some companies have not yet deployed LLMs on a large scale in actual production.



Alice Company's "Happy" brand smartphone (which doesn't exist)

![image-20230821113728813](../assets/image-20230821113728813.png)



### Why do Hallucinations occur?

The LLMs we use now are products trained on historical data, like the GPT model, which has a vast amount of training data covering a wide range, including text, code, and even image information. One issue with this mode is that the data used for training might be unreal, incomplete, or artificially created false information. These pieces of information do not conform to objective facts but are still used for model training. LLMs operating in this mode, when executing, aim to create the answer with the highest relevance to the expected answer, which can easily lead to the Hallucination issue.



### How to reduce Hallucinations?

1. Whether for ordinary or professional users, the priority is to find an LLM product that is as "real" as possible. As for how to determine its authenticity, only practice can tell.
2. First, find relevant information and answer questions based on that information.
3. Check if the result is based on the provided information.

 
