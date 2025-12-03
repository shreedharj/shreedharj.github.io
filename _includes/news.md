<h2 id="news">News</h2>

<div class="news-header" onclick="toggleNews()">
  <span class="toggle-icon">▼</span>
</div>

<div id="news-content" class="news-content active">
{% for year_data in site.data.news %}
  <h3>{{ year_data.year }}</h3>
  <ul>
    {% for item in year_data.items %}
      <li>
        <strong>[{{ item.date }}]</strong> {{ item.content }}
        {% if item.link %}
          [<a href="{{ item.link }}">{{ item.link_text }}</a>]
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
</div>

<script>
function toggleNews() {
  const content = document.getElementById('news-content');
  const icon = document.querySelector('.news-header .toggle-icon');
  
  content.classList.toggle('active');
  
  if (content.classList.contains('active')) {
    icon.textContent = '▼';
  } else {
    icon.textContent = '▶';
  }
}
</script>
