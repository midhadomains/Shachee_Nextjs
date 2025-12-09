# Shachee Swaraj — Portfolio (Next.js + Tailwind CSS)

A ready-to-run portfolio site powered by Next.js (pages router) and Tailwind CSS, showcasing research in interferon-independent antiviral innate immunity.

## Quickstart
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev` (http://localhost:3000)
3. Build for production: `npm run build`
4. Start production server: `npm start`

## Project Structure
- `pages/` — Home, About, and dynamic project detail pages.
- `components/` — Layout, Header, Footer, Project cards.
- `data/siteData.js` — All site content (edit this JSON-like object to update text, skills, and projects).
- `styles/globals.css` — Global styles; Tailwind included.
- `public/profile.jpg` — Replace with your photo.
- `public/favicon.ico` — Replace with your favicon.
- `public/projects/*.png` — Add cover images matching `coverImage` paths from `data/siteData.js`.

## Tailwind Setup
Configured via `tailwind.config.js` and `postcss.config.js`. Content paths already include `pages` and `components`.

## Contact Form
The contact form posts via `mailto:shachees@iisc.ac.in`. Update the address in `pages/index.js` if needed.

## Data JSON
All site text comes from `data/siteData.js` using the following object:
```
{
  "site": {
    "title": "Dr. Shachee Swaraj — Research Scholar",
    "description": "Prime Minister’s Research Fellow exploring broad-spectrum, interferon-independent antiviral innate immunity.",
    "author": "Dr. Shachee Swaraj",
    "email": "shachees@iisc.ac.in",
    "location": "Bengaluru, India",
    "avatar": "/profile.jpg"
  },
  "social": {
    "github": "https://github.com/",
    "linkedin": "https://linkedin.com/in/",
    "twitter": "https://twitter.com/"
  },
  "skills": ["Viral Immunology", "Antiviral Innate Immunity", "CRISPR Screening", "Molecular Biology", "Protein Stability", "Flow Cytometry", "Fluorescence Microscopy", "Data Analysis", "Scientific Writing", "Teaching & Mentorship"],
  "projects": [
    {
      "title": "IRF3 Stability in Antiviral Response",
      "slug": "irf3-antiviral-response",
      "summary": "Dissecting IRF3 stability, interactions, and negative regulation to balance IFN-β driven antiviral immunity.",
      "coverImage": "/projects/irf3.png",
      "tech": ["IRF3", "Innate Immunity", "Proteostasis"],
      "repo": "",
      "liveUrl": "",
      "date": "2024-03-01",
      "content": "The project explores how IRF3 stability shapes antiviral innate immunity. We track degradation pathways via proteasomal and autophagy routes, map triggering factors, and measure IFN-β promoter activity through dual-luciferase assays. By defining the negative regulation of IFN response, the work aims to maintain immune homeostasis while preventing exaggerated IFN-β expression."
    },
    {
      "title": "IFN-Independent Broad-Spectrum Antivirals",
      "slug": "ifn-independent-antivirals",
      "summary": "Characterizing rapid antiviral mechanisms that bypass classical interferon signaling.",
      "coverImage": "/projects/broad-spectrum.png",
      "tech": ["CRISPR KO", "Transcriptomics", "Virus Reporter Panel"],
      "repo": "",
      "liveUrl": "",
      "date": "2024-06-01",
      "content": "We investigate direct IRF-driven induction of antiviral genes in IFN signaling-deficient systems. The study identifies antiviral factors, tests their activity against coronaviruses, influenza, flaviviruses, retroviruses, and DNA viruses, and maps IRF3-mediated transcription independent of IFN. Outcomes may reveal new drug and vaccine strategies."
    }
  ]
}
```

Update fields to reflect new research, links, and assets as needed.
