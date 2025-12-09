import { siteData } from "../data/siteData";

export default function Footer() {
  const { site } = siteData;
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} {site.author}. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
          Based in {site.location}
        </p>
      </div>
    </footer>
  );
}
