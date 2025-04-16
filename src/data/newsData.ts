
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: 'achievement' | 'publication' | 'submission' | 'career' | 'general';
  link?: string; // Added optional link field
}

// Sample news data
export const newsData: NewsItem[] = [
  {
    id: "news-99",
    title: "Selected for Indian Academy of Sciences - Summer Research Fellowship 2025",
    date: "2025-04-10",
    summary: "Got an offer letter from Indian Academy of Sciences for Summer Research Fellowship 2025 to work with Dr. C Pavan Kumar, IIIT Dharwad.",
    content: "I am thrilled to announce that I have been selected for the prestigious Summer Research Fellowship 2025 by the Indian Academy of Sciences. I will be working under the guidance of Dr. C Pavan Kumar at IIIT Dharwad. This opportunity will allow me to delve deeper into my research interests and contribute to the field of Computer Science. I am grateful for the support of my mentors and peers throughout this journey. Since I am a M.Sc student and actively looking PhD opportunities after my Masters hence I am looking forward to this opportunity to gain valuable research experience and insights. I am excited about the potential collaborations and learning experiences that lie ahead.",
    category: "achievement",
  },
  {
    id: "news-100",
    title: "Submitted a research paper in CICBA 2025, Jadavpur University, India",
    date: "2025-03-31",
    summary: "Next-Gen Secure UAV: Leveraging Hyperelliptic Curves and Particle Swarm Optimization.",
    content: "This study proposes a lightweight cryptographic framework for UAV communication, integrating Hyperelliptic Curve Cryptography (HECC) and Particle Swarm Optimization (PSO). Using genus-2 curves over a 256-bit prime field, it enables secure Diffie-Hellman key exchange with AES encryption and SHA3-256. PSO optimizes key length, AES size, and rotation intervals, adapting to network conditions. A dynamic key rotation manager enhances resilience against attacks like MITM and brute-force. Results show improved entropy and security, offering an efficient solution for UAV-Ground Control Station communication.",
    category: "submission"
  },
  {
    id: "news-101",
    title: "Qualified JRF & Assistant Professor in UGC NET DEC-2024",
    date: "2025-03-15",
    summary: "Qualified UGC NET DEC-2024 for JRF and Assistant Professor.",
    content: "Percentile - 99.8707644. \n I am pleased to announce that I have successfully qualified the UGC NET DEC-2024 examination for both Junior Research Fellowship (JRF) and Assistant Professor positions. This achievement reflects my dedication to academic excellence and research in the field of Computer Science. I acknowledge the support of my mentors and peers throughout this journey. I look forward to contributing to the academic community and pursuing further research opportunities. ",
    category: "achievement",
    link: "https://drive.google.com/file/d/1ClMqzNc7ybJfEdNGWo0Ca3mQrNV2ir2x/view?usp=sharing"
  },
  {
    id: "news-102",
    title: "Published My First Research Work as proceedings of Conference",
    date: "2025-01-15",
    summary: "Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
    content: "My Contribution to this work was in the Writing Part of the paper and making Presentation.\n     This work proposes a UAV tracking method using multi-sensor fusion and an Extended Kalman Filter (EKF). Combining RF, radar, audio, and optical data, the EKF improves tracking accuracy by 12.5% over optical sensors alone, reducing error to 0.07m. Real-time visualization and adaptive noise handling highlight its potential for surveillance, rescue, and air traffic applications. ",
    category: "publication",
    link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
  }

];