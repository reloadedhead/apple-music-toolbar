// The sidebar's colors come from a stylesheet the page can't read from CSS,
// so copy its actual background, border and glass effect into --amt-sidebar-bg,
// --amt-sidebar-border and --amt-sidebar-backdrop for the toolbar to use.
// It changes with the theme and on playlist and album pages, which tint the window.

let appContainer = null;
let scheduled = false;

const containerObserver = new MutationObserver(scheduleSync);

function sync() {
  scheduled = false;
  const container = document.querySelector(".app-container");
  const sidebar = document.querySelector(".navigation");
  if (!container || !sidebar) return;

  if (container !== appContainer) {
    containerObserver.disconnect();
    containerObserver.observe(container, { attributes: true, attributeFilter: ["class", "style"] });
    appContainer = container;
  }

  const style = getComputedStyle(sidebar);
  setVariable(container, "--amt-sidebar-bg", style.backgroundColor);
  setVariable(container, "--amt-sidebar-border", style.borderInlineEndColor);
  setVariable(container, "--amt-sidebar-backdrop", style.backdropFilter);
}

function setVariable(element, name, value) {
  if (element.style.getPropertyValue(name) !== value) {
    element.style.setProperty(name, value);
  }
}

function scheduleSync() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(sync);
}

// The page is rendered after load and can replace the whole app
new MutationObserver(scheduleSync).observe(document.body, { childList: true });

// The sidebar fades between colors when the theme changes
document.addEventListener("transitionend", (event) => {
  if (event.target instanceof Element && event.target.matches(".navigation")) scheduleSync();
});

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", scheduleSync);

scheduleSync();
