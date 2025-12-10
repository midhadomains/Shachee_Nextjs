import Link from "next/link";
import Layout from "../components/Layout";
import { siteData } from "../data/siteData";

export default function About() {
  const { site, skills, achievements, supervisor, researchInterest, pmrfReviews } = siteData;

  return (
    <Layout>
      <section className="py-12 lg:py-16 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900">About {site.author}</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            I’m a Ph.D. research scholar in the Department of Microbiology and Cell Biology at the Indian Institute of Science, Bangalore. Awarded the Prime Minister’s Research Fellowship in May 2020, I investigate broad-spectrum, interferon-independent antiviral innate immune mechanisms across viruses including IAV, ZIKV, DENV, HSV1, HIV, and SARS-CoV-2.
          </p>
          <p className="text-brand-800 font-semibold">
            Current position: Prime Minister’s Research Fellow &amp; Ph.D. Research Scholar, Dept. of Microbiology &amp; Cell Biology, IISc Bengaluru.
          </p>
          <p className="text-slate-700">
            My work characterizes antiviral factors that function outside classical IFN signaling to reveal new dimensions of mammalian antiviral immunity and enable future therapeutic strategies.
          </p>
          {researchInterest ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Research Interest</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{researchInterest}</p>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={site.resumeUrl} download className="px-4 py-2 bg-brand-700 text-white rounded-lg text-sm font-semibold hover:bg-brand-800 transition">
              View Resume Snapshot
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 border border-brand-200 text-brand-800 rounded-lg text-sm font-semibold hover:bg-brand-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Work Experience</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>2020 – Present:</strong> PMRF Fellow & Ph.D. Student, IISc. Studying IRF3 stability and interferon-independent antiviral pathways.</li>
              <li><strong>2018:</strong> Fishery Training, Fish Farmers Training Centre (FFTC), Ranchi.</li>
              <li><strong>2013–2019:</strong> Biology Faculty across Vidyamandir Classes, E-World, Finatee Classes (Ranchi).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Education</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>2019 – Present:</strong> Ph.D., IISc Bengaluru (Microbiology and Cell Biology).</li>
              <li><strong>2017 – 2019:</strong> M.Sc. Zoology (Gold Medal), Dr. S. P. Mukherjee University.</li>
              <li><strong>2014 – 2017:</strong> B.Sc. Zoology, St. Xavier's College, Ranchi.</li>
              <li><strong>2012 – 2014:</strong> HSC, Delhi Public School, Ranchi.</li>
              <li><strong>2000 – 2012:</strong> SSC, Notre Dame School, Gumla.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Courses done at IISc</h2>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li><strong>Essentials in Microbiology</strong> (MC203) — Aug-Dec 2019, 3 credits, Grade: A (9/10)</li>
            <li><strong>Principles of Genetic Engineering</strong> (MC208) — Aug-Dec 2019, 3 credits, Grade: A+ (10/10)</li>
            <li><strong>Molecular Biology</strong> (MC207) — Aug-Dec 2019, 3 credits, Grade: A (9/10)</li>
            <li><strong>Essentials in Immunology</strong> (MC306) — Aug-Dec 2019, 3 credits, Grade: A (9/10)</li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Publications & Presentations</h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
              <li>Identification of COVID-19 prognostic markers and therapeutic targets through meta-analysis — EBioMedicine (The Lancet), 2021.</li>
              <li>COVID-19: What happens inside you? — covid-gyan.in, 2020.</li>
              <li>Multiple posters on emerging viral diseases and climate change impact on lac culture.</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Skills & Leadership</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold border border-brand-100">{skill}</span>
              ))}
            </div>
            <p className="text-sm text-slate-700">
              Treasurer of MCB Society (2020-2021), award-winning educator, and active contributor to academic communities through talks, posters, and collaborative research.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Leadership & Achievements</h2>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            {achievements.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

      </section>
    </Layout>
  );
}
