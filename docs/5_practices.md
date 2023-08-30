---
id: prompt-practices
title: 🏆 Best Practices
sidebar_position: 5
description: Prompt best practices for learning.
---

------


## Translation

### Daily Translation

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

![image-20230817144638880](./assets/image-20230817144638880.png)


### Translation for Development

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

![image-20230817150427498](./assets/image-20230817150427498.png)



## Summary

### Product Review Summary

````
Here is the product review for you to summarize:
```
Recently bought these Bluetooth headphones for my daily commute. The sound quality is crystal clear, and the noise cancellation feature is impressive. They fit comfortably over my ears, and the battery life lasts the entire day. However, considering the price, I expected a more durable build. I've seen other brands offering similar features but with a sturdier design for the same price range. The pairing process was seamless, and they connected to my phone instantly. Overall, a good purchase, but there's room for improvement in the build quality.
```

Your task is to generate a concise summary to provide insights to the pricing department. Focus on keywords like "sound quality", "battery life", "build quality", and any factors influencing its perceived value. Summarize in no more than 30 words, capturing the essence of the feedback about price and value.

Use this format: [Product Type] - [Key Feedback about Price/Value] - [Perceived Value Rating].

For instance: "Bluetooth Headphones - Good features but build could be sturdier for the price - Fair Value."

Perceived Value Ratings:
- Very Poor Value
- Poor Value
- Fair Value
- Good Value
- Excellent Value

Choose the most appropriate rating based on the review's content.
````



Analysis of the prompt:

1. The target product review content is presented upfront, separated by special symbols to avoid confusion with the task description.
2. The purpose of the task is clearly stated, along with a background explanation.
3. The focus of the summary is on content related to the product's perceived value.
4. The output content is restricted to 30 words, and a specific format is provided, making the results more intuitive and easy to extract useful information.
5. A one-shot example is provided to enhance output stability.



GPT-3.5 Test Results:

![image-20230818115533110](./assets/image-20230818115533110.png)



### Research Report Summary

```
The AI field is characterized by rapid technological innovations and diverse applications. Analyzing technical reports with a focus on these aspects helps in understanding the cutting-edge developments and their real-world implications.

Analysis Requirements:
1. Provide a brief summary of the report's main objectives and findings.
2. Highlight the innovative AI technologies or methodologies introduced in the report.
3. Describe the real-world application scenarios where these innovations can be applied or are being applied.
4. Point out any potential challenges or limitations in implementing these technologies in practical scenarios.
5. Offer predictions or recommendations for future technological developments based on the report's content.
6. Comment on the report's relevance and significance in the current AI landscape, especially in terms of technological innovation and application.

Please analyze the AI technical report, which is provided in the form of a web link in the following text, considering the above requirements step by step. 

Format for Analysis Output:
- Report Title: [Title of the report]
- Author(s): [Name(s) of the author(s)]
- Publication Date: [Date of publication, if available]
- Summary: [Brief summary of the report]
- Innovative Technologies/Methodologies:
  1. [First innovative technology/methodology]
  2. [Second innovative technology/methodology]
  3. [And so on...]
- Application Scenarios:
  1. [First application scenario]
  2. [Second application scenario]
  3. [And so on...]
- Challenges/Limitations: [Challenges or limitations in practical implementation]
- Predictions/Recommendations: [Your predictions or recommendations]
- Relevance in Current AI Landscape: [Your comments on its relevance and significance in terms of innovation and application]"

Report web link: {web_link}
```



Analysis of the prompt:

1. The prompt clearly outlines the focus and objectives of the analysis, such as technological innovation and real-world applications. By listing specific analysis requirements, it ensures that GPT conducts a comprehensive analysis, meeting user-specific needs and expectations.
2. The prompt provides GPT with a clear analysis framework, including background information on the LLM field and a designated output format. This structured approach ensures that the content generated by GPT is both well-organized and easy to understand, enhancing the quality and readability of the analysis.
3. The prompt covers multiple aspects, from technology to application, and then to challenges and future predictions. Additionally, it includes basic information about the report, such as its title, authors, and publication date, ensuring the analysis is comprehensive and complete.
4. Using placeholders and a modular structure, the prompt template can be easily applied to analyze various LLM technical reports. Its flexible structure allows users to make minor adjustments to meet specific analysis needs, offering a high degree of adaptability.



## Inference

Product Review Inference

```
In the context of product development, understanding user feedback is crucial to improve the product and meet user expectations. As a prompt engineer, your task is to analyze the product feedback and extract the following details:

- Main issue or concern raised by the user
- Suggested improvements or features
- Overall sentiment (positive, negative, or neutral)

The feedback is delimited with triple backticks. Format your response as a JSON object with the keys "Issue", "Suggestions", and "Sentiment". If the information isn't present, use "unknown" as the value.

Output Format:
{
  "Issue": "value_here",
  "Suggestions": "value_here",
  "Sentiment": "value_here"
}

Keep your response concise and accurate.

Product Feedback:  ```{feedback_text}```
```



Analysis of the prompt:

1. Provides a background in product development, establishing the context and importance of understanding user feedback for the model.
2. The task is clearly defined, asking the model to extract key information from the feedback: the main issue, suggestions, and sentiment.
3. Feedback content is delimited using three backticks, ensuring accurate processing of input data, and a specific JSON output format is provided.
4. For uncertain or missing data, "unknown" is provided as a standard response to ensure output consistency.
5. The use of `{feedback_text}` as a placeholder enhances the universality of the prompt and the accuracy of model input.



GPT-3.5 Test Results:

![image-20230818183158850](./assets/image-20230818183158850.png)