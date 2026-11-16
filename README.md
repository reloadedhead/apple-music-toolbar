# Apple Music Toolbar

A Chrome extension that restyles the [Apple Music web player](https://music.apple.com). It replaces the floating player at the bottom with a toolbar across the top of the window, styled like a macOS toolbar.

- Playback controls on the left, now playing in the center, and lyrics, Up Next and volume on the right
- The share and more buttons from playlist and album pages move into the toolbar
- Same glass, color and border as the sidebar, including the tinted colors on playlist and album pages
- The toolbar ends where the lyrics or Up Next panel starts
- The sidebar logo lines up with the toolbar controls

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode**
3. Click **Load unpacked** and pick this folder

After changing a file, click the reload button on the extension's card and refresh Apple Music.

## Files

- `toolbar.css` holds all the styling. Sizes are variables at the top.
- `sidebar-color.js` copies the sidebar's color, border and glass effect into CSS variables for the toolbar. Apple sets these in a stylesheet that CSS can't read.
- `manifest.json` loads both on `music.apple.com`.

The styles depend on Apple's class names, such as `.player-bar__floating-player`. If Apple changes the page, they need updating.
