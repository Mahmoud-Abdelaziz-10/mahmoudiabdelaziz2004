/**
 * ==========================================================================
 * MAHMOUD I ABDELAZIZ - LANDSCAPE & IRRIGATION ENGINEERING PORTFOLIO
 * Application Controller (Search, Filter, Lightbox Modal, Mobile Nav, Bilingual i18n)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check if PORTFOLIO_DATA is available
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("PORTFOLIO_DATA is not loaded. Ensure projects-data.js is included before app.js.");
    return;
  }

  const { engineer, projects, i18n } = PORTFOLIO_DATA;

  // Language State
  let currentLang = localStorage.getItem("portfolio_lang") || "en";
  if (!i18n[currentLang]) currentLang = "en";

  // DOM Elements
  const langToggleBtn = document.getElementById("langToggleBtn");
  const langToggleText = document.getElementById("langToggleText");

  const projectsGrid = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("projectSearch");
  const navHeader = document.getElementById("siteHeader");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  // Modal Elements
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalMainImg = document.getElementById("modalMainImg");
  const modalThumbs = document.getElementById("modalThumbs");
  const modalPrevBtn = document.getElementById("modalPrevBtn");
  const modalNextBtn = document.getElementById("modalNextBtn");
  const modalDescription = document.getElementById("modalDescription");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalSoftware = document.getElementById("modalSoftware");
  const modalType = document.getElementById("modalType");

  // Filter & Search State
  let currentFilter = "all";
  let searchQuery = "";
  let activeProject = null;
  let activeImageIndex = 0;

  /* ------------------------------------------------------------------------
   * 1. LANGUAGE SWITCHER & TRANSLATION ENGINE
   * ------------------------------------------------------------------------ */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    const t = i18n[lang] || i18n.en;
    const isAr = lang === "ar";

    // Set Document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";

    // Update Language Toggle Button
    if (langToggleText) {
      langToggleText.textContent = t.langSwitchLabel;
    }

    // Update Document Title
    const docTitle = document.getElementById("docTitle");
    if (docTitle) docTitle.textContent = t.siteTitle;

    // Update Brand
    const brandName = document.getElementById("brandName");
    if (brandName) {
      brandName.innerHTML = isAr ? `م. محمود <span class="gradient-text">عبد العزيز</span>` : `Mahmoud<span class="gradient-text">.Abdelaziz</span>`;
    }
    const footerBrandName = document.getElementById("footerBrandName");
    if (footerBrandName) {
      footerBrandName.innerHTML = isAr ? `م. محمود <span class="gradient-text">عبد العزيز</span>` : `Mahmoud<span class="gradient-text">.Abdelaziz</span>`;
    }

    // Navigation
    setText("navHome", t.navHome);
    setText("navAbout", t.navAbout);
    setText("navSkills", t.navSkills);
    setText("navProjects", t.navProjects);
    setText("navSoftware", t.navSoftware);
    setText("navContact", t.navContact);
    setText("navCtaBtn", t.navCta);

    // Hero Section
    const heroBadge = document.getElementById("heroBadge");
    if (heroBadge) heroBadge.innerHTML = `<span>●</span> ${escapeHtml(t.heroBadge)}`;

    const heroTitle = document.getElementById("heroTitle");
    if (heroTitle) {
      heroTitle.innerHTML = `${escapeHtml(t.heroTitlePrefix)}<span class="gradient-text">${escapeHtml(t.heroTitleAccent)}</span>${escapeHtml(t.heroTitleSuffix)}`;
    }
    setText("heroSubtitle", t.heroSubtitle);

    const btnViewProjects = document.getElementById("btnViewProjects");
    if (btnViewProjects) {
      btnViewProjects.innerHTML = `
        ${escapeHtml(t.btnViewProjects)}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
    }
    setText("btnContact", t.btnContact);

    // Spec Chips
    setSpecChip("specCad", t.specCad);
    setSpecChip("specIrrigation", t.specIrrigation);
    setSpecChip("specRealtime", t.specRealtime);
    setSpecChip("specSketchup", t.specSketchup);
    setSpecChip("specLandscape", t.specLandscape);

    // Profile Card
    setText("profileCardName", isAr ? engineer.nameAr : engineer.name);
    setText("profileCardRole", isAr ? engineer.roleAr : engineer.role);

    // Stats Bar
    setText("statProjectsLabel", t.statProjects);
    setText("statImagesLabel", t.statImages);
    setText("statHonestLabel", t.statHonest);
    setText("statHonestVal", t.statHonestVal);
    setText("statToolsLabel", t.statTools);

    // About Section
    setText("aboutBadge", t.aboutBadge);
    const aboutTitle = document.getElementById("aboutTitle");
    if (aboutTitle) {
      aboutTitle.innerHTML = `${escapeHtml(t.aboutTitle)}<span class="gradient-text">${escapeHtml(t.aboutTitleAccent)}</span>`;
    }
    setText("aboutSubtitle", t.aboutSubtitle);
    setText("aboutCardTitle", t.aboutCardTitle);
    setText("aboutP1", t.aboutP1);
    setText("aboutP2", t.aboutP2);
    setText("aboutP3", t.aboutP3);

    // Pillars
    setText("pillar1Title", t.pillar1Title);
    setText("pillar1Desc", t.pillar1Desc);
    setText("pillar2Title", t.pillar2Title);
    setText("pillar2Desc", t.pillar2Desc);
    setText("pillar3Title", t.pillar3Title);
    setText("pillar3Desc", t.pillar3Desc);
    setText("pillar4Title", t.pillar4Title);
    setText("pillar4Desc", t.pillar4Desc);

    // Skills Section
    setText("skillsBadge", t.skillsBadge);
    const skillsTitle = document.getElementById("skillsTitle");
    if (skillsTitle) {
      skillsTitle.innerHTML = `${escapeHtml(t.skillsTitle)}<span class="gradient-text">${escapeHtml(t.skillsTitleAccent)}</span>`;
    }
    setText("skillsSubtitle", t.skillsSubtitle);
    setText("colSkillsTitle", t.colSkillsTitle);
    setText("colSoftwareTitle", t.colSoftwareTitle);

    // Skills List Render
    const skillsListContainer = document.getElementById("skillsListContainer");
    if (skillsListContainer && t.skillsList) {
      skillsListContainer.innerHTML = t.skillsList.map(skill => `
        <div class="skill-tag-item"><span class="check">✓</span> ${escapeHtml(skill)}</div>
      `).join("");
    }

    // Projects Section Header & Controls
    setText("projectsBadge", t.projectsBadge);
    const projectsTitle = document.getElementById("projectsTitle");
    if (projectsTitle) {
      projectsTitle.innerHTML = `${escapeHtml(t.projectsTitle)}<span class="gradient-text">${escapeHtml(t.projectsTitleAccent)}</span>${escapeHtml(t.projectsTitleSuffix)}`;
    }
    setText("projectsSubtitle", t.projectsSubtitle);

    if (searchInput) {
      searchInput.placeholder = t.searchPlaceholder;
    }

    // Filter Buttons Labels
    updateFilterLabels(t);

    // Edit Banner
    setText("editBannerTitle", t.editBannerTitle);
    setText("editBannerDesc", t.editBannerDesc);
    setText("editBannerBtn", t.editBannerBtn);

    // Contact Section
    setText("contactBadge", t.contactBadge);
    const contactTitle = document.getElementById("contactTitle");
    if (contactTitle) {
      contactTitle.innerHTML = `${escapeHtml(t.contactTitle)}<span class="gradient-text">${escapeHtml(t.contactTitleAccent)}</span>`;
    }
    setText("contactSubtitle", t.contactSubtitle);
    setText("contactEmailLabel", t.contactEmailLabel);
    setText("contactLocationLabel", t.contactLocationLabel);
    setText("contactLocationVal", t.contactLocationVal);
    setText("contactStatusLabel", t.contactStatusLabel);
    setText("contactStatusVal", t.contactStatusVal);

    // Form
    setText("formNameLabel", t.formNameLabel);
    setPlaceholder("senderName", t.formNamePlaceholder);
    setText("formEmailLabel", t.formEmailLabel);
    setPlaceholder("senderEmail", t.formEmailPlaceholder);
    setText("formSubjectLabel", t.formSubjectLabel);
    setPlaceholder("messageSubject", t.formSubjectPlaceholder);
    setText("formMessageLabel", t.formMessageLabel);
    setPlaceholder("senderMessage", t.formMessagePlaceholder);
    setText("formSubmitBtn", t.formSubmitBtn);

    // Modal Static Headers
    setText("modalOverviewTitle", t.modalOverviewTitle);
    setText("modalHighlightsTitle", t.modalHighlightsTitle);
    setText("modalMetaClass", t.modalMetaClass);
    setText("modalMetaTools", t.modalMetaTools);

    // Footer
    setText("footerTagline", t.footerTagline);
    setText("footerNavTitle", t.footerNavTitle);
    setText("footerSpecTitle", t.footerSpecTitle);
    setText("footerCopyright", t.footerCopyright);
    setText("footerSubtext", t.footerSubtext);

    // Update active project modal if currently open
    if (activeProject) {
      updateModalContent(activeProject);
    }

    // Re-render project cards and counters
    updateCounters();
    renderProjects();
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
  }

  function setPlaceholder(id, placeholder) {
    const el = document.getElementById(id);
    if (el && placeholder !== undefined) el.placeholder = placeholder;
  }

  function setSpecChip(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) {
      el.innerHTML = `<span class="dot"></span>${escapeHtml(text)}`;
    }
  }

  function updateFilterLabels(t) {
    setFilterLabel("tabAll", t.tabAll);
    setFilterLabel("tabRealtime", t.tabRealtime);
    setFilterLabel("tabAutocad", t.tabAutocad);
    setFilterLabel("tabSketchup", t.tabSketchup);
    setFilterLabel("tabOther", t.tabOther);
  }

  function setFilterLabel(btnId, labelText) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const textSpan = btn.querySelector(".filter-text");
    if (textSpan && labelText) {
      textSpan.textContent = labelText;
    }
  }

  // Language button click listener
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ar" : "en";
      applyLanguage(nextLang);
    });
  }

  /* ------------------------------------------------------------------------
   * 2. UPDATE DYNAMIC STATS & COUNTERS
   * ------------------------------------------------------------------------ */
  function updateCounters() {
    let totalImages = 0;
    const catCounts = {
      all: 0,
      autocad: 0,
      sketchup: 0,
      realtime: 0,
      other: 0
    };

    projects.forEach(p => {
      const imgCount = (p.gallery && p.gallery.length) || 1;
      totalImages += imgCount;
      if (catCounts[p.category] !== undefined) {
        catCounts[p.category] += imgCount;
      }
    });
    catCounts.all = totalImages;

    filterButtons.forEach(btn => {
      const cat = btn.getAttribute("data-filter");
      const countSpan = btn.querySelector(".count");
      if (countSpan && catCounts[cat] !== undefined) {
        countSpan.textContent = `(${catCounts[cat]})`;
      }
    });

    const statProjects = document.getElementById("statProjectsCount");
    const statImages = document.getElementById("statImagesCount");
    if (statProjects) statProjects.textContent = `${projects.length}`;
    if (statImages) statImages.textContent = `${totalImages}`;
  }

  /* ------------------------------------------------------------------------
   * 3. RENDER PROJECT CARDS (BILINGUAL)
   * ------------------------------------------------------------------------ */
  function renderProjects() {
    if (!projectsGrid) return;
    const isAr = currentLang === "ar";
    const t = i18n[currentLang] || i18n.en;

    const filtered = projects.filter(item => {
      const matchesCategory = currentFilter === "all" || item.category === currentFilter;
      const q = searchQuery.toLowerCase().trim();
      const software = (item.software || "").toLowerCase();
      const matchesSearch = !q || software.includes(q);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-projects">
          <h3>${escapeHtml(t.noProjectsFound)}</h3>
          <p>${escapeHtml(t.noProjectsHint)}</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(project => {
      const galleryCount = project.gallery ? project.gallery.length : 1;
      const softwareName = (isAr && project.softwareAr) ? project.softwareAr : (project.software || "");

      return `
        <article class="project-card" data-id="${project.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(softwareName)}">
          <div class="project-thumb-wrap">
            <img src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(softwareName)}" class="project-thumb" loading="lazy" onerror="this.src='images/realtime/1.PNG'">
            <span class="project-gallery-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              ${galleryCount} ${escapeHtml(t.viewsCount)}
            </span>
          </div>
          <div class="project-content">
            <h3 class="project-software-label">${escapeHtml(softwareName)}</h3>
          </div>
        </article>
      `;
    }).join("");

    projectsGrid.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openModal(id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-id");
          openModal(id);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
   * 4. LIGHTBOX MODAL FUNCTIONALITY
   * ------------------------------------------------------------------------ */
  function updateModalContent(project) {
    if (!project || !modalOverlay) return;
    const isAr = currentLang === "ar";
    const softwareName = (isAr && project.softwareAr) ? project.softwareAr : (project.software || "");

    if (modalTitle) modalTitle.textContent = softwareName;
    if (modalCategory) modalCategory.textContent = "";
  }

  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    activeProject = project;
    activeImageIndex = 0;

    updateModalContent(project);

    // Build Thumbnail strip
    const images = (project.gallery && project.gallery.length > 0) ? project.gallery : [project.coverImage];
    modalThumbs.innerHTML = images.map((imgSrc, idx) => `
      <div class="lightbox-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${escapeHtml(imgSrc)}" alt="View ${idx + 1}" loading="lazy">
      </div>
    `).join("");

    modalThumbs.querySelectorAll(".lightbox-thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = parseInt(thumb.getAttribute("data-index"), 10);
        showImage(idx);
      });
    });

    showImage(0);

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function showImage(index) {
    if (!activeProject) return;
    const images = (activeProject.gallery && activeProject.gallery.length > 0) ? activeProject.gallery : [activeProject.coverImage];
    
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    activeImageIndex = index;
    modalMainImg.src = images[index];
    modalMainImg.alt = `${activeProject.title} - View ${index + 1}`;

    modalThumbs.querySelectorAll(".lightbox-thumb").forEach((t, i) => {
      t.classList.toggle("active", i === index);
      if (i === index) {
        t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });

    if (images.length <= 1) {
      modalPrevBtn.style.display = "none";
      modalNextBtn.style.display = "none";
    } else {
      modalPrevBtn.style.display = "flex";
      modalNextBtn.style.display = "flex";
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    activeProject = null;
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  if (modalPrevBtn) modalPrevBtn.addEventListener("click", () => showImage(activeImageIndex - 1));
  if (modalNextBtn) modalNextBtn.addEventListener("click", () => showImage(activeImageIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (!modalOverlay || !modalOverlay.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showImage(activeImageIndex - 1);
    if (e.key === "ArrowRight") showImage(activeImageIndex + 1);
  });

  /* ------------------------------------------------------------------------
   * 5. FILTER TABS & SEARCH
   * ------------------------------------------------------------------------ */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  /* ------------------------------------------------------------------------
   * 6. MOBILE MENU & HEADER SCROLL
   * ------------------------------------------------------------------------ */
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-active");
    });

    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("mobile-active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (navHeader) {
      if (window.scrollY > 40) {
        navHeader.classList.add("scrolled");
      } else {
        navHeader.classList.remove("scrolled");
      }
    }
  });

  /* ------------------------------------------------------------------------
   * 7. CONTACT FORM INTERACTION
   * ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value;
      const email = document.getElementById("senderEmail").value;
      const subject = document.getElementById("messageSubject").value || "Portfolio Inquiry";
      const message = document.getElementById("senderMessage").value;
      const t = i18n[currentLang] || i18n.en;

      const mailtoUrl = `mailto:${encodeURIComponent(engineer.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

      if (formStatus) {
        formStatus.textContent = t.formSuccessNotice;
        formStatus.classList.add("success");
      }

      window.location.href = mailtoUrl;
    });
  }

  // Helper utility to prevent XSS
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Initial Execution: Apply saved/default language
  applyLanguage(currentLang);
});
