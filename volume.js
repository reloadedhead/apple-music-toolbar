// Apple only renders the volume slider after the volume icon is clicked, and
// collapses it again on mouseleave and when focus leaves the group. Expand it
// and keep it expanded.
//
// While the slider is hidden, a click on the icon only shows it. Once it is
// shown, a click mutes and unmutes, so the icon keeps working as before.

const GROUP_SELECTOR = ".chrome-volume";
const EXPANDED_CLASS = "chrome-volume--expanded";
const MAX_ATTEMPTS = 5;

let scheduled = false;
let attempts = 0;
let lastGroup = null;

// Apple's collapse handlers sit on the group itself. Stop these events in the
// capture phase, before they reach them, so the slider never closes.
function keepOpen(event) {
  if (event.target instanceof Element && event.target.closest(GROUP_SELECTOR)) {
    event.stopImmediatePropagation();
  }
}
document.addEventListener("mouseleave", keepOpen, true);
document.addEventListener("focusout", keepOpen, true);

function expand() {
  scheduled = false;

  const group = document.querySelector(`.player-bar ${GROUP_SELECTOR}`);
  if (!group) return;

  // A new group (the player was redrawn) gets a fresh set of attempts
  if (group !== lastGroup) {
    lastGroup = group;
    attempts = 0;
  }

  if (group.classList.contains(EXPANDED_CLASS)) {
    attempts = 0;
    return;
  }

  // Don't keep clicking if the page doesn't react
  if (attempts >= MAX_ATTEMPTS) return;
  attempts += 1;
  group.querySelector("button.chrome-volume__button")?.click();
}

function scheduleExpand() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(expand);
}

// The player is drawn after load and its bar can be replaced (for example when
// the window is resized or the app redraws), so watch the whole page, not one
// element that may get detached.
new MutationObserver(scheduleExpand).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

scheduleExpand();
