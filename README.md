# StinkSlot

A straight-faced SaaS landing page for StinkSlot, booking software for one corpse flower. Corpse flowers (*Amorphophallus titanum*) bloom every 7 to 10 years, stay open for about 36 hours, and smell like rotting meat. StinkSlot sells the 15 minutes in front of one, a fictional flower named Barb, and lets you pick everything except the date.

Everybody builds booking software, and the advice now is to niche down until nobody else wants your market. StinkSlot's market is one plant.

It's a parody, and a satire site for [merge.tel](https://merge.tel), which reads the pull requests your team merges and writes the customer update, so people hear what shipped before it closes.

## What's here

| Path | What it is |
|---|---|
| `index.html` | The landing page. A live "Barb, right now" card with a countdown that never settles, a seven-year calendar where no date can be picked, the booking form with a stench tolerance slider, and a confirmation that downloads a real `.ics` event spanning three years |
| `pricing/` | Per bloom or annual. Annual costs $100 more per cycle, and the page says so. Contact sales promises a call in 7 to 10 years |
| `status/` | All systems dormant. 90 day bars, and the incident history includes the last bloom |
| `404.html` | This page is dormant |
| `assets/site.js` | The domain constant, Barb's bloom dates, and the nav and the "Why this exists" footer every page shares |
| `assets/og.png` | The 1200x630 share image, with a "Parody" strip in the PNG |
| `assets/photos/` | Real corpse flower photos, all CC0. See Photos below |
| `.github/workflows/pages.yml` | Publishes the site to GitHub Pages |

There's no build step, no framework, no database and no `package.json`. Nothing on the site sends data anywhere.

## Run it

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight from disk works too.

## Deploy

The site goes on GitHub Pages at https://mergetel.github.io/stinkslot/. In Settings, Pages, set the source to "GitHub Actions". `pages.yml` then publishes on every push to `main`, and only the site files go up.

Every link is relative, and `assets/site.js` works out the site root from its own URL, so the same files work under `/stinkslot/` and at `/` on a custom domain. `404.html` works out the root from the hostname instead, because Pages serves it at whatever path was missing.

## Set the domain

The address lives in the `window.SITE` line at the top of `assets/site.js`. The copied booking text reads it. The `og:image` tags in the three pages hold the full URL too, so change those when the domain changes.

## Barb's dates

`window.BARB` in `assets/site.js` holds the last bloom (March 2, 2021) and the next window (March 2028 to March 2031). The calendar, the `.ics` download and the "days dormant" counters all read it.

## Photos

Every photo is a real corpse flower from Wikimedia Commons, released under CC0, so the site needs no permission or attribution. It credits them in the footer anyway. None of them is Barb, and the hero photo carries a "Not actually Barb" tag.

| File | Shows | Photographer | Source |
|---|---|---|---|
| `bloom.jpg` | Full bloom, Princess of Wales Conservatory, Kew | AndyScott | [Commons](https://commons.wikimedia.org/wiki/File:Titan_arum_flowering,_Princess_of_Wales_Conservatory,_Kew.jpg) |
| `spadix.jpg` | Looking down into an open bloom, Kew (cropped) | AndyScott | [Commons](https://commons.wikimedia.org/wiki/File:Titan_arum_flower_from_above,_Princess_of_Wales_Conservatory,_Kew.jpg) |
| `measure.jpg` | Open bloom beside a measuring stick, Meise Botanic Garden | Orbicule | [Commons](https://commons.wikimedia.org/wiki/File:Amorphophallus_titanum_at_Meise_Botanic_Garden_in_2024.jpg) |
| `leaf.jpg` | The leaf stage, Kew | Mooyah | [Commons](https://commons.wikimedia.org/wiki/File:Titan_arum_at_Kew_Gardens_in_leaf_cycle.jpg) |
| `thermal.jpg` | A thermal camera on a bloom, University of Warsaw Botanic Garden | Olaf | [Commons](https://commons.wikimedia.org/wiki/File:Measuring_temperature_of_a_blooming_Amorphophallus_titanum_3.jpg) |
| `frill.jpg` | Spadix and spathe close up, Bayreuth University | Fbianh | [Commons](https://commons.wikimedia.org/wiki/File:Titan_Arum_at_Bayreuth_University_-_Second_Day_1.JPG) |

They were downloaded at Wikimedia's standard thumbnail sizes and recompressed to JPEG at 640 to 1280 px wide. A replacement has to be public domain or CC0 too. A CC BY-SA photo would bring share-alike terms with it.

## Rules

Everything on the site is made up, including Barb, the conservatories, the people and the quotes, except the photos, which are real flowers at real gardens. None of them is meant to be a real one. The corpse flower facts are real: the bloom cycle, the 36 hour window, the spadix heating to about body temperature, and the dimethyl trisulfide. The share image carries a "Parody" strip inside the PNG, so a cropped screenshot still says it's a joke. Nothing on the site collects anything.
