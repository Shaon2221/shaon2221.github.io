---
layout: page
permalink: /projects/
title: Projects
description: Selected AI projects and case studies
nav: false
heading: Projects
---

<div class="mb-3">
  <a class="btn btn-outline-primary mr-2" href="https://github.com/shaon2221" target="_blank">
    <i class="fab fa-github"></i> View more on GitHub
  </a>
  <a class="btn btn-primary" href="mailto:shaonsikder.ewu@gmail.com">
    <i class="fas fa-paper-plane"></i> Start a project
  </a>
</div>

<div class="projects grid mt-4">
  <div class="row row-cols-1 row-cols-md-2">
    {%- assign projects = site.projects | sort: 'importance' | reverse -%}
    {%- for project in projects -%}
      {% include projects_horizontal.html %}
    {%- endfor -%}
  </div>
</div>
