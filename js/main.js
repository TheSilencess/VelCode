(() => {
  const config = window.VelCodeConfig || {};
  const whatsapp = String(config.whatsapp || "50242023344").replace(/\D/g, "");
  document.querySelectorAll(".wa-link").forEach((link) => {
    const message = link.dataset.waMessage;
    link.href = `https://wa.me/${whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
  });

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const socials = document.getElementById("social-links");
  (config.socialLinks || []).forEach((social) => {
    if (!social.name || !social.url) return;
    try {
      const url = new URL(social.url);
      if (!["https:", "http:"].includes(url.protocol)) return;
      const link = document.createElement("a");
      link.textContent = social.name;
      link.href = url.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      socials.append(link);
    } catch { /* No mostrar enlaces inválidos. */ }
  });
  if (socials?.childElementCount) socials.hidden = false;

  const faqButtons = document.querySelectorAll(".faq-item button");
  faqButtons.forEach((button) => button.addEventListener("click", () => {
    const expand = button.getAttribute("aria-expanded") !== "true";
    faqButtons.forEach((other) => {
      other.setAttribute("aria-expanded", "false");
      document.getElementById(other.getAttribute("aria-controls")).hidden = true;
    });
    button.setAttribute("aria-expanded", String(expand));
    document.getElementById(button.getAttribute("aria-controls")).hidden = !expand;
  }));
})();
