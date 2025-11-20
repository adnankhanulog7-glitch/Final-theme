import AboutSection from '../AboutSection';
import alexImage from '@assets/stock_images/professional_busines_75278f73.jpg';
import miaImage from '@assets/stock_images/professional_busines_e1aa2024.jpg';
import jordanImage from '@assets/stock_images/professional_busines_03de39e8.jpg';
import sofiaImage from '@assets/stock_images/professional_busines_94680ddb.jpg';

export default function AboutSectionExample() {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      bio: "10+ years growing YouTube channels from 0 to millions of subscribers.",
      image: alexImage
    },
    {
      name: "Mia Chen",
      role: "Head of Scripting",
      bio: "Expert storyteller crafting viral scripts for top creators worldwide.",
      image: miaImage
    },
    {
      name: "Jordan Hale",
      role: "Lead Editor",
      bio: "Award-winning video editor specializing in engaging YouTube content.",
      image: jordanImage
    },
    {
      name: "Sofia Patel",
      role: "Growth Strategist",
      bio: "Data-driven expert helping channels achieve exponential growth.",
      image: sofiaImage
    }
  ];

  return <AboutSection teamMembers={teamMembers} />;
}
