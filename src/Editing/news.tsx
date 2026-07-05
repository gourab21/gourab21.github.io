import { ReactNode } from "react";
export type NewsItem = {
  date: string;
  title: string;
  detail?: ReactNode;
  href?: string;
};

export type HighlightItem = {
  title: string;
  subtitle: string;
  badge?: string;
  date?: string;
  detail?: ReactNode;

  primaryButtonText?: string;
  primaryButtonHref?: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;
};

export const highlight: HighlightItem = {
  title: "Special Session · 2nd ICTIST 2026",
  subtitle: "Leading a special session on Adversarial Biometrics in the Advanced AI Era",
  badge: "Recent Highlight",
  date: "ICTIST 2026 · 29-30 June 2026",
  detail: (
    <>
      <p>
        <strong>Session:</strong> Adversarial Biometrics in the Advanced AI Era.
      </p>

      <p>
        <strong>Venue:</strong> ICTIST 2026, Tashkent, Uzbekistan.
      </p>

      <p>
        The session brings together researchers working on adversarial attacks and defenses in
        biometric systems, exploring the challenges and opportunities in ensuring the security and
        reliability of biometric authentication in the era of advanced AI technologies.
      </p>
    </>
  ),

  primaryButtonText: "Conference Site",
  primaryButtonHref: "https://aieys.com/ICTIST%202ND/Ictist.html",

  secondaryButtonText: "Call for Papers",
  secondaryButtonHref:
    "https://aieys.com/ICTIST%202ND/special_session/special_session_adversarial_biometrics.html",
};

export const news: NewsItem[] = [
  {
    date: "Jan 2026",
    title: "Research Internship & Master's Project",
    detail: (
      <>
        Selected <strong>Research Internship</strong> and <strong>Master's Project</strong> under
        the esteem guidance of{" "}
        <a
          href="https://scholar.google.com/citations?user=OIYIrmIAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Prof. Raghavendra Ramachandra
        </a>
        Professor, Department of Information Security and Communication Technology, Norwegian
        University of Science and Technology (NTNU), Norway and{" "}
        <a
          href="https://pavankumarphd.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Dr. Pavan Kumar C
        </a>
        , Assistant Professor, Department of CSE, IIIT Dharwad. The research was completed with the
        project{" "}
        <strong>
          "A Flip in the Script: Exploiting Generative Instability for Semantic Multilingual
          Document Authentication", which focused on developing novel techniques for semantic
          multilingual document authentication, contributing to advancements in secure document
          verification systems.
        </strong>
        .
      </>
    ),
  },
  {
    date: "Dec 2025",
    title: "Best Paper Award - Information & Security Track, 7th ICRCICN, India. ",
    detail: (
      <>
        Received the <strong>Best Paper Award</strong> in the Information & Security Track at the
        7th International Conference on Research in Computational Intelligence and Communication
        Networks (ICRCICN 2026). The award recognizes our innovative research on{" "}
        <strong>
          "Lightweight Cryptographic Authentication for UAV Networks: A Hyperelliptic Curve
          Approach"
        </strong>{" "}
        , highlighting the impact of our work in advancing secure and efficient communication
        protocols for UAV networks. The paper was co-authored with{" "}
        <a
          href="https://scholar.google.com/citations?user=IV97v-wAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Bodhisattwa Baidya
        </a>
        , Research Scholar,{" "}
        <a
          href="https://scholar.google.com/citations?user=jN14fwwAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Dr. Atanu Mondal
        </a>
        , Assistant Professor, Department of Computer Science & Electronics, Ramakrishna Mission
        Vidyamandira, Belur Math, India and{" "}
        <a
          href="https://scholar.google.com/citations?user=BWTirQoAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Dr. Sourav Banerjee
        </a>
        , Assistant Professor, Department of CSE, Alipurduar Government Engineering and Management
        College, India. The award highlights the significance of our research in enhancing the
        security and reliability of UAV communication systems.
      </>
    ),
  },

  {
    date: "Oct 2025",
    title: "Research Excellence Award & Young Researcher Award at ICETI 2025",
    detail: (
      <>
        Recieved the <strong>Research Excellence Award</strong> and{" "}
        <strong>Young Researcher Award</strong> at the 3rd International Conference on Emerging
        Trends & Innovation(ICETI 2025) for my outstanding contributions to the field of Machine
        Learning and Computer Vision. The awards recognize my innovative research on UAV Safe &
        Secure Communication, forgery detection, and Machine Learning, highlighting the impact of my
        work in advancing secure and reliable systems.
      </>
    ),
  },
  {
    date: "May 2025",
    title: "Summer Research Fellowship @ IIT Kharagpur",
    detail: (
      <>
        Selected for the Summer Research Fellowship 2025 at Department of CSE, IIT Kharagpur.
        Performed research on <strong>"Plant Genotype Prediction from Phenotype"</strong> under the
        guidance of{" "}
        <a
          href="https://scholar.google.co.in/citations?hl=en&user=5bXSZPYAAAAJ&view_op=list_works"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Prof. Pabitra Mitra
        </a>
        , Professor, Department of CSE, IIT Kharagpur.Utilised Deep Learning techniques to predict
        plant genotypes from phenotypic data, contributing to advancements in agricultural research
        and crop improvement strategies.
      </>
    ),
  },
  {
    date: "Apr 2025",
    title: "IASc-INSA-NASI Summer Research Fellowship 2025",
    detail: (
      <>
        Selected for the prestigious IASc-INSA-NASI Summer Research Fellowship 2025. This fellowship
        is awarded to outstanding students in India to conduct research in various scientific
        disciplines. Performed research on <strong>"ID Card Forgery Detection"</strong> under the
        guidance of{" "}
        <a
          href="https://pavankumarphd.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Dr. Pavan Kumar C
        </a>
        , Assistant Professor, Department of CSE, IIIT Dharwad. Utilised Computer Vision & Semantic
        Analysis techniques to detect forged ID Cards, contributing to advancements in security and
        authentication systems.
      </>
    ),
  },
];
