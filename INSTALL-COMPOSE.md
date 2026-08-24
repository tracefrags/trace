# Installing TRACE Compose

Getting the map onto your phone and laptop as a proper app. About ten minutes, once.

---

## What you need

Four files, all downloaded from this chat into **one folder**:

- `compose-map.html`
- `compose-manifest.json`
- `compose-sw.js`
- `icon.svg`

Don't rename them. They find each other by name.

If you already set up the Studio app earlier, `icon.svg` is the same file — you only need one copy.

---

## Step 1 — Put the files online

They have to be on the web for this to install. A local file won't work.

**If you already have the GitHub repo from before:**

1. Go to github.com and open your `trace` repository
2. Click **Add file** → **Upload files**
3. Drag in the four files
4. Scroll down, click **Commit changes**

Wait about a minute. Your app is at:

```
https://YOURNAME.github.io/trace/compose-map.html
```

**If you don't have the repo yet**, follow SETUP.md first — same six steps, and the same repo holds both apps.

---

## Step 2 — Install on Android

1. Open that address in **Chrome** (not Samsung Internet or Firefox — Chrome handles this best)
2. Wait for the page to fully load
3. Tap the **⋮** menu, top right
4. Tap **Add to Home screen** — or **Install app** if that's what it shows
5. Confirm the name, tap **Add**

You'll get a TRACE icon. Tapping it opens the app fullscreen — no address bar, no tabs.

**If "Add to Home screen" is missing:** the page hasn't finished registering. Pull down to refresh, wait ten seconds, try again.

---

## Step 3 — Install on your laptop

**Chrome or Edge:**

1. Open the same address
2. Look for a small **install icon** in the address bar — a monitor with a downward arrow
3. Click it, then **Install**

No icon? Use the **⋮** menu → **Cast, save and share** → **Install page as app**.

The app opens in its own window with no browser interface.

---

## Step 4 — Check it works offline

Worth doing once so you trust it at the bench.

1. Open the installed app
2. Turn on aeroplane mode
3. Close the app fully and reopen it

It should load normally. If it doesn't, open it online once more — the service worker needs one successful visit to cache everything.

---

## How your work is saved

Everything you build saves automatically to that device — materials, percentages, blocks, batch size, formula name. Close it, reopen a week later, it's still there.

**Phone and laptop keep separate copies.** They don't sync. Use Export PDF if you want to move a formula between them, or just rebuild it — the map makes that quick.

**Reset** wipes it deliberately, with a confirmation.

---

## When I send an updated version

1. Open your repo on github.com
2. Click `compose-map.html`
3. Click the **pencil** icon
4. Select all (Ctrl+A / Cmd+A), delete, paste the new version
5. Scroll down, **Commit changes**

Then on your phone: close the app completely and reopen. The service worker caches hard, so if it still looks old, go to Chrome → Settings → Site settings → your site → Clear data, then reopen.

Your saved formulas survive updates. They live on the device, not in the file.

---

## Exporting a PDF

Tap **Export PDF**. Your device's print dialog opens.

**On Android:** choose **Save as PDF** as the destination, then Save.

**On laptop:** choose **Save as PDF**, then Save.

You get a single page with the full formula, block groupings, active percentages, weighing instructions, the reading, cost, and IFRA status.

---

## If something goes wrong

**Page won't load** — check the address ends in `/compose-map.html`, all lowercase.

**No install option** — the address must start with `https://`. GitHub Pages does this automatically. Local files can't install.

**Work disappeared** — you're likely on the other device, or in a private window. Private browsing discards storage on close.

**Blocks dropdown empty** — hard refresh with Ctrl+Shift+R.
