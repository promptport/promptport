---
id: practices-infer
title: Inference
sidebar_position: 3
---

----

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

![image-20230818183158850](../assets/image-20230818183158850.png)