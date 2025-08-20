---
layout: page
permalink: /videos/
title: Videos
description: Tutorials, experiments, and research reviews on Generative AI
nav: false
heading: Videos
---

<div class="mb-3">
  <a class="btn btn-danger mr-2" href="https://www.youtube.com/@DataDiscoveryBD" target="_blank">
    <i class="fab fa-youtube"></i> Subscribe on YouTube
  </a>
  <a class="btn btn-primary" href="mailto:shaonsikder.ewu@gmail.com">
    <i class="fas fa-envelope"></i> Request a topic
  </a>
  
</div>

{% assign video_posts = site.posts | where_exp: "post", "post.youtube" %}
{% if video_posts and video_posts.size > 0 %}
  <h3 class="mt-4">Recent videos</h3>
  <ul class="post-list">
    {% for post in video_posts limit: 6 %}
      <li>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <div id="video-container" style="float: none; clear: both; width: 100%; position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
          <object data="{{ post.youtube }}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></object>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endif %}
