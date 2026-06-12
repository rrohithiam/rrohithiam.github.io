---
title: "Probability-Flow Distillation: Exact Wasserstein Gradient Flow for High-Fidelity 3D Generation"
authors: "Rohith Ramanan and A. N. Rajagopalan"
collection: publications
category: preprints
permalink: /publication/preprint-pfd
excerpt: #''
date: 2026-05-09
venue: 'arXiv'
paperurl: 'https://doi.org/10.48550/arXiv.2605.09071'
bibtexurl: '/files/citations/pfd.bib'
citation: #''
---

<div style="display: flex; gap: 30px; align-items: flex-start;">
  <div style="flex: 1;">
    <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">
      <span>{{ page.authors }}</span> <span style="margin-left: 12px;">{{ page.date | date: '%B %d, %Y' }}</span>
    </p>
    
    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333;">
      Probability-Flow Distillation presents a method for high-fidelity 3D generation using exact Wasserstein gradient flows.
    </p>
    
    <p style="margin: 12px 0 0 0; font-size: 14px;">
      <a href="https://doi.org/10.48550/arXiv.2605.09071" style="text-decoration: none; color: #0066cc; font-weight: 500;">arXiv</a> | 
      <span style="position: relative; display: inline-block;">
        <a href="#" style="text-decoration: none; color: #0066cc; font-weight: 500; cursor: pointer;" class="bibtex-link" onclick="event.preventDefault(); toggleBibtex();">bibtex</a>
        <div id="bibtex-tooltip" style="display: none; position: absolute; top: 100%; left: 0; margin-top: 8px; background-color: #fafafa; color: #333; padding: 15px; border-radius: 6px; border: 1px solid #e0e0e0; font-size: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; word-wrap: break-word; width: 420px; z-index: 1000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-height: 350px; overflow-y: auto; background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);">@misc{rrohitithpfd2026,
      title={Probability-Flow Distillation: Exact Wasserstein Gradient Flow for High-Fidelity 3D Generation}, 
      author={Rohith Ramanan and A. N. Rajagopalan},
      year={2026},
      eprint={2605.09071},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2605.09071}
}</div>
      </span>
    </p>
    <script>
      function toggleBibtex() {
        const tooltip = document.getElementById('bibtex-tooltip');
        const isHidden = tooltip.style.display === 'none';
        tooltip.style.display = isHidden ? 'block' : 'none';
        
        if (isHidden) {
          setTimeout(() => {
            document.addEventListener('click', closeBibtexOnClickOutside);
          }, 10);
        }
      }
      
      function closeBibtexOnClickOutside(e) {
        const tooltip = document.getElementById('bibtex-tooltip');
        const link = document.querySelector('.bibtex-link');
        if (!tooltip.contains(e.target) && !link.contains(e.target)) {
          tooltip.style.display = 'none';
          document.removeEventListener('click', closeBibtexOnClickOutside);
        }
      }
    </script>
  </div>
  
  <div style="flex: 0 0 auto;">
    <img src="{{ site.baseurl }}/images/spidey.jpg" alt="teaser" style="width: 180px; height: auto; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
</div>
