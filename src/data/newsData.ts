
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
    id: "news-1",
    title: "Submitted a research paper in CICBA 2025, Jadavpur University, Kolkata",
    date: "2023-11-15",
    summary: "Next-Gen Secure UAV: Leveraging Hyperelliptic Curves and Particle Swarm Optimization.",
    content: "This study proposes a lightweight cryptographic framework for UAV communication, integrating Hyperelliptic Curve Cryptography (HECC) and Particle Swarm Optimization (PSO). Using genus-2 curves over a 256-bit prime field, it enables secure Diffie-Hellman key exchange with AES encryption and SHA3-256. PSO optimizes key length, AES size, and rotation intervals, adapting to network conditions. A dynamic key rotation manager enhances resilience against attacks like MITM and brute-force. Results show improved entropy and security, offering an efficient solution for UAV–Ground Control Station communication.",
    category: "submission",
    link: "https://example.com/ieee-paper"
  }
];