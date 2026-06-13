---
layout: none
title: "Probability-Flow Distillation"
permalink: /projects/pfd/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Probability-Flow Distillation</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #0d0f14;
      --surface:   #13161e;
      --surface2:  #1b1f2b;
      --accent:    #7eb8f7;
      --accent2:   #a78bfa;
      --text:      #e8eaf0;
      --muted:     #8890a4;
      --border:    rgba(255,255,255,0.07);
      --radius:    10px;
      --serif:     'DM Serif Display', Georgia, serif;
      --sans:      'Inter', system-ui, sans-serif;
      --mono:      'JetBrains Mono', monospace;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--sans);
      font-size: 16px;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    /* ── NAV ── */
    nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(13,15,20,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0 2rem;
      display: flex; align-items: center; justify-content: space-between;
      height: 52px;
    }
    .nav-brand {
      font-family: var(--mono);
      font-size: 13px;
      color: var(--accent);
      text-decoration: none;
      letter-spacing: 0.04em;
    }
    .nav-links { display: flex; gap: 1.8rem; list-style: none; }
    .nav-links a {
      font-size: 13px; font-weight: 500; color: var(--muted);
      text-decoration: none; letter-spacing: 0.02em;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text); }

    /* ── HERO ── */
    .hero {
      max-width: 860px; margin: 0 auto;
      padding: 5rem 2rem 3.5rem;
      text-align: center;
    }
    .hero-tag {
      display: inline-block;
      font-family: var(--mono); font-size: 11px; font-weight: 500;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--accent); background: rgba(126,184,247,0.08);
      border: 1px solid rgba(126,184,247,0.2);
      border-radius: 100px; padding: 4px 14px;
      margin-bottom: 1.4rem;
    }
    .hero h1 {
      font-family: var(--serif);
      font-size: clamp(2rem, 5vw, 3.1rem);
      line-height: 1.15;
      color: var(--text);
      margin-bottom: 1.2rem;
      font-weight: 400;
    }
    .hero h1 em {
      font-style: italic;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .authors {
      font-size: 15px; color: var(--muted);
      margin-bottom: 0.4rem;
    }
    .authors a { color: var(--text); text-decoration: none; border-bottom: 1px solid var(--border); }
    .authors a:hover { border-color: var(--accent); color: var(--accent); }
    .venue {
      font-family: var(--mono); font-size: 12px;
      color: var(--muted); margin-bottom: 2rem;
      letter-spacing: 0.04em;
    }
    .hero-buttons {
      display: flex; flex-wrap: wrap; gap: 0.75rem;
      justify-content: center; margin-bottom: 0;
    }
    .btn {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 13px; font-weight: 500;
      padding: 8px 20px; border-radius: 100px;
      text-decoration: none; transition: all 0.2s;
      letter-spacing: 0.02em;
    }
    .btn-primary {
      background: var(--accent); color: #0d0f14;
    }
    .btn-primary:hover { background: #a8d0ff; }
    .btn-ghost {
      border: 1px solid var(--border); color: var(--text);
      background: var(--surface);
    }
    .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

    /* ── DIVIDER ── */
    .divider {
      border: none;
      border-top: 1px solid var(--border);
      max-width: 860px; margin: 0 auto;
    }

    /* ── SECTION ── */
    section {
      max-width: 860px; margin: 0 auto;
      padding: 3.5rem 2rem;
    }
    .section-label {
      font-family: var(--mono); font-size: 11px; font-weight: 500;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 1rem;
    }
    section h2 {
      font-family: var(--serif); font-weight: 400;
      font-size: 1.75rem; color: var(--text);
      margin-bottom: 1.2rem; line-height: 1.2;
    }
    section p { color: var(--muted); margin-bottom: 1rem; }
    section p:last-child { margin-bottom: 0; }

    /* ── TL;DR CARD ── */
    .tldr {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-left: 3px solid var(--accent);
      border-radius: var(--radius);
      padding: 1.2rem 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 15px; color: var(--text);
      line-height: 1.6;
    }
    .tldr strong {
      font-family: var(--mono); font-size: 11px;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent); display: block;
      margin-bottom: 0.4rem;
    }

    /* ── VIDEO ── */
    .video-wrap {
      position: relative; width: 100%; padding-top: 56.25%;
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius); overflow: hidden;
    }
    .video-wrap video {
      position: absolute; inset: 0;
      width: 100%; height: 100%; object-fit: cover;
    }
    .video-caption {
      text-align: center; font-size: 13px;
      color: var(--muted); margin-top: 0.75rem;
    }

    /* ── METHOD IMAGE ── */
    .method-img-wrap {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius); overflow: hidden;
      margin-bottom: 0.75rem;
    }
    .method-img-wrap img {
      width: 100%; height: auto; display: block;
    }
    .method-caption {
      font-size: 13px; color: var(--muted);
      text-align: center;
    }

    /* ── BIBTEX ── */
    .bibtex-block {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      font-family: var(--mono);
      font-size: 12.5px; line-height: 1.7;
      color: var(--muted);
      overflow-x: auto;
      position: relative;
    }
    .copy-btn {
      position: absolute; top: 12px; right: 12px;
      background: var(--surface); border: 1px solid var(--border);
      color: var(--muted); border-radius: 6px;
      font-family: var(--mono); font-size: 11px;
      padding: 4px 10px; cursor: pointer;
      transition: all 0.2s;
    }
    .copy-btn:hover { border-color: var(--accent); color: var(--accent); }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--border);
      text-align: center;
      padding: 2rem;
      font-size: 13px; color: var(--muted);
    }
    footer a { color: var(--muted); }
    footer a:hover { color: var(--accent); }

    @media (max-width: 600px) {
      nav { padding: 0 1rem; }
      .nav-links { gap: 1rem; }
      section { padding: 2.5rem 1.25rem; }
      .hero { padding: 3.5rem 1.25rem 2.5rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; }
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav>
  <a class="nav-brand" href="{{ site.baseurl }}/">← {{ site.title | default: "Home" }}</a>
  <ul class="nav-links">
    <li><a href="#abstract">Abstract</a></li>
    <li><a href="#video">Video</a></li>
    <li><a href="#method">Method</a></li>
    <li><a href="#bibtex">BibTeX</a></li>
  </ul>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-tag">arXiv · 2026</div>
  <h1>Probability-Flow Distillation:<br /><em>Exact Wasserstein Gradient Flow<br />for High-Fidelity 3D Generation</em></h1>
  <p class="authors">
    <a href="{{ site.baseurl }}/">Rohith Ramanan</a>,
    A. N. Rajagopalan
  </p>
  <p class="venue">IIT Madras &nbsp;·&nbsp; arXiv 2605.09071</p>
  <div class="hero-buttons">
    <a class="btn btn-primary" href="https://arxiv.org/abs/2605.09071" target="_blank" rel="noopener">
      📄 arXiv
    </a>
    <a class="btn btn-ghost" href="#bibtex">
      cite
    </a>
  </div>
</div>

<hr class="divider" />

<!-- ABSTRACT -->
<section id="abstract">
  <div class="section-label">Abstract</div>
  <h2>Overview</h2>
  <div class="tldr">
    <strong>TL;DR</strong>
    <!-- One-sentence summary of the paper -->
    We propose Probability-Flow Distillation, a method that frames score distillation as an exact Wasserstein gradient flow, yielding high-fidelity 3D generation without mode collapse or over-smoothing.
  </div>
  <p>
    <!-- Replace with your full abstract -->
    Score distillation sampling (SDS) has enabled text-to-3D generation by distilling 2D diffusion priors into neural radiance fields, but suffers from well-known artifacts including over-saturation and geometric inconsistency. We show that these failure modes stem from an inexact approximation of the Wasserstein gradient flow in the distillation objective.
  </p>
  <p>
    Probability-Flow Distillation (PFD) corrects this by deriving an analytically exact gradient flow in probability space, recovering the true transport direction at each distillation step. The result is a simple, drop-in replacement for SDS that produces sharper geometry, richer texture, and improved multi-view consistency—without additional training or inference overhead.
  </p>
</section>

<hr class="divider" />

<!-- VIDEO -->
<section id="video">
  <div class="section-label">Demo</div>
  <h2>Video</h2>
  <div class="video-wrap">
    <!--
      Replace demo.mp4 with your actual file placed in /assets/video/ or /files/
      e.g. src="{{ site.baseurl }}/files/pfd_demo.mp4"
    -->
    <video controls loop muted playsinline
           src="{{ site.baseurl }}/files/demo.mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <p class="video-caption">Qualitative results comparing PFD against SDS baselines on text-to-3D generation.</p>
</section>

<hr class="divider" />

<!-- METHOD -->
<section id="method">
  <div class="section-label">Method</div>
  <h2>How it works</h2>
  <p>
    Standard SDS computes gradients by treating the diffusion denoiser as a fixed critic. We show this is equivalent to an approximate Wasserstein gradient step that accumulates error over the distillation trajectory. PFD instead solves the exact continuity equation at each step, yielding a provably convergent flow toward the data manifold.
  </p>
  <div class="method-img-wrap">
    <!--
      Replace pfd_method.png with your actual diagram placed in /images/
      e.g. src="{{ site.baseurl }}/images/pfd_method.png"
    -->
    <img src="{{ site.baseurl }}/images/pfd_method.png"
         alt="PFD method diagram" />
  </div>
  <p class="method-caption">
    Figure 1. Overview of Probability-Flow Distillation. Left: standard SDS gradient path. Right: PFD corrected flow.
  </p>
</section>

<hr class="divider" />

<!-- BIBTEX -->
<section id="bibtex">
  <div class="section-label">Citation</div>
  <h2>BibTeX</h2>
  <div class="bibtex-block" id="bibtex-content">
    <button class="copy-btn" onclick="copyBibtex()">copy</button>
@misc{rrohitithpfd2026,
  title   = {Probability-Flow Distillation: Exact Wasserstein Gradient
             Flow for High-Fidelity 3D Generation},
  author  = {Rohith Ramanan and A. N. Rajagopalan},
  year    = {2026},
  eprint  = {2605.09071},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  url     = {https://arxiv.org/abs/2605.09071}
}</div>
</section>

<!-- FOOTER -->
<footer>
  <p>
    Website template inspired by <a href="https://nerfies.github.io" target="_blank" rel="noopener">Nerfies</a>.
    Built with Jekyll · <a href="{{ site.baseurl }}/">{{ site.title | default: "Back to site" }}</a>
  </p>
</footer>

<script>
function copyBibtex() {
  const el = document.getElementById('bibtex-content');
  const text = el.innerText.replace('copy', '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.querySelector('.copy-btn');
    btn.textContent = 'copied!';
    setTimeout(() => btn.textContent = 'copy', 2000);
  });
}
</script>

</body>
</html>
