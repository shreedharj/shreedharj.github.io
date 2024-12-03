---
layout: page
title: Blog
permalink: /blog/
---

# Blog

{% for blog in site.blogs %}
<div class="blog-summary">
  <h2><a href="{{ blog.url }}">{{ blog.title }}</a></h2>
  <p><small>Published on {{ blog.date | date: "%B %d, %Y" }}</small></p>
  <p><em>{{ blog.synopsis }}</em></p>
</div>
<hr>
{% endfor %}

<footer>
  <a href="/" style="text-decoration: none; font-size: 1.5rem; margin-top: 20px; display: block; text-align: center;">
    <i class="fas fa-home"></i> <!-- Home Icon -->
  </a>
</footer>
