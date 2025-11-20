import TestimonialsSection from '../TestimonialsSection';

export default function TestimonialsSectionExample() {
  const testimonials = [
    {
      name: "Elena Vargas",
      platform: "TikTok Creator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      quote: "ShlGrow helped me transition from TikTok to YouTube seamlessly. My channel grew 500% in just 3 months!",
      rating: 5
    },
    {
      name: "Li Wei",
      platform: "Douyin Influencer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
      quote: "Their international expertise is unmatched. They understood my Asian audience and helped me reach Western markets.",
      rating: 5
    },
    {
      name: "Marcus Klein",
      platform: "Instagram Brand",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      quote: "The scripting and editing quality is top-tier. Our brand videos now consistently hit 1M+ views.",
      rating: 5
    },
    {
      name: "Anya Petrova",
      platform: "VK Content Creator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anya",
      quote: "From strategy to execution, ShlGrow delivered beyond expectations. Best investment for my channel!",
      rating: 5
    }
  ];

  return <TestimonialsSection testimonials={testimonials} />;
}
