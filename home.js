document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }

  const trigger = document.getElementById("downloadTrigger");
  const badges = document.getElementById("appBadges");

  if (!trigger || !badges) {
    return;
  }

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    badges.classList.add("visible");
    badges.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
