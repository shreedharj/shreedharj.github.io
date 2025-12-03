---
layout: homepage
---

## About Me

Hi 👋🏼 I completed my B.S. in Computer Science with a Minor in Statistics at UC Santa Cruz, Baskin Engineering. I am very fortunate to be advised by [Prof. Leilani Gilpin](https://people.ucsc.edu/~lgilpin/) at the [AEIA Lab](https://aiea-lab.github.io/), where my work focused on LLM trustworthiness and failure modes, and by [Prof. Xin (Eric) Wang](https://eric-xw.github.io/) at the [ERIC Lab](http://eric-lab.soe.ucsc.edu/people), where I studied reasoning LLMs and VLA safety evaluation. I am currently at the National Renewable Energy Laboratory working on physics-informed ML, sparse system identification, and discrepancy modeling for nonlinear dynamical systems. Outside of research, I enjoy backpacking and practicing my wilderness EMT skills.

<p><strong style="color:#1769AA;">I’m currently applying to EECS and Robotics MS/PhD programs for Fall 2026.</strong></p>


## Research Interests

I’m excited by how embodied systems can reason about the world, learn interpretable dynamics, and act safely under uncertainty. Broadly, my interests are in interpretable autonomy, grounded world models, and VLA-based reasoning monitors that help robots maintain reliable internal beliefs and execute robust manipulation behaviors.

{% include_relative _includes/publications.md %}

## News

<div class="news-container">
  <div class="news-year">
    <div class="year-header" onclick="toggleYear('news-2025')">
      <h3>2025</h3>
      <span class="toggle-icon">▼</span>
    </div>
    <div id="news-2025" class="year-content active">
      <ul>
        <li><strong>[Jun. 2025]</strong> I began my internship at National Renewable Energy Laboratory in Golden, Colorado.</li>
        <li><strong>[Feb. 2025]</strong> I submitted a paper on reasoning model (R1 and o3mini) safety [<a href="https://r1-safety.github.io/">Link</a>].</li>
        <li><strong>[Jan. 2025]</strong> I was awarded an honorable mention for the CRA Outstanding Undergraduate Researcher Award [<a href="https://cra.org/about/awards/outstanding-undergraduate-researcher-award/">Link</a>].</li>
      </ul>
    </div>
  </div>

  <div class="news-year">
    <div class="year-header" onclick="toggleYear('news-2024')">
      <h3>2024</h3>
      <span class="toggle-icon">▶</span>
    </div>
    <div id="news-2024" class="year-content">
      <ul>
        <li><strong>[Aug. 2024]</strong> I finished my research internship at ERAU and presented our research [<a href="https://youtu.be/SqhE1SGtxtw?si=0thE9U4iBOH8Q5pY">Link</a>].</li>
        <li><strong>[May. 2024]</strong> Our paper got the UCSC Deans' Undergraduate Research Award [<a href="https://dca.ue.ucsc.edu/dca/winners/2024/1605">Link</a>].</li>
        <li><strong>[Apr. 2024]</strong> I'm starting a research internship at Embry–Riddle Aeronautical University this summer.</li>
      </ul>
    </div>
  </div>

  <div class="news-year">
    <div class="year-header" onclick="toggleYear('news-2023')">
      <h3>2023</h3>
      <span class="toggle-icon">▶</span>
    </div>
    <div id="news-2023" class="year-content">
      <ul>
        <li><strong>[Oct. 2023]</strong> I submitted my first paper!</li>
      </ul>
    </div>
  </div>
</div>

<script>
function toggleYear(yearId) {
  const content = document.getElementById(yearId);
  const header = content.previousElementSibling;
  const icon = header.querySelector('.toggle-icon');
  
  content.classList.toggle('active');
  
  if (content.classList.contains('active')) {
    icon.textContent = '▼';
  } else {
    icon.textContent = '▶';
  }
}
</script>

{% include_relative _includes/extracurriculars.md %}
