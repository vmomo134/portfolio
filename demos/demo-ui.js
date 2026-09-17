document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.view;
    document.querySelectorAll("[data-view]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll("[data-screen]").forEach((view) => view.classList.toggle("active", view.dataset.screen === id));
  });
});
