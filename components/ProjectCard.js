import Link from "next/link";

export default function ProjectCard({ project, supervisor }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition transform overflow-hidden">
      {project.coverImage ? (
        <div className="h-48 w-full bg-slate-100">
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gradient-to-br from-brand-200 via-white to-brand-100 flex items-center justify-center text-brand-800 text-lg font-semibold">
          <span className="text-center px-4">Image coming soon</span>
        </div>
      )}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-brand-50 text-brand-700">{project.date}</span>
        </div>
        {supervisor ? (
          <div className="flex items-center gap-3 text-xs text-slate-600">
            {supervisor.image && (
              <img src={supervisor.image} alt={`${supervisor.name} portrait`} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
            )}
            <div>
              <p className="font-semibold text-slate-800">Supervised by {supervisor.name}</p>
              <p className="text-slate-600">{supervisor.title}</p>
              {supervisor.website ? (
                <a href={supervisor.website} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-900">More details</a>
              ) : null}
            </div>
          </div>
        ) : null}
        <p className="text-slate-700 text-sm">{project.summary}</p>
        {project.highlights?.length ? (
          <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
            {project.highlights.slice(0, 2).map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-2 text-xs text-brand-800">
          {project.tech.map(tag => (
            <span key={tag} className="px-2 py-1 bg-brand-50 rounded-full border border-brand-100">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-2 text-sm font-medium">
          <Link href={`/projects/${project.slug}`} className="text-brand-700 hover:text-brand-900">
            Read more →
          </Link>
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-700">Code</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-700">Live</a>}
        </div>
      </div>
    </article>
  );
}
