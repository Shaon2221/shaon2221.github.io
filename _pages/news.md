---
layout: page
permalink: /news/
title: News
description: Updates and announcements
nav: false
heading: News
---

<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {%- assign items = site.news | sort: 'date' | reverse -%}
    {%- for item in items -%}
    <tr>
      <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
      <td>
        {%- if item.inline -%}
          {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
        {%- else -%}
          <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
        {%- endif -%}
      </td>
    </tr>
    {%- endfor -%}
  </table>
 </div>
