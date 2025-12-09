import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { siteData } from "../../data/siteData";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { projects, supervisor } = siteData;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="py-16">
          <h1 className="text-2xl font-bold text-slate-900">Project not found</h1>
          <p className="text-slate-700 mt-2">Please check the URL or return to the projects section.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 lg:py-16 max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm text-slate-500">{project.date}</p>
          <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold border border-brand-100">{tag}</span>
            ))}
          </div>
          {supervisor ? (
            <div className="flex items-center gap-4 text-sm text-slate-700 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              {supervisor.image && (
                <img src={supervisor.image} alt={`${supervisor.name} portrait`} className="w-16 h-16 rounded-full object-cover border border-slate-200" />
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  <p className="font-semibold text-slate-900">Supervised by {supervisor.name}</p>
                </div>
                <p className="text-slate-700">{supervisor.title}</p>
                <p className="text-slate-600">{supervisor.affiliation}</p>
                <p className="text-slate-600">{supervisor.note}</p>
                {supervisor.website ? (
                  <a href={supervisor.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand-700 hover:text-brand-900 font-semibold">
                    More details <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </header>

        <div className="h-64 w-full bg-gradient-to-br from-brand-200 via-white to-brand-100 rounded-2xl flex items-center justify-center text-brand-800 text-xl font-semibold">
          {project.coverImage ? project.title : "Project visual coming soon"}
        </div>

        <section className="space-y-6">
          <div className="prose prose-slate max-w-none">
            <p>{project.content}</p>
          </div>

          {project.highlights?.length ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Key Workstreams</h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                {project.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.outcomes?.length ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Outcomes</h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                {project.outcomes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        <div className="flex gap-4 text-sm font-semibold">
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-brand-50">View Code</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-brand-50">Live Site</a>}
        </div>
      </article>
    </Layout>
  );
}
