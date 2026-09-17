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
