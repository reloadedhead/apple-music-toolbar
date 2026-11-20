// Apple only shows the volume slider after the volume icon is clicked, and hides
// it again when focus leaves it. Expand it and keep it expanded.
//
// While the slider is hidden, a click on the icon only shows it. Once it is
// shown, a click mutes and unmutes, so the icon keeps working as before.

const EXPANDED_CLASS = "chrome-volume--expanded";
const MAX_ATTEMPTS = 5;

let playerBar = null;
let scheduled = false;
let attempts = 0;

const playerBarObserver = new MutationObserver(scheduleExpand);

function expand() {
  scheduled = false;

  const bar = document.querySelector(".player-bar");
  if (!bar) return;

  if (bar !== playerBar) {
    playerBarObserver.disconnect();
    // The volume group can be replaced when the player redraws, so watch the whole bar
    playerBarObserver.observe(bar, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class"],
    });
    playerBar = bar;
  }

  const group = bar.querySelector(".chrome-volume");
  if (!group) return;

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

// The player is drawn after load and can be replaced with the whole app
new MutationObserver(scheduleExpand).observe(document.body, { childList: true });

scheduleExpand();
