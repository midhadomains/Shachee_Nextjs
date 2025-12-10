import fs from "fs/promises";
import path from "path";

// Serves the resume PDF from the local public directory with a download header.
export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "public", "Resume-Shachee.pdf");
    const fileBuffer = await fs.readFile(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Resume-Shachee.pdf"');
    res.status(200).send(fileBuffer);
  } catch (error) {
    res.status(500).json({ error: "Unexpected error while downloading resume" });
  }
}
