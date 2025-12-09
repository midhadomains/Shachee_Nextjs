export const siteData = {
  site: {
    title: "Dr. Shachee Swaraj — Research Scholar",
    description: "Prime Minister's Research Fellow exploring broad-spectrum, interferon-independent antiviral innate immunity.",
    author: "Dr. Shachee Swaraj",
    email: "shachees@iisc.ac.in",
    location: "Bengaluru, India",
    avatar: "/profile.png",
    resumeUrl: "https://shachee.in/wp-content/uploads/2024/04/Resume-Shachee.pdf"
  },
  researchInterest: "Exploring viral and bacterial infectious diseases, decoding molecular mechanisms of disease establishment, and mapping host innate/adaptive immune responses alongside vaccine development and efficacy testing. Focused on emerging viral diseases, viral biology, and antiviral innate immunity under the supervision of Dr. Shashank Tripathi. Aiming to characterize signaling pathways and mediators of interferon-independent antiviral responses in mammalian cells, to reveal new antiviral factors tested against coronaviruses, influenza, flaviviruses (Dengue, Zika), retroviruses (HIV), and DNA viruses (Herpes). Long-term goal: translate discoveries into novel drugs and vaccination strategies for human health.",
  supervisor: {
    name: "Dr. Shashank Tripathi",
    title: "Wellcome Trust India Alliance Intermediate Fellow",
    affiliation: "Department of Microbiology & Cell Biology, Centre for Infectious Disease Research, IISc Bengaluru",
    note: "Research supervisor guiding work on interferon-independent antiviral innate immunity across a broad panel of human viruses.",
    image: "/supervisor.webp",
    website: "https://cidr.iisc.ac.in/shashank/"
  },
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/"
  },
  skills: [
    "Viral Immunology",
    "Antiviral Innate Immunity",
    "CRISPR Screening",
    "Molecular Biology",
    "Protein Stability",
    "Flow Cytometry",
    "Fluorescence Microscopy",
    "Data Analysis",
    "Scientific Writing",
    "Teaching & Mentorship"
  ],
  achievements: [
    "Treasurer of the MCB Society (2020-2021).",
    "Winner of 'Face of The University' competition in College Fest Aahvan 2019.",
    "Student Council Member; Captain of Nehru Club, Notre Dame School, Gumla.",
    "Winner of inter-house science exhibitions and multiple academic event accolades.",
    "Winner of Creative Writing in English, debates, group discussions, and Rangoli.",
    "Winner of inter-school group dance competitions (folk, cultural, patriotic).",
    "Winner of 'One Act Plays' for three consecutive years.",
    "Extempore speeches and elocutions; keen singer and dancer (semi-classical, freestyle, Bhangra).",
    "Ukulele and musical performance enthusiast."
  ],
  pmrfReviews: [
    {
      title: "PMRF Annual Review — Broad Spectrum IFN-Independent Antiviral Innate Immunity",
      intro: "Characterization of broad spectrum, IFN signaling-independent antiviral innate immunity in mammalian cells.",
      objectives: [
        "Understand regulation of IRF3 stability and function by cellular and viral factors.",
        "Identify and characterize IRF3-dependent, IFN signaling-independent antiviral factors.",
        "Delineate IRF3-mediated transcription of antiviral genes in an IFN-independent manner."
      ],
      significance: "Reveals new biology of mammalian antiviral immune response and paves the way for broad-spectrum antivirals and improved vaccination strategies.",
      workUpdates: [
        "Showed IRF3 is targeted by proteasomal and autophagosome pathways; rescued IRF3 using pathway-specific inhibitors and quantified via western blot (SDS-PAGE), FACS, and fluorescence microscopy.",
        "Identified triggers for IRF3 degradation; measured effects on IFN-β promoter activity using Renilla-Firefly dual-luciferase assays."
      ],
      reviewResults: "Overall Grade: Advanced to Next Scale. Remarks: Well-designed work; suggested stable, low-expression endogenous models for degradation studies.",
      image: "/reviews/pmrf-review-1.webp"
    },
    {
      title: "PMRF Annual Review 2022 — IRF3 Degradation & IFN-Independent Antivirals",
      intro: "Deepening analysis of IFN-independent antiviral mechanisms and IRF3 stability.",
      workUpdates: [
        "Validated findings at endogenous IRF3 levels in HEK-293T and A549 stimulated with Poly I:C and/or SeV; assessed IRF3/pIRF3 with drug treatments.",
        "Mapped IRF3 ubiquitination/polyubiquitination and lysine roles (IRF3-5D mutants) via alanine scanning; explored ubiquitin linkages affecting stability.",
        "Cloned IRF3 with 2x C-term Strep tag; purified for Orbitrap Fusion MS interactome analysis.",
        "Built genome-wide CRISPR KO HEK-293T library; sorted IRF3-GFP high populations (n=3) for sequencing to identify degradation regulators.",
        "Generated STAT1 knockout A549/HEK-293T; validated via immunoblot and ISG RT-PCR after IFN. Cloned gRNAs for STAT2, IRF7, IRF9, IRF1 for single/double KOs.",
        "Preparing lentiviral constructs of IRF3-dependent, IFN-independent antiviral genes; reporter virus panel built and titrated for functional testing."
      ],
      reviewResults: "Review Comment May 2022: Recommended with commendation. Note: Validation in STAT1/STAT2 knockout models advised.",
      image: "/reviews/pmrf-review-2.webp"
    }
  ],
  projects: [
    {
      "title": "IRF3 Stability in Antiviral Response",
      "slug": "irf3-antiviral-response",
      "summary": "Dissecting IRF3 stability, interactions, and negative regulation to balance IFN-beta driven antiviral immunity.",
      "coverImage": "/projects/irf3.webp",
      "tech": ["IRF3", "Innate Immunity", "Proteostasis"],
      "repo": "",
      "liveUrl": "",
      "date": "2024-03-01",
      "content": "The project explores how IRF3 stability shapes antiviral innate immunity. We track degradation pathways via proteasomal and autophagy routes, map triggering factors, and measure IFN-beta promoter activity through dual-luciferase assays. By defining the negative regulation of IFN response, the work aims to maintain immune homeostasis while preventing exaggerated IFN-beta expression.",
      "highlights": [
        "Mapped IRF3 degradation via proteasomal and autophagy pathways; rescued IRF3 using pathway-specific inhibitors and quantified rescue by western blot, FACS, and fluorescence microscopy.",
        "Identified triggering factors for IRF3 degradation and evaluated downstream IFN-beta promoter activity using Renilla-Firefly dual-luciferase reporter assays.",
        "Dissected IRF3 ubiquitination/polyubiquitination; performed alanine scanning of lysine residues (IRF3-5D mutants) to pinpoint critical sites regulating stability.",
        "Tagged IRF3 with 2x C-terminal Strep for Streptactin purification and Orbitrap Fusion MS-based interactomics to uncover stability modulators.",
        "Designed genome-wide CRISPR KO screen in HEK-293T with IRF3-GFP reporter to identify host factors governing IRF3 degradation."
      ],
      "outcomes": [
        "Confirmed dual degradation routes for IRF3 and rescue upon proteasome/autophagy inhibition.",
        "Established IRF3 ubiquitin linkage types and key lysines controlling turnover.",
        "Generated candidate host-factor list from CRISPR screen to validate as IRF3 stabilizers or degraders.",
        "Provided a framework to tune IFN-beta signaling strength by modulating IRF3 stability."
      ]
    },
    {
      "title": "IFN-Independent Broad-Spectrum Antivirals",
      "slug": "ifn-independent-antivirals",
      "summary": "Characterizing rapid antiviral mechanisms that bypass classical interferon signaling.",
      "coverImage": "/projects/broad-spectrum.webp",
      "tech": ["CRISPR KO", "Transcriptomics", "Virus Reporter Panel"],
      "repo": "",
      "liveUrl": "",
      "date": "2024-06-01",
      "content": "We investigate direct IRF-driven induction of antiviral genes in IFN signaling-deficient systems. The study identifies antiviral factors, tests their activity against coronaviruses, influenza, flaviviruses, retroviruses, and DNA viruses, and maps IRF3-mediated transcription independent of IFN. Outcomes may reveal new drug and vaccine strategies.",
      "highlights": [
        "Demonstrated IRF-driven induction of antiviral ISGs in IFN-signaling deficient systems, enabling rapid, IFN-independent antiviral responses.",
        "Generated STAT1 knockout A549 and HEK-293T cells; validated via immunoblot and RT-PCR of ISGs (ISG54, ISG56) post IFN treatment.",
        "Cloned gRNAs for STAT2, IRF7, IRF9, IRF1 (single and double KOs) to dissect IRF3-mediated transcription absent canonical IFN signaling.",
        "Constructed lentiviral expression panel for IRF3-dependent, IFN-independent antiviral genes; built and titrated reporter virus panel (coronaviruses, influenza, flaviviruses, retroviruses, DNA viruses).",
        "Planned CRISPR screens and transcriptomic profiling to catalogue antiviral factors directly induced by IRF3."
      ],
      "outcomes": [
        "Defined a set of broad-spectrum antiviral candidates that bypass classical IFN signaling.",
        "Established knockout cell systems (STAT1-/-, forthcoming STAT2/IRF7/IRF9/IRF1) for mechanistic dissection.",
        "Delivered viral reporter assay pipeline to validate antiviral potency across diverse virus families.",
        "Opened avenues for interferon-independent therapeutics and vaccine adjuvant strategies."
      ]
    }
  ]
};
