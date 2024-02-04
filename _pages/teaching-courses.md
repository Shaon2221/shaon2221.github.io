---
layout: page
permalink: /teaching-courses/
title: Courses
description:
years: [March 2024, August 2021]
nav: false
heading: 
---

Below are listed all the courses that I have taught as the primary instructor since 2021, with
links to their respective websites.  

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f classes -q @*[year={{y}}]* %}
{% endfor %}

</div>
