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
</div>
<hr>
{% endfor %}