# Music but with a Toolbar

A Chrome extension that restyles the [Apple Music web player](https://music.apple.com). It replaces the floating player at the bottom with a toolbar across the top of the window, styled like a macOS toolbar.

- Playback controls and volume on the left, now playing in the center, and lyrics and Up Next on the right
- The volume slider is always visible, to the right of the volume icon; the icon still mutes and unmutes
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
- `volume.js` keeps Apple's volume slider open. Apple only renders it after you click the icon and collapses it on mouse leave and focus loss, so the script clicks the icon and blocks those collapse events.
- `manifest.json` loads them on `music.apple.com`.
- `icons/` holds the extension icons (16, 32, 48 and 128 px). The 128 px one has the art at 96 px with a 16 px transparent margin, as the Chrome Web Store asks.
- `design/` holds the icon source: `icon.icon` is an Icon Composer document and `icon-1024.png` is its render.
- `store/` holds the Chrome Web Store listing text and the privacy policy. It is not part of the extension package.

The styles depend on Apple's class names, such as `.player-bar__floating-player`. If Apple changes the page, they need updating.

## Disclaimer

Music but with a Toolbar is an independent, unofficial project. It is not affiliated with, authorized, maintained, sponsored or endorsed by Apple Inc. or any of its affiliates. Apple and Apple Music are trademarks of Apple Inc., registered in the U.S. and other countries and regions. All other trademarks belong to their respective owners.

The extension only changes how the Apple Music web player looks in your browser. It does not collect, store or send any data, and it does not modify, download or redistribute any Apple content.

## License

[MIT](LICENSE)
