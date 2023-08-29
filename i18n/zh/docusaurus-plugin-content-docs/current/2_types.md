---
id: prompt-types
title: 提示词类型
sidebar_position: 2
---

------

> 仅针对 `text-to-text` 类型的 prompt 内容进行分类。


## 指令型 (Giving Instructions)

指令型提示词会在内容中对操作对象和任务内容进行直接描述，这种方式目的明确且容易被理解。



提示词示例：（脱敏）

```
### Prompt
Read the following sales email. Remove  any personally identifiable information (PII), and replace it with the appropriate placeholder. For example, replace the name "John Doe" with "[NAME]".

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

处理后的内容将人名，电话，邮箱地址等进行了脱敏操作。但仍然存在一些敏感信息没有被处理，例如发件人名称，商家名称，没有被处理。

使用指令型提示词，能够快速让 AI 理解我们的需求从而解决问题。当问题的目标对象范围变宽泛，任务内容变复杂，则需要我们在提示词中增加对目标内容的描述，将复杂任务进行简化或者拆分，这样才能更高效地得到预期的结果。否则，你只能得到一个你觉得智障的回复。



## 角色扮演型（Role Prompting）

角色提示通常用于文本样式化。它涉及要求AI假装成某个人，或以某种方式行动，根据分配的角色修改其写作方式。这可以用来改变语气、风格，甚至所呈现信息的深度。



示例提示词：（食物评价）

```
### Prompt
Write a review of [pizza place]

### GPT-3.5-turbo Response
Title: An Unforgettable Pizza Experience at [Pizza Place]

Rating: ⭐️⭐️⭐️⭐️⭐️ (5/5)

[Pizza Place] is a haven for pizza lovers, and after trying their delicious creations, I am convinced that it is one of the best pizza joints in town. From their top-notch service to the unforgettable taste of their pies, this place truly exceeded my expectations.

Upon entering, I was greeted warmly by the friendly staff, who promptly guided me through their impressive menu. The ambiance was cozy and inviting, making it the perfect spot to enjoy a casual meal with friends or family. The interior was tastefully decorated, with the open kitchen on full display, showcasing the expertise of the talented pizza chefs.

Now let's get to the most important part: the pizza itself. The extensive variety of toppings and combinations available made it difficult to choose, but I ultimately settled on their specialty, the [Pizza Name]. I have to say, it was a game-changer. The crust was cooked to perfection, with the ideal balance of crispiness and chewiness. The cheese was gooey and melted just right, complementing the sauce beautifully. Each bite was a symphony of flavors, leaving my taste buds absolutely delighted.

What sets [Pizza Place] apart from others is their commitment to using high-quality, fresh ingredients. The attention to detail is evident in every aspect of their pizzas, from the hand-tossed dough to the carefully selected toppings. It's evident that the individuals behind the scenes truly have a passion for their craft.

What impressed me the most was the exceptional service provided by the staff. They were knowledgeable, attentive, and genuinely enthusiastic about their pizzas. They made helpful recommendations based on my preferences and ensured that my dining experience was nothing short of outstanding.

Lastly, the value for money at [Pizza Place] is remarkable. Despite the premium quality of their pizzas and the impeccable service, the prices were reasonable and competitive, making it accessible to all pizza enthusiasts.

In conclusion, [Pizza Place] truly stands out as a stellar pizza destination. With their mouthwatering pizzas, warm and welcoming atmosphere, and outstanding service, it's no wonder they have gained a loyal following. Whether you're a pizza lover or simply looking for a fantastic dining experience, [Pizza Place] is a must-visit. I will definitely be returning soon to indulge in more of their delectable creations.
```

优化为用米其林专栏作家的口吻，写一个食物评价。

```
### Prompt
You are food critic writing for the Michelin Guide. Write a review of [random pizza place].

### GPT-3.5-turbo Response
Restaurant Review: [Random Pizza Place]

Rating: ★★★★☆ (4 out of 5 stars)

As a seasoned food critic for Michelin Guide, I have the pleasure of experiencing diverse culinary creations. Today, I am thrilled to present my review of [Random Pizza Place], a delightful pizzeria hidden in the heart of the city. This unassuming eatery has its own unique charm that sets it apart from the myriad of pizza places scattered across town.

Upon entering [Random Pizza Place], one is greeted by an inviting and cozy atmosphere, exuding a comforting aura that immediately puts diners at ease. The minimalist décor with simple wooden tables and soft lighting creates an unpretentious ambiance, where the focus is undeniably on the star of the show - the pizzas.

The menu at [Random Pizza Place] showcases an impressive selection of artisanal pizzas, prepared with the utmost care and highest quality ingredients. From classic Margherita to inventive combinations, the options cater to both traditionalists and those seeking a tantalizing flavor adventure.

During my visit, I had the pleasure of trying their renowned "Quattro Stagioni" pizza, a celebration of the four seasons on a plate. Each quarter of the pizza was adorned with meticulously balanced ingredients representing spring, summer, autumn, and winter. The crust, hand-tossed to perfection, was a delightful blend of chewiness and crispness, providing a solid foundation for the flavor symphony on top.

The spring quarter featured a vibrant medley of fresh, locally sourced vegetables, while the summer section tantalized my taste buds with the perfect balance of tangy tomato sauce and aromatic basil. The autumn zone surprised me with earthy mushrooms, truffle oil, and a hint of nuttiness, while the winter square indulged me with velvety mozzarella, smoky bacon, and roasted garlic cloves. Each bite was a journey through the seasons, accentuating the skill and artistry of the pizzaiolos at [Random Pizza Place].

What sets this pizza joint apart from its competitors is their commitment to using high-quality ingredients. Freshly imported Italian cheeses, locally grown produce, and artisanal cured meats create a harmonious symphony of flavors that elevate each pizza to delectable heights.

The service at [Random Pizza Place] deserves a special mention. The staff is warm, attentive, and knowledgeable, readily suggesting expert wine pairings to enhance the pizza experience. Their dedication to ensuring guests feel like part of the family is unparalleled, adding to the overall positive dining experience.

The only reason I withhold that coveted fifth star is due to the limited dessert offerings. Although a fine selection of gelato is available, an expanded range of sweet treats would undoubtedly be the cherry on top of an already fantastic meal.

In conclusion, [Random Pizza Place] is an exemplary pizza destination that promises an outstanding dining adventure. With their top-quality ingredients, inventive combinations, and warm service, they undoubtedly deserve a notable place in the Michelin Guide. Whether you're a fervent pizza lover or simply seeking a remarkable culinary experience, this charming pizzeria will not disappoint.
```

角色扮演型提示词更加侧重输出内容时采用的风格和语气，这些因素才是决定是否使用角色扮演型提示词的关键。例如目标是一道数学题，那么一开始就应该思考清楚，结果侧重是解题的过程还是最终结果的正确性。如果是要求最终结果的正确性，那没必要花大量时间去描述一个人物角色来解这道题，想办法让 AI 更好理解这道题更加有效。



## 示例型（Few Shot Prompting）

提示词中给出相关示例内容，目的希望 AI 仿照示例内容去处理目标任务，这是目前处理客制化需求场景最有效的方式，例如希望 AI 能够已某种特定的格式输出内容。根据提供示例的数量分为以下几种类型：

- 0 shot prompting: 没有示例内容
- 1 shot prompting: 1个示例内容
- few shot prompting: 2个或2个以上的示例内容



示例提示词：（判断评论态度）

```
### Prompt
Great product: positive
Didn't work very well: negative
Super helpful, worth it: positive
The product can be better:

### GPT-3.5-turbo Response
negative
```

给出示例后，在没有额外任务描述的情况下，AI 也能够准确识别任务是通过前面的内容的语义分析得出结果是 `positive` 还是 `negative` 。我们只需要将目标内容替换为变量，这个提示词就可以被高效复用，并且输出结果具有非常好的稳定性，这点在工程项目中非常非常重要。
