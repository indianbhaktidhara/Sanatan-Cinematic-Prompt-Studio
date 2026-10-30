# Sanatan Cinematic Image Prompt Studio V5.0

A no-build, no-dependency browser app for creating premium cinematic image prompts grounded in sacred-site architecture, materials and regional colour. It generates text prompts; it does not call an image-generation service or require an API key.

## Run on Windows

1. Open this folder in VS Code.
2. Open `index.html` in a browser, or use the VS Code **Live Server** extension and select **Go Live**.
3. Choose a destination, image model, visual treatment, scene direction and output format.
4. Generate the three prompt variations, copy an individual prompt, copy all prompts, or download them as a `.txt` file.

No npm install or build step is needed.

## Features

- Model-aware output for OpenAI Images / ChatGPT, Midjourney, FLUX and Stable Diffusion XL.
- Model-appropriate delivery notes and aspect-ratio guidance; Midjourney parameters are only included for Midjourney.
- Photoreal cinematic, fine-art devotional and travel-editorial visual treatments.
- Scene brief input for the focal moment, subject and environmental details.
- Destination identity lock for encoded architecture, primary material and palette, accent-colour proportions, regional landscape, natural patina and physically plausible lighting.
- All 28 preset destinations have destination-specific profiles; custom destinations provide a reference-details field and are clearly marked unverified by the built-in library.
- Collapsible setting groups keep the workspace compact; a fixed mobile generate action takes users directly to results.
- Existing Jyotirlinga selector, multi-hook engine, platform dimensions, branding, camera, lighting and VFX controls.
- Copy per variation, copy all, and download generated prompts as plain text.
- Deity and heritage filters for Ram/Ramayana, Krishna and Braj, Shiva, Vishnu, Lakshmi, Saraswati, Hanuman and Indian architectural heritage.
- A 17-stop traditional Ramayana pilgrimage narrative from Ayodhya through Mithila, exile, Dandakaranya, Kishkindha, the southern coast and Lanka-associated pilgrimage places, then back to Ayodhya.
- Distinct site profiles for Konark, Khajuraho, Hampi, Ellora, Modhera and additional major temples across India, Nepal and Sri Lanka.

Image-generation interfaces and supported settings change over time. Treat model-specific delivery notes as starting guidance and confirm options in the selected image tool. Destination profiles and user-provided references are prompt guidance, not automated factual verification; review the final image against reliable references.

The destination collection is curated, not exhaustive. Ramayana route markers and cross-border pilgrimage associations are presented as traditional sacred geography, not as proof of a single historically established itinerary or archaeological identification. Broad regions such as Dandakaranya are not represented as one exact site.

`original-v3.3.html` is the untouched source supplied in the original archive.

## Publish with GitHub Pages

1. Create a **public** GitHub repository and upload `index.html`, `styles.css`, `app.js`, and this `README.md` to the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. After the Pages deployment finishes, open `https://<your-username>.github.io/<repository-name>/`.
