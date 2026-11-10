/* Builds the pages from content.js. You normally don't need to edit this file. */
(function () {
  var S = window.SITE;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var projectUrl = function (p) { return "project.html?p=" + encodeURIComponent(p.id); };
  var img = function (src, alt, eager) {
    return '<div class="frame"><img src="' + esc(src) + '" alt="' + esc(alt) + '" width="1920" height="1080" ' +
      (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async"></div>';
  };

  function nav() {
    return '<nav class="nav px"><a class="wordmark" href="index.html" aria-label="Home">' + esc(S.wordmark) + '</a>' +
      '<ul><li><a href="index.html#work">Work</a></li><li><a href="about.html">About</a></li><li><a href="#contact">Contact</a></li></ul></nav>';
  }
  function contact() {
    var rows = [];
    if (S.email) rows.push('<li><span class="k">Email</span><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a></li>');
    if (S.linkedin && S.linkedin.url) rows.push('<li><span class="k">LinkedIn</span><a href="' + esc(S.linkedin.url) + '" target="_blank" rel="noopener">' + esc(S.linkedin.label) + '</a></li>');
    if (S.instagram && S.instagram.url) rows.push('<li><span class="k">Instagram</span><a href="' + esc(S.instagram.url) + '" target="_blank" rel="noopener">' + esc(S.instagram.label) + '</a></li>');
    return '<section id="contact" class="contact px"><h2 class="display reveal">Get in touch.</h2><ul>' + rows.join("") + '</ul></section>' +
      '<footer class="px"><span>&copy; ' + new Date().getFullYear() + ' ' + esc(S.name) + '</span><span class="wordmark" style="font-size:14px">' + esc(S.wordmark) + '</span></footer>';
  }
  function setMeta(title, desc) {
    document.title = title;
    var m = document.querySelector('meta[name="description"]'); if (m && desc) m.setAttribute("content", desc);
  }

  function home() {
    var cards = S.projects.map(function (p, i) {
      return '<a class="card reveal" href="' + projectUrl(p) + '">' + img(p.cover, p.title + " – " + p.subtitle, i < 2) +
        '<div class="meta"><div><h3>' + esc(p.title) + '</h3><p class="sub">' + esc(p.subtitle) + '</p></div>' +
        '<p class="cy">' + esc(p.client) + '<br>' + esc(p.year) + '</p></div></a>';
    }).join("");
    return nav() + '<main>' +
      '<header class="hero px"><span class="wordmark corner-top">' + esc(S.wordmark) + '</span>' +
      '<p class="eyebrow-lime">' + esc(S.eyebrow) + '</p><h1 class="display">' + esc(S.heroTitle) + '</h1>' +
      '<p class="pos">' + esc(S.positioning) + '</p><p class="corner">' + esc(S.name) + '</p></header>' +
      '<section id="work" class="block px"><h2 class="eyebrow">Selected Work</h2><div class="grid">' + cards + '</div></section>' +
      (S.otherWork && S.otherWork.image ? '<section class="px" style="padding-bottom:96px"><h2 class="eyebrow" style="margin-bottom:40px">Other Work</h2><div class="reveal">' + img(S.otherWork.image, S.otherWork.alt) + '</div></section>' : '') +
      '<section class="block px split"><h2 class="eyebrow">About</h2><div class="reveal"><p class="teaser">' + esc(S.aboutTeaser) + '</p>' +
      '<a class="textlink" href="about.html">More about ' + esc(S.name.split(" ")[0]) + ' →</a></div></section>' +
      '</main>' + contact();
  }

  function project() {
    var id = new URLSearchParams(location.search).get("p");
    var i = 0; S.projects.forEach(function (p, k) { if (p.id === id) i = k; });
    var p = S.projects[i], next = S.projects[(i + 1) % S.projects.length];
    setMeta(p.title + " – " + S.name, p.subtitle + ". " + p.description.split(". ")[0] + ".");
    var chips = (p.badge ? '<span class="chip badge">' + esc(p.badge) + '</span>' : '') + p.tags.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join("");
    var slides = p.slides.map(function (s, k) {
      var alt = p.title + (s.title ? " – " + s.title : " – slide " + (k + 1));
      var cap = (s.title || s.caption) ? '<div class="cap">' + (s.title ? '<strong>' + esc(s.title) + '</strong>' : '<span></span>') + (s.caption ? '<p>' + esc(s.caption) + '</p>' : '') + '</div>' : '';
      return '<figure class="' + (k ? 'reveal' : '') + '"><a href="' + esc(s.image) + '" target="_blank" rel="noopener" title="Open full size">' + img(s.image, alt, k === 0) + '</a>' + cap + '</figure>';
    }).join("");
    return nav() + '<main><header class="phead px"><a class="back" href="index.html#work">← All work</a>' +
      '<p class="eyebrow" style="margin-top:44px">Project ' + pad(i + 1) + '</p><h1 class="display">' + esc(p.title) + '</h1><p class="sub">' + esc(p.subtitle) + '</p>' +
      '<div class="pinfo"><div><p class="desc">' + esc(p.description) + '</p>' + (p.outcome ? '<p class="outcome">' + esc(p.outcome) + '</p>' : '') + '<div class="chips">' + chips + '</div></div>' +
      '<dl class="meta"><div><dt class="eyebrow">Client</dt><dd>' + esc(p.client) + '</dd></div><div><dt class="eyebrow">Year</dt><dd>' + esc(p.year) + '</dd></div>' +
      '<div><dt class="eyebrow">Designers</dt><dd>' + p.designers.map(esc).join(", ") + '</dd></div></dl></div></header>' +
      '<section class="slides px">' + slides + '</section>' +
      '<a class="next px" href="' + projectUrl(next) + '"><p class="eyebrow">Next project</p><p class="display">' + esc(next.title) + ' →</p></a></main>' + contact();
  }

  function about() {
    var A = S.about;
    var item = function (b, s) { return '<div class="item"><b>' + esc(b) + '</b><span>' + esc(s) + '</span></div>'; };
    var exp = A.experience.map(function (e) {
      return '<div class="item"><b>' + esc(e.role) + '</b><span>' + esc(e.org) + ' · ' + esc(e.dates) + '</span>' +
        (e.text ? '<p>' + esc(e.text) + '</p>' : '') + (e.bullets ? '<ul>' + e.bullets.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' : '') + '</div>';
    }).join("");
    var socials = (S.instagram && S.instagram.url ? '<div class="item"><a href="' + esc(S.instagram.url) + '" target="_blank" rel="noopener">Instagram – ' + esc(S.instagram.label) + '</a></div>' : '') +
      (S.linkedin && S.linkedin.url ? '<div class="item"><a href="' + esc(S.linkedin.url) + '" target="_blank" rel="noopener">LinkedIn – ' + esc(S.linkedin.label) + '</a></div>' : '') +
      (S.email ? '<div class="item"><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a></div>' : '');
    return nav() + '<main><section class="intro px"><img class="portrait" src="' + esc(A.photo) + '" alt="Portrait of ' + esc(S.name) + '" width="333" height="333">' +
      '<div><p class="eyebrow-lime lime" style="font-weight:500;margin-bottom:12px">Introduction</p><h1 class="display">' + esc(S.name) + '</h1>' +
      '<p class="muted" style="font-size:18px;margin-top:14px">' + esc(S.role) + '</p>' +
      '<div class="stat"><b>' + esc(A.yearsOfExperience) + '</b><span style="font-weight:600;font-size:14px">Years of Experience</span></div>' +
      '<p class="muted" style="max-width:640px;margin-top:28px">' + esc(A.bio) + '</p><p style="margin-top:14px;font-weight:600;font-size:14px">' + esc(S.location) + '</p>' +
      (S.cv ? '<a class="btn" href="' + esc(S.cv) + '" download>Download CV</a>' : '') + '</div></section>' +
      '<section class="cols px"><div class="col reveal"><h2 class="eyebrow">Experience</h2>' + exp + '</div>' +
      '<div class="stack"><div class="col reveal"><h2 class="eyebrow">Education</h2>' + A.education.map(function (e) { return item(e.title, e.detail); }).join("") + '</div>' +
      '<div class="col reveal"><h2 class="eyebrow">Awards</h2>' + A.awards.map(function (e) { return item(e.title, e.detail); }).join("") + '</div></div>' +
      '<div class="stack"><div class="col reveal"><h2 class="eyebrow">Skills</h2>' + A.skills.map(function (e) { return item(e.group, e.list); }).join("") + '</div>' +
      '<div class="col reveal"><h2 class="eyebrow">Clients</h2><p class="muted" style="font-size:14px">' + A.clients.map(esc).join(" · ") + '</p></div>' +
      '<div class="col reveal"><h2 class="eyebrow">Socials</h2>' + socials + '</div></div></section></main>' + contact();
  }

  var page = document.body.getAttribute("data-page");
  var root = document.getElementById("app");
  root.innerHTML = page === "project" ? project() : page === "about" ? about() : home();
  var ns = document.querySelector(".seo"); if (ns) ns.remove();

  // gentle fade-in on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add("in"); });
  if (location.hash) { var t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
})();
