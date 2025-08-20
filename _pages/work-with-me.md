---
layout: page
permalink: /work-with-me/
title: Work with me
description: Let's scope, prototype, and launch your AI features with clear outcomes and timelines.
nav: false
heading: Work with me
---

I partner with teams to deliver production-grade AI: LLMs, agents, advanced RAG, and MLOps. I scope, prototype, and deploy with clear milestones, evaluation, and handoff.

<div class="mb-3">
  <a class="btn btn-outline-success mr-2" href="https://wa.me/8801646976657" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a class="btn btn-primary" href="mailto:shaonsikder.ewu@gmail.com"><i class="fas fa-envelope"></i> Email</a>
</div>

<form name="work-with-me" method="POST" action="https://formsubmit.co/shaonsikder.ewu@gmail.com" netlify>
  <!-- Anti-spam honeypot; real users won't see/fill this -->
  <input type="text" name="_honey" style="display:none">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_subject" value="New project inquiry from shaon2221.github.io">
  <input type="hidden" name="_template" value="table">
  <!-- Redirect after successful submit -->
  <input type="hidden" name="_next" value="{{ '/thanks/' | relative_url }}">
  <div class="form-group">
    <label for="name">Your name</label>
    <input id="name" class="form-control" type="text" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input id="email" class="form-control" type="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="company">Company/Organization (optional)</label>
    <input id="company" class="form-control" type="text" name="company">
  </div>
  <div class="form-group">
    <label for="budget">Budget range (optional)</label>
    <select id="budget" class="form-control" name="budget">
      <option value="Undisclosed">Undisclosed</option>
      <option value="<$2k"><$2k</option>
      <option value="$2k–$10k">$2k–$10k</option>
      <option value="$10k–$50k">$10k–$50k</option>
      <option value=">$50k">>$50k</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message">Project goals & context</label>
    <textarea id="message" class="form-control" name="message" rows="6" required></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Send inquiry</button>
</form>
