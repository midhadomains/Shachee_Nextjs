import Link from "next/link";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { siteData } from "../data/siteData";

export default function Home() {
  const { site, skills, projects, achievements, supervisor, pmrfReviews } = siteData;

  return (
    <Layout>
      <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 py-12 lg:py-16 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-800 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
            Prime Minister’s Research Fellow
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">{site.author}</h1>
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Research Scholar</p>
            <p className="text-brand-800 font-semibold">
              Ph.D. Research Scholar, Department of Microbiology &amp; Cell Biology, IISc Bengaluru.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">{site.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 bg-brand-700 text-white rounded-lg shadow hover:bg-brand-800 transition">Get in touch</a>
            <a href={site.resumeUrl} target="_blank" rel="noreferrer" download className="px-5 py-3 border border-brand-200 text-brand-800 rounded-lg hover:bg-brand-50 transition">Download Resume</a>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Core Focus</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Investigating interferon-independent antiviral innate immunity, IRF3 stability, and rapid host defense strategies against Influenza A, Zika, Dengue, HSV-1, HIV, and SARS-CoV-2.
            </p>
          </div>
        </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-200/40 to-brand-500/20 rounded-3xl blur-2xl" aria-hidden="true"></div>
            <div className="relative bg-white border border-brand-100 rounded-3xl p-6 shadow-xl">
              <div className="w-full aspect-[3/4] sm:aspect-[4/5] bg-brand-50 rounded-2xl mb-6 overflow-hidden">
                <img
                  src={site.avatar}
                  alt={`${site.author} portrait`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="p-3 rounded-lg bg-brand-50">
                <p className="font-semibold text-brand-800">Location</p>
                <p>{site.location}</p>
              </div>
              <div className="p-3 rounded-lg bg-brand-50">
                <p className="font-semibold text-brand-800">Contact</p>
                <p>{site.email}</p>
              </div>
              <div className="p-3 rounded-lg bg-brand-50 col-span-2">
                <p className="font-semibold text-brand-800">Research Objective</p>
                <p>Broad-spectrum antivirals independent of classical IFN signaling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16" id="skills">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Skills & Expertise</h2>
          <span className="text-sm text-slate-600">Research, leadership, teaching</span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-sm font-medium text-slate-800">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Leadership & Achievements</h2>
          <span className="text-sm text-slate-600">Highlights from shachee.in</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map(item => (
            <div key={item} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-brand-600" aria-hidden="true"></span>
              <p className="text-sm text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 space-y-8" id="research">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Research</h2>
          <Link href="/projects/irf3-antiviral-response" className="text-sm text-brand-700 hover:text-brand-900">View all</Link>
        </div>

        {supervisor ? (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row gap-5 items-start">
            {supervisor.image && (
              <img src={supervisor.image} alt={`${supervisor.name} portrait`} className="w-20 h-20 rounded-full object-cover border border-slate-200" />
            )}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-slate-500">Research Supervisor</p>
              <h3 className="text-xl font-semibold text-slate-900">{supervisor.name}</h3>
              <p className="text-sm text-brand-800 font-semibold">{supervisor.title}</p>
              <p className="text-sm text-slate-700">{supervisor.affiliation}</p>
              <p className="text-sm text-slate-700">{supervisor.note}</p>
              {supervisor.website && (
                <a href={supervisor.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-700 font-semibold hover:text-brand-900">
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-xl font-semibold text-slate-900">Projects</h3>
          <span className="text-sm text-slate-600">IRF3 stability & IFN-independent antivirals</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} supervisor={supervisor} />
          ))}
        </div>

        {pmrfReviews?.length ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">PMRF Annual Reviews</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {pmrfReviews.map(review => (
                <article key={review.title} className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm space-y-3">
                  {review.image && (
                    <div className="h-36 w-full overflow-hidden rounded-lg bg-slate-100">
                      <img src={review.image} alt={review.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wide text-slate-500">PMRF Annual Review</p>
                    <h4 className="text-lg font-semibold text-slate-900">{review.title}</h4>
                    {review.intro && <p className="text-sm text-slate-700">{review.intro}</p>}
                  </div>
                  {review.objectives?.length ? (
                    <div>
                      <p className="text-xs font-semibold text-slate-800 mb-1">Objectives</p>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                        {review.objectives.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {review.significance && (
                    <p className="text-xs text-slate-700"><span className="font-semibold">Significance:</span> {review.significance}</p>
                  )}
                  {review.workUpdates?.length ? (
                    <div>
                      <p className="text-xs font-semibold text-slate-800 mb-1">Work updates</p>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                        {review.workUpdates.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {review.reviewResults && (
                    <p className="text-xs text-slate-800"><span className="font-semibold">Review Results:</span> {review.reviewResults}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="py-12 lg:py-16" id="contact">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Let’s collaborate</h2>
            <p className="text-slate-700">
              Looking forward to hearing from you. I am excited to discuss research collaborations, opportunities, and speaking engagements.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Email:</strong> {site.email}</p>
              <p><strong>Phone:</strong> +91-9113141916</p>
            </div>
          </div>
          <form action="mailto:shachees@iisc.ac.in" method="POST" encType="text/plain" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800">Name</label>
              <input id="name" name="Name" type="text" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800">Email</label>
              <input id="email" name="Email" type="email" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800">Message</label>
              <textarea id="message" name="Message" rows="4" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Tell me about your project or request"></textarea>
            </div>
            <button type="submit" className="w-full px-5 py-3 bg-brand-700 text-white rounded-lg font-semibold hover:bg-brand-800 transition">Send</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
