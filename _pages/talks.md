---
layout: page
permalink: /talks/
title: Teaching & Content Creation
description: AI/ML courses, educational content, and knowledge sharing activities
years: [2024,2023,2022,2021]
nav: false
heading: Teaching & Content Creation
---

<div class="publications">

I am passionate about sharing knowledge in <b>AI/ML</b> through teaching, course development, and content creation. My educational activities include formal course instruction and producing educational content on Generative AI, Machine Learning, and MLOps. Below you can find my teaching and content creation activities classified as
<span class="badge badge-success">Teaching</span> <span class="badge badge-info">Content Creation</span>. 

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f talks -q @*[year={{y}}]* %}
{% endfor %}

</div>
