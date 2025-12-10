// Redirect to the static resume file. The client `download` attribute handles attachment behavior.
export default function handler(req, res) {
  try {
    res.redirect(307, "/Resume-Shachee.pdf");
  } catch (error) {
    res.status(500).json({ error: "Unexpected error while downloading resume" });
  }
}

export const config = {
  runtime: "nodejs"
};
