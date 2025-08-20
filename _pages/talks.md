---
layout: page
permalink: /talks/
title: Talks & Content Creation
description: Educational content and knowledge sharing activities beyond formal teaching
years: [2024,2023,2022,2021]
nav: false
heading: Talks & Content Creation
---

<div class="publications">

Beyond my formal teaching activities (listed under <a href="/teaching-courses/">Teaching → Courses</a>), I am passionate about sharing knowledge in <b>AI/ML</b> through content creation and educational outreach. Below you can find my educational content and knowledge sharing activities classified as
<span class="badge badge-info">Content Creation</span>. 

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f talks -q @*[year={{y}}]* %}
{% endfor %}

</div>
