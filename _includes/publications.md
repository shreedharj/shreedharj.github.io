<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100;height:auto;">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.arxiv_url }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex_entry %} 
      <button class="btn btn-sm z-depth-0 bibtex-toggle" role="button" style="font-size:12px;">BibTex</button>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
    {% if link.bibtex_entry %}
    <div class="bibtex-container">
      <div class="bibtex-content hidden" data-bibtex="{{ link.bibtex_entry | escape }}">
        <pre style="margin: 0; background: #f5f5f5; padding: 10px; border-radius: 4px; font-size: 11px; overflow-x: auto;">{{ link.bibtex_entry }}</pre>
        <button class="btn-copy-bibtex" role="button" title="Copy BibTeX" aria-label="Copy BibTeX"><i class="fas fa-clipboard"></i></button>
      </div>
    </div>
    {% endif %}
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

