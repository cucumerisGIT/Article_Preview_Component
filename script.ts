/* Variables */

const shareBtn = document.getElementById("share-btn") as HTMLButtonElement;
const sharePanel = document.getElementById("share-panel") as HTMLDivElement;

/* Functions */

const onSharePanelToggled = (e: Event) => {
    const isHidden = sharePanel.getAttribute("aria-hidden") === "true";
    shareBtn.setAttribute("aria-expanded", `${!isHidden}`);
    shareBtn.classList.toggle("user__share-btn--expanded");
    sharePanel.classList.toggle("user__share-panel--hidden");
}

// Connect Events

shareBtn.addEventListener("click", onSharePanelToggled);