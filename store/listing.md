# Chrome Web Store listing: Music but with a Toolbar

Copy each block into the matching field of the Developer Dashboard. This folder is not part of the extension ZIP.

## Name
Music but with a Toolbar

(Taken from `manifest.json`. 24 characters, the limit is 75.)

## Summary
Comes from the manifest `description`, 122 characters (limit 132):

> Moves the Apple Music web player into a macOS-style top toolbar. Unofficial: not affiliated with or endorsed by Apple Inc.

## Category and language
- Language: English
- Category: pick the closest one in the dashboard (Entertainment or Productivity; the exact list was not verified)

## Detailed description

Music but with a Toolbar gives the Apple Music web player a macOS-style toolbar across the top of the window.

What changes
- Playback controls on the left, now playing in the center, and lyrics, Up Next and volume on the right
- The share and more buttons from playlist and album pages move into the toolbar
- Same glass, color and border as the sidebar, including the tinted colors on playlist and album pages
- The toolbar ends where the lyrics or Up Next panel starts
- The sidebar logo lines up with the toolbar controls

How it works
The extension only runs on music.apple.com. It changes how the page looks and adds nothing else. It needs no special browser permissions, and it does not collect, store or send any data.

Good to know
The styles depend on how the Apple Music web player is built. If Apple changes the page, the toolbar may look wrong until the extension is updated.

Disclaimer
Music but with a Toolbar is an independent, unofficial project. It is not affiliated with, authorized, maintained, sponsored or endorsed by Apple Inc. or any of its affiliates. Apple and Apple Music are trademarks of Apple Inc., registered in the U.S. and other countries and regions. All other trademarks belong to their respective owners.

## Privacy practices tab

Single purpose
> Restyles the Apple Music web player (music.apple.com) by moving its playback controls into a toolbar at the top of the window.

Permission justification
> The extension requests no browser permissions. Its content scripts run only on https://music.apple.com/* and https://beta.music.apple.com/*, to apply a stylesheet and to read the sidebar's computed colors. That is the only host access it has.

Remote code
> No, I am not using remote code. All code ships inside the package.

Data usage
- Leave every data type unchecked: the extension collects none.
- Tick the three certifications: no selling or transferring data, no using it for unrelated purposes, no using it for creditworthiness or lending. (Check the exact wording in the dashboard.)

Privacy policy URL
- Use the text in `privacy-policy.md`, published at a public URL (see that file).

## Images
- Icon: 128x128 PNG, inside the ZIP (done: `icons/icon-128.png`, art 96x96 with a 16 px margin)
- Screenshots: 1 to 5, 1280x800 (still to do)
- Small promo tile 440x280 and marquee 1400x560: optional
- Do not use Apple logos or the Apple Music logo in any image.

## Distribution
- First submission: Unlisted or Private, to test the flow. Switch to Public later.
