---
id: tools-chatgpt
title: ChatGPT
sidebar_position: 1
---

----

ChatGPT is a chatbot based on the GPT-3 and GPT-4 architectures provided by the [OpenAI](https://openai.com/) lab. Since its establishment in 2015, OpenAI has been exploring language models, successively releasing GPT-2, GPT-3, and the widely used GPT-3.5 and GPT-4 LLM today. These models are trained with a vast amount of text data and can generate coherent and meaningful text. They are widely used in text generation, question and answer systems, text summarization, and other fields.

ChatGPT allows users to ask questions or give command tasks through chatting. ChatGPT provides a simpler way for human-computer interaction. Users don't need to learn machine language or advanced language in advance. By describing tasks or purposes in natural language, the AI model can "guess" your expected answer based on the content you provide. Whether it's students, tech developers, researchers, or text-related workers, when facing questions in life and work, they can think of using ChatGPT to get the desired answer. ChatGPT offers a simple, efficient, and mostly reliable way to save us time to do other interesting things.

![ChatGPT Image](../assets/image-20230816150902989.png)

Since the release of the ChatGPT product, its ecosystem has been slowly expanding, and many excellent official plugins have emerged. Users can install the required plugins from `Plugins`, and during the use of ChatGPT, AI will automatically determine whether to use the plugin function. For example, the `WebPilot` plugin can help users query real-time web page data, solving the problem that the LLM cannot obtain data after September 2021. Users who want to use the plugin function need to meet two conditions: first, become a paid user; second, turn on the plugin switch in `Settings`. The current plugin function is still in the Beta stage.

![ChatGPT Plugins](../assets/image-20230816163532883.png)

To facilitate engineering development, OpenAI also provides an [API](https://platform.openai.com/docs/api-reference) to call ChatGPT or interact directly with it in the OpenAI [Playground](https://platform.openai.com/playground). The Playground is generally used for debugging prompts. It provides parameters such as Mode, LLM, Temperature, and Maximum Length for debugging the final effect of the prompt. For what these parameters mean and how to set them, refer to the API documentation's [Create completion](https://platform.openai.com/docs/api-reference/completions/create) call parameter description.

![OpenAI Playground](../assets/image-20230816163935239.png)

It should be noted that ChatGPT itself is constantly improving. Whether it's upgrading from GPT-3.5 to GPT-4, the LLM itself is also constantly fine-tuning based on user feedback during actual use. The same prompt, even if the `Temperature` is set to 0, the result may still change. This change, in the long run, is definitely more beneficial than harmful. Whether it's model upgrades or fine-tuning, it will have varying degrees of impact on existing engineering projects based on ChatGPT technology. This impact in the short term is probably inevitable. The only thing that can be done is to keep up with the pace of AI technology development and be prepared for possible changes.

[Official Link](https://chat.openai.com/)