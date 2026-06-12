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
      <a href="{{ page.bibtexurl }}" style="text-decoration: none; color: #0066cc; font-weight: 500; position: relative; cursor: help;" class="bibtex-link" data-bibtex="@misc{rrohitithpfd2026,
      title={Probability-Flow Distillation: Exact Wasserstein Gradient Flow for High-Fidelity 3D Generation}, 
      author={Rohith Ramanan and A. N. Rajagopalan},
      year={2026},
      eprint={2605.09071},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2605.09071}, 
}">bibtex</a>
    </p>
    <style>
      .bibtex-link::before {
        content: attr(data-bibtex);
        position: absolute;
        bottom: 125%;
        left: 0;
        background-color: #f5f5f5;
        color: #333;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
        font-size: 11px;
        font-family: 'Courier New', monospace;
        white-space: pre-wrap;
        word-wrap: break-word;
        width: 300px;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: none;
      }
      .bibtex-link::after {
        content: '';
        position: absolute;
        bottom: 120%;
        left: 10px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #f5f5f5;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .bibtex-link:hover::before,
      .bibtex-link:hover::after {
        opacity: 1;
        visibility: visible;
      }
    </style>
  </div>
  
  <div style="flex: 0 0 auto;">
    <img src="{{ site.baseurl }}/images/spidey.jpg" alt="teaser" style="width: 180px; height: auto; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
</div>
