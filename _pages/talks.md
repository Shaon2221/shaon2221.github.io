---
layout: page
permalink: /talks/
title: Talks and Presentations
description: AI/ML conference talks, seminars, and technical presentations
years: [2024,2023,2022,2021]
nav: false
heading: Talks and Presentations
---

<div class="publications">

I have delivered technical presentations and talks on <b>AI/ML topics</b> including machine learning, deep learning, NLP, and MLOps across various conferences, seminars, and industry events. Below you can find presentations classified as
<span class="badge badge-danger">Conference</span> <span class="badge badge-primary">Seminar</span> <span class="badge badge-warning">Workshop</span> and <span class="badge badge-light">Industry Talk</span>. 

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f talks -q @*[year={{y}}]* %}
{% endfor %}

</div>
