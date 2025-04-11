
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: 'achievement' | 'publication' | 'career' | 'general';
  link?: string; // Added optional link field
}

// Sample news data
export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Published research paper in IEEE Transactions",
    date: "2023-11-15",
    summary: "My research on deep learning optimization techniques was published in IEEE Transactions on Neural Networks and Learning Systems.",
    content: "My research paper titled 'Optimized Deep Learning Architectures for Edge Computing Applications' was published in the prestigious IEEE Transactions on Neural Networks and Learning Systems. The paper explores novel optimization techniques for deploying complex neural networks on resource-constrained edge devices, achieving a 42% reduction in computational requirements while maintaining 97% accuracy compared to baseline models.",
    category: "publication",
    link: "https://example.com/ieee-paper"
  },
  {
    id: "news-2",
    title: "Promoted to Senior Software Engineer",
    date: "2023-09-01",
    summary: "Excited to announce my promotion to Senior Software Engineer at TechSolutions Inc.",
    content: "After two years of leading critical projects and mentoring junior developers, I'm thrilled to share that I've been promoted to Senior Software Engineer at TechSolutions Inc. In my new role, I'll be responsible for architecting enterprise-scale applications, establishing technical standards, and continuing to mentor our growing development team. Looking forward to this next chapter in my career journey!",
    category: "career"
  },
  {
    id: "news-3",
    title: "Open-source project reached 1000 stars on GitHub",
    date: "2023-07-22",
    summary: "My React component library ReactFastUI has reached 1000 stars on GitHub.",
    content: "I'm incredibly grateful to announce that ReactFastUI, the open-source component library I created to make React development faster and more accessible, has reached 1000 stars on GitHub! What started as a personal project to solve my own development challenges has grown into a community-supported library used by developers worldwide. Thank you to all the contributors who have helped make this project successful.",
    category: "achievement",
    link: "https://github.com/username/ReactFastUI"
  },
  {
    id: "news-4",
    title: "Guest speaker at Web Dev Conference 2023",
    date: "2023-06-10",
    summary: "Presented on 'Modern Frontend Architecture Patterns' at Web Dev Conference 2023 in San Francisco.",
    content: "I was honored to be a guest speaker at Web Dev Conference 2023 in San Francisco. My talk on 'Modern Frontend Architecture Patterns' covered micro-frontend approaches, state management strategies for large applications, and performance optimization techniques. The session was well-received with over 500 attendees and sparked engaging discussions on evolving frontend architectures. The slides and recorded talk are now available on the conference website.",
    category: "general",
    link: "https://webdevconf2023.com/talks/modern-frontend-architecture"
  },
  {
    id: "news-5",
    title: "Completed AWS Solutions Architect certification",
    date: "2023-04-05",
    summary: "Successfully obtained the AWS Certified Solutions Architect - Professional certification.",
    content: "After months of preparation, I'm pleased to share that I've earned the AWS Certified Solutions Architect - Professional certification. This rigorous certification validates my expertise in designing distributed systems on AWS, implementing security controls, and optimizing for cost and performance. This achievement will enable me to better architect cloud-native solutions and help organizations leverage AWS services effectively.",
    category: "achievement"
  }
];