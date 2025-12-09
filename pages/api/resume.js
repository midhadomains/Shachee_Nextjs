import { siteData } from "../../data/siteData";

// Streams the resume PDF as a same-origin download, avoiding cross-origin download blocks.
export default async function handler(req, res) {
  try {
    const resumeUrl = siteData.site.resumeUrl;
    if (!resumeUrl) {
      res.status(404).json({ error: "Resume not configured" });
      return;
    }

    const response = await fetch(resumeUrl);
    if (!response.ok) {
      res.status(502).json({ error: "Unable to fetch resume" });
      return;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const contentType = response.headers.get("content-type") || "application/pdf";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", 'attachment; filename="Shachee-Resume.pdf"');
    res.status(200).send(buffer);
  } catch (error) {
    res.status(500).json({ error: "Unexpected error while downloading resume" });
  }
}
