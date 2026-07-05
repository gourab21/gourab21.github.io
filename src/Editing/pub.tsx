import baidya2024enhanced from "@/assets/baidya2024enhanced.png";
import baidya2026decentralized from "@/assets/baidya2026decentralized.png";
import baidya2025next from "@/assets/baidya2025next.png";
import das2025multi from "@/assets/das2025multi.png";
import baidya2025lightweight from "@/assets/baidya2025lightweight.jpg";
import pub1 from "@/assets/pub-1.jpg";
import baidya2026heefo from "@/assets/baidya2026heefo.png";
import das2026forgeries from "@/assets/das2026forgeries.png";
import das2026forgeries_p from "@/assets/das2026forgeries_p.png";

export type PubType = "Journal" | "Conference" | "Thesis" | "Book Chapter";

export type Publication = {
  title: string;
  authors: React.ReactNode;
  venue: string;
  type: PubType;
  link: string;
  bibtex: string;
  abstract: string;
  image: string;
  tag?: string;
  poster?: string;
  videoId?: string; // YouTube ID
};

export const publications: Record<number, Publication[]> = {
  2026: [
    {
      title:
        "From Forgeries to Foundation Models: A Systematic Survey of Identity Document Attack and Detection",
      authors: (
        <>
          <span className="font-bold underline underline-offset-4">Gourab Das</span> , Pavan Kumar
          C, Raghavendra Ramachandra
        </>
      ),
      venue: " arXiv preprint",
      type: "Journal",
      tag: "Spotlight",
      link: "https://arxiv.org/abs/2607.01442",
      image: das2026forgeries,
      poster: das2026forgeries_p,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@article{das2026forgeries,
  title        = {From Forgeries to Foundation Models: A Systematic Survey of Identity Document Attack and Detection},
  author       = {Das, Gourab and Kumar C, Pavan and Ramachandra, Raghavendra},
  journal      = {arXiv preprint arXiv:2607.01442},
  year         = {2026},
  eprint       = {2607.01442},
  archivePrefix= {arXiv},
  primaryClass = {cs.CR},
  url          = {https://arxiv.org/abs/2607.01442}
}`,
      abstract:
        "Identity document forgery has undergone a fundamental capability shift: generative AI tools now enable high-fidelity document synthesis and field-level manipulation with minimal technical expertise, while detection methods remain constrained by benchmarks that do not reflect this threat. The resulting attack surface spans physical presentation, digital injection, and fully generative synthesis, introducing distinct forensic failure modes that require a unified threat model and evaluation framework. This survey provides, to our knowledge, the first unified treatment of Presentation Attacks, Digital Injection Attacks, and GenAI-driven synthesis within a single identity verification threat model. We trace detection methodologies from rule-based heuristics through forensic localisation, injection-aware pipelines, foundation models, and few-shot frameworks. A systematic audit of public datasets from 2019–2025 exposes a persistent Reality Gap between benchmark conditions and operational deployment. We further analyse large multimodal models for identity document manipulation, identifying Script-Dependent Generative Instability (SDGI) as a recurring typographic failure mode in non-Latin script inpainting. Finally, zero-shot benchmarking on unseen synthesised ID cards shows that even the strongest publicly available models achieve APCER values above 25% under security-oriented operating conditions, highlighting substantial limits in cross-domain generalisation. We conclude by outlining future directions toward forensically grounded, privacy-preserving, and legally accountable identity verification systems.",
    },
    {
      title: "HEEFO: A lightweight cryptographic trinity for robust UAV communication security",
      authors: (
        <>
          Bodhisattwa Baidya, Atanu Mondal,{" "}
          <span className="font-bold underline underline-offset-4">Gourab Das</span>, Inam Ullah
          Khan, Jawad Ahmad, Syed Aziz Shah
        </>
      ),
      venue: " Vehicular Communications",
      type: "Journal",
      tag: "Impact Factor: 5.7",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2214209626000318",
      image: baidya2026heefo,
      poster: pub1,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@article{baidya2026heefo,
  title={HEEFO: A lightweight cryptographic trinity for robust UAV communication security},
  author={Baidya, Bodhisattwa and Mondal, Atanu and Das, Gourab and Khan, Inam Ullah and Ahmad, Jawad and Shah, Syed Aziz},
  journal={Vehicular Communications},
  pages={101029},
  year={2026},
  publisher={Elsevier}
}`,
      abstract:
        "Unmanned Aerial Vehicles (UAVs) communication systems face significant security issues due to stringent computational limitations and real-time operational demands. Conventional cryptography methods such as RSA and standard Elliptic Curve Cryptography (ECC) entail computing demands that are incompatible with resource-constrained UAV platforms. We introduce HEEFO, an innovative lightweight cryptographic system that seamlessly combines Hyperelliptic Curve Cryptography (HECC), Electric Eel Foraging Optimization (EEFO), and Blockchain technology to mitigate these limitations. Our Hybrid AES-HECC method produces a 15 ×  faster key generation as compared to standard ECC with the same level of 80-bit security. The EEFO algorithm optimizes cryptographic key lengths with 7 ×  and 6.5 ×  speedup over Genetic Algorithm (GA) and Particle Swarm Optimization (PSO), reducing memory consumption by 15%. Blockchain integration guarantees unalterable authentication records with the ability for dynamic key rotation. Thorough security validation by Automated Validation of Internet Security Protocols and Applications (AVISPA) formal verification and attack simulations demonstrates 100% resistance against man-in-the-middle, tampering, counterfeiting, and brute-force assaults. The performance study indicates enhanced efficiency, with energy consumption at 20.3 mJ and communication overhead at 1472 bits, reflecting a 13–55% improvement compared to current authentication techniques. Real-world validation of the UAV testbed during a 5-hour test demonstrated that the system achieved success rates between 94 and 100%, throughput of 17 to 23 messages per second, and optimal use of resources (CPU: 20–40%, RAM: 25–35%) which resulted in only a 5.5% loss of flight time. This research is intended to provide practical methods for using lightweight cryptography on resource-constrained UAV networks to enable secure communication in real-time without degrading operational performance.",
    },

    {
      title:
        "Decentralized SecureSky: a hybrid blockchain-IPFS framework for secure and scalable UAV traffic management",
      authors: (
        <>
          Bodhisattwa Baidya,{" "}
          <span className="font-bold underline underline-offset-4">Gourab Das</span>, Inam Ullah
          Khan, Atanu Mondal, Muhammad Mansoor Alam, Mazliham Mohd Su'ud, Keshav Kaushik
        </>
      ),
      venue: " PeerJ Computer Science",
      type: "Journal",
      tag: "Impact Factor: 2.9",
      link: "https://peerj.com/articles/cs-3599/",
      image: baidya2026decentralized,
      poster: pub1,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@article{baidya2026decentralized,
  title={Decentralized SecureSky: a hybrid blockchain-IPFS framework for secure and scalable UAV traffic management},
  author={Baidya, Bodhisattwa and Das, Gourab and Khan, Inam Ullah and Mondal, Atanu and Alam, Muhammad Mansoor and Kaushik, Keshav and others},
  journal={PeerJ Computer Science},
  volume={12},
  pages={e3599},
  year={2026},
  publisher={PeerJ Inc.}
}`,
      abstract:
        "The rapid expansion of unmanned aerial vehicles (UAVs) in urban airspaces necessitates innovative, safe, and scalable solutions for identification, tracking, and airspace management. Dispersed SecureSky introduces a novel hybrid blockchain-IPFS architecture for Remote Identification, featuring AES-256 encryption and SHA-256 hashing with collision resistance, where the birthday bound for collision discovery is roughly 2128 attempts. This architecture utilizes the InterPlanetary File System (IPFS) to ensure data security, integrity, and decentralization, effectively mitigating the vulnerabilities of centralized systems. The MATLAB simulation models an urban airspace of 1 km2, incorporating five UAVs with differing authorization statuses to evaluate real-world scenarios. The framework employs Haversine-based localization for precise positioning within a 1,000-m radius of the ground control station, dynamic no-fly zones updated every 30 s for compliance, and a real-time 2D visualization interface with color-coded status indicators to enhance operator oversight. SecureSky achieves exceptional efficiency, with a storage cost of 1,344 bits per telemetry record and an observed mean IPFS latency of 320 ms (SD 134 ms, 95% CI [293.4 – 346.6] ms, error margin ±26.6 ms) across 100 simulation trials under baseline conditions. Stress tests indicate a variance of up to ±50 ms at 50 UAVs under realistic network conditions, while its architecture supports linear scalability for high-density operations. It demonstrates robust resilience against cyber threats, including Man-in-the-Middle (MITM) attacks, database tampering, identity spoofing, and replay assaults. SecureSky creates a groundbreaking framework for urban air mobility, enabling revolutionary applications like drone delivery with exceptional security, scalability, and compliance with regulations, thereby shaping the future of urban airspace management.",
    },

    {
      title: "Next-Gen Secure UAV: Leveraging Hyperelliptic Curves and Particle Swarm Optimization",
      authors: (
        <>
          Bodhisattwa Baidya,{" "}
          <span className="font-bold underline underline-offset-4">Gourab Das</span>, Atanu Mondal
        </>
      ),
      venue: "CICBA 2025",
      type: "Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-032-17187-0_15",
      image: baidya2025next,
      poster: pub1,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@inproceedings{baidya2025next,
  title={Next-Gen Secure UAV: Leveraging Hyperelliptic Curves and Particle Swarm Optimization},
  author={Baidya, Bodhisattwa and Das, Gourab and Mondal, Atanu},
  booktitle={International Conference on Computational Intelligence in Communications and Business Analytics},
  pages={191--205},
  year={2025},
  organization={Springer}
}`,
      abstract:
        "This research introduces a resilient cryptographic architecture that integrates Hyperelliptic Curve Cryptography (HECC) with adaptive key management, enhanced through Particle Swarm Optimization (PSO), to safeguard Unmanned Aerial Vehicle (UAV) communications. The system utilizes the Jacobian group of a genus-2 hyperelliptic curve over a finite field Fₚ (where p ≡ 5 (mod 8), a 256-bit prime) to perform a secure Diffie–Hellman key exchange, generating a shared secret via SHA3-256, in conjunction with AES encryption for effective and robust message safeguarding. PSO optimizes parameters like private key length, AES key length up to 32 bytes, and key rotation intervals, balancing key generation duration with entropy maximization. The proposed framework adaptively modifies AES key lengths according to variable UAV network conditions and changing security requirements, while an advanced key rotation manager for AES reduces vulnerabilities by regularly renewing keys based on a thorough assessment of attack vectors, such as Man-in-the-Middle, Physical Capture, Interception, Key Reuse, and Brute-Force. This versatility guarantees customized security for resource-limited UAV systems, facilitating safe bidirectional communication between Ground Control Stations (GCS) and UAVs in critical conditions. Experimental findings demonstrate substantial enhancements in efficiency and security, characterized by improved entropy and robust resistance to cryptographic assaults, rendering this framework a versatile solution for modern UAV communication security issues.",
    },
  ],

  2025: [
    {
      title:
        "Lightweight Cryptographic Authentication for UAV Networks: A Hyperelliptic Curve Approach",
      authors: (
        <>
          Bodhisattwa Baidya, Atanu Mondal, Sourav Banerjee,{" "}
          <span className="font-bold underline underline-offset-4">Gourab Das</span>
        </>
      ),
      venue: "7th ICRCICN 2025",
      type: "Conference",
      tag: "Best Paper Award",
      link: "https://ieeexplore.ieee.org/abstract/document/11364836",
      image: baidya2025lightweight,
      poster: pub1,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@inproceedings{baidya2025lightweight,
  title={Lightweight Cryptographic Authentication for UAV Networks: A Hyperelliptic Curve Approach},
  author={Baidya, Bodhisattwa and Mondal, Atanu and Banerjee, Sourav and Das, Gourab},
  booktitle={2025 Seventh International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN)},
  pages={649--654},
  year={2025},
  organization={IEEE}
}`,
      abstract:
        "Unmanned aerial vehicle (UAV) networks heavily rely upon very lightweight and highly efficient authentication mechanism to provide safe communication in resource-limited environments. In this paper, we present a high-performance authentication mechanism utilizing hyperelliptic curve cryptography (HECC), optimized by grey wolf optimization (GWO). Demonstration shows HECC method generates keys 1.12 times as quickly as ECC and remarkable 1649 times speedup relative to RSA for medium-security level, while also being able to perform a complete four-way handshake authentication in 67 bytes. Statistical analyses confirm all measured performance advantages were statistically significant (p<0.05) with large effect sizes. GWObased method achieves 1.92% percent performance increase and has 100% security against replay attacks, man-in-the-middle attacks, and impersonation attacks. The scalability evaluation showed the method to be effective with varying numbers of UAV swarms, producing a maximum of 12.92 UAVs per second of peak throughput and demonstrating its feasibility for real-time deployment into UAV networks.",
    },

    {
      title: "Multi-Level Stacking Framework for Robust Cardiovascular Disease Prediction",
      authors: (
        <>
          <span className="font-bold underline underline-offset-4">Gourab Das</span>, Inam Ullah
          Khan, Bodhisattwa Baidya, Rajarshi Saha, Satish Anamalamudi, Jawad Ahmad, Syed Aziz Shah
        </>
      ),
      venue: "23rd OCIT 2025",
      type: "Conference",
      link: "https://ieeexplore.ieee.org/abstract/document/11399863",
      image: das2025multi,
      poster: pub1,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@inproceedings{das2025multi,
  title={Multi-Level Stacking Framework for Robust Cardiovascular Disease Prediction},
  author={Das, Gourab and Khan, Inam Ullah and Baidya, Bodhisattwa and Saha, Rajarshi and Anamalamudi, Satish and Ahmad, Jawad and Shah, Syed Aziz},
  booktitle={2025 OITS International Conference on Information Technology (OCIT)},
  pages={362--367},
  year={2025},
  organization={IEEE}
}`,
      abstract:
        "Cardiovascular diseases (CVDs) represent the leading cause of worldwide death, requiring precise predictive models for timely intervention. This paper introduces an innovative dualstage stacked ensemble framework that tackles the scalability and reliability constraints of conventional diagnostic methods. The system incorporates four hyperparameter-optimized base learners (Decision Tree, Random Forest, XGBoost, and Logistic Regression) into four unique stacking configurations including diverse meta-learner architectures. Final predictions are produced by soft voting ensemble aggregation to enhance accuracy and reduce clinically significant false negatives. The performance assessment on two heterogeneous widely used datasets exhibits enhanced prediction efficacy. The framework attains 96.22% accuracy with a 3.51% false negative rate on the first dataset and 99.00% accuracy with a 0.893% false negative rate on the second, significantly surpassing current techniques. These findings confirm the effectiveness of multi-level ensemble integration together with thorough hyperparameter adjustment in generating strong, generalizable predictions appropriate for clinical application. The suggested architecture tackles essential healthcare analytics issues while ensuring computational efficiency for practical use.",
    },
  ],

  2024: [
    {
      title: "Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering.",
      authors: (
        <>
          Bodhisattwa Baidya, Atanu Mondal, Sarbajit Manna,{" "}
          <span className="font-bold underline underline-offset-4">Gourab Das</span>, Anirban
          Santra, Arkaprava Chakraborty
        </>
      ),
      venue: "Sixth Doctoral Symposium on Intelligence Enabled Research (DoSIER 2024)",
      type: "Conference",
      link: "https://ceur-ws.org/Vol-3900/Paper19.pdf",
      image: baidya2024enhanced,
      poster: baidya2024enhanced,
      videoId: "dQw4w9WgXcQ",
      bibtex: `@inproceedings{baidya2024enhanced,
  title={Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering.},
  author={Baidya, Bodhisattwa and Mondal, Atanu and Manna, Sarbajit and Das, Gourab and Santra, Anirban and Chakraborty, Arkaprava}
}`,
      abstract:
        "This research introduces a sophisticated method for UAV tracking utilizing multi-sensor fusion and Extended Kalman Filter (EKF) techniques. We model a sophisticated 3D UAV trajectory alongside diverse sensor information, encompassing RF signal strength, radar range and velocity, audio signals, and optical location data. The EKF technique is employed to estimate the drone’s position and velocity, exhibiting enhanced tracking precision relative to individual sensor observations. The simulation integrates variable noise levels and adaptive estimation of measurement noise covariance to improve the resilience of the EKF. Real-time visualization of sensor data and EKF estimates facilitates instant evaluation of the algorithm’s efficacy. The results indicate that the EKF efficiently eliminates sensor noise, yielding a more refined and precise trajectory estimation. The analysis of sensor data indicates the average signal strengths and standard deviations for each sensor category. The EKF exhibits a 12.5% enhancement in tracking accuracy relative to unprocessed optical sensor data, with mean tracking errors of 0.07 m for the EKF compared to 0.08 m for the optical sensor independently. This study emphasizes the efficacy of multi-sensor fusion and EKF implementation in improving drone tracking capabilities across diverse applications, such as surveillance, search and rescue, and air traffic management.",
    },
  ],
};