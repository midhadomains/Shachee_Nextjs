import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-brand-100 text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-4 py-2 bg-brand-700 text-white rounded">
        Skip to content
      </a>
      <Header />
      <main id="main" className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
