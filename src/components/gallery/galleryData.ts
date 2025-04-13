
export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  src: string;
}

// Sample gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Photography",
    description: "Beautiful mountain landscape with a clear blue sky",
    src: "/lovable-uploads/gallery/riverclick.jpeg"
  },
  {
    id: "2",
    title: "10+2 School",
    description: "The Senior Secondary School Building of Ramakrishna Mission Vidyapith, Deoghar",
    src: "/lovable-uploads/gallery/plus2.jpeg"
  },
  {
    id: "3",
    title: "Winner Turing Show 2025",
    description: "Tranquil ocean scene with waves crashing on shore",
    src: "/lovable-uploads/gallery/turingshow2025.jpg"
  },
  {
    id: "4",
    title: "Winner Codeplay 2025",
    description: "Peaceful forest path surrounded by tall trees",
    src: "/lovable-uploads/gallery/codeplay2025.jpg"
  },
  {
    id: "5",
    title: "Ocean View",
    description: "Tranquil ocean scene with waves crashing on shore",
    src: "/lovable-uploads/gallery/thakurtithipuja2025.jpg"
  },
  {
    id: "6",
    title: "Forest Trail",
    description: "Peaceful forest path surrounded by tall trees",
    src: "/lovable-uploads/gallery/saraswati.jpg"
  }
];