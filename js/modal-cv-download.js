// Language detection
window.lang =
  (typeof getCurrentLanguage === "function" && getCurrentLanguage()) ||
  localStorage.getItem("lang") ||
  document.documentElement.lang ||
  "en";

// Reusable function to show/hide the correct popover
function toggleCvPopover(popoverId, qrCanvasId) {
  const popover = document.getElementById(popoverId);
  popover.style.display = (popover.style.display === "block") ? "none" : "block";

  const filePath = `files/CV_TSAGIANNIS_${window.lang}.pdf`;
  const fullUrl = `${window.location.origin}/${filePath}`;

  new QRious({
    element: document.getElementById(qrCanvasId),
    value: fullUrl,
    size: 120,
  });
}

// Event listeners for each button
document.getElementById("download1").addEventListener("click", (e) => {
  e.preventDefault();
  toggleCvPopover("cvPopover1", "qrPopover1");
});

document.getElementById("download2").addEventListener("click", (e) => {
  e.preventDefault();
  toggleCvPopover("cvPopover2", "qrPopover2");
});

// Hide popovers on outside click
document.addEventListener("click", (e) => {
  ["cvPopover1", "cvPopover2"].forEach((id) => {
    const popover = document.getElementById(id);
    const trigger = document.getElementById(id === "cvPopover1" ? "download1" : "download2");

    if (popover && !popover.contains(e.target) && e.target !== trigger) {
      popover.style.display = "none";
    }
  });
});
