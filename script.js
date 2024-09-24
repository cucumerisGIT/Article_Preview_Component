/* Variables */
var shareBtn = document.getElementById("share-btn");
var sharePanel = document.getElementById("share-panel");
/* Functions */
var onSharePanelToggled = function (e) {
    var isHidden = sharePanel.getAttribute("aria-hidden") === "true";
    shareBtn.setAttribute("aria-expanded", "".concat(!isHidden));
    shareBtn.classList.toggle("user__share-btn--expanded");
    sharePanel.classList.toggle("user__share-panel--hidden");
};
// Connect Events
shareBtn.addEventListener("click", onSharePanelToggled);
