// The navigation links use HTML anchors to jump to each section.
// Keep the KC logo unchanged: it has no hover animation.
document.addEventListener("DOMContentLoaded", () => {
  const sectionLinks = document.querySelectorAll('.navigation a[href^="#"]');

  sectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", link.getAttribute("href"));
      }
    });
  });
});
