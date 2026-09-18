const buttons = [...document.querySelectorAll("[data-view]")];
const views = [...document.querySelectorAll("[data-screen]")];

function selectView(id, updateUrl = true) {
  const button = buttons.find((item) => item.dataset.view === id) || buttons[0];
  if (!button) return;
  const activeId = button.dataset.view;
  buttons.forEach((item) => item.classList.toggle("active", item === button));
  views.forEach((view) => view.classList.toggle("active", view.dataset.screen === activeId));
  if (updateUrl) history.replaceState(null, "", `#${activeId}`);
}

buttons.forEach((button) => button.addEventListener("click", () => selectView(button.dataset.view)));
selectView(window.location.hash.slice(1), false);

/* Vista ampliada de las capturas de las galerías. */
const galleryImgs = [...document.querySelectorAll(".gallery img")];
if (galleryImgs.length) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Vista ampliada");
  box.innerHTML = '<button class="lightbox__close" type="button" aria-label="Cerrar">×</button><p class="lightbox__cap"></p>';
  document.body.appendChild(box);
  let big = null;
  const cap = box.querySelector(".lightbox__cap");
  const closeBtn = box.querySelector("button");
  let origin = null;

  const open = (img) => {
    origin = img;
    if (!big) { big = document.createElement("img"); box.insertBefore(big, cap); }
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    cap.textContent = img.closest("div")?.querySelector("figcaption")?.textContent || "";
    box.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    box.hidden = true;
    document.body.style.overflow = "";
    if (origin) origin.focus();
  };

  galleryImgs.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `Ampliar: ${img.alt}`);
    img.addEventListener("click", () => open(img));
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
    });
  });
  box.addEventListener("click", (e) => { if (e.target !== cap) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
}
