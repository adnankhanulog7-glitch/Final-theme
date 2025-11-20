import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyYouTubeSection from "@/components/WhyYouTubeSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import heroImage from '@assets/stock_images/professional_video_p_d8c7b22a.jpg';
import alexImage from '@assets/stock_images/professional_busines_75278f73.jpg';
import miaImage from '@assets/stock_images/professional_busines_e1aa2024.jpg';
import jordanImage from '@assets/stock_images/professional_busines_03de39e8.jpg';
import sofiaImage from '@assets/stock_images/professional_busines_94680ddb.jpg';
import thumb1 from '@assets/stock_images/youtube_video_thumbn_3647b331.jpg';
import thumb2 from '@assets/stock_images/youtube_video_thumbn_8d0a950d.jpg';
import thumb3 from '@assets/stock_images/youtube_video_thumbn_1c4dd684.jpg';
import thumb4 from '@assets/stock_images/youtube_video_thumbn_58c41ddd.jpg';
import thumb5 from '@assets/stock_images/youtube_video_thumbn_5db1b0c5.jpg';
import thumb6 from '@assets/stock_images/youtube_video_thumbn_2e92faa1.jpg';
import creator1 from '@assets/stock_images/content_creator_film_b93b3cc9.jpg';
import creator2 from '@assets/stock_images/content_creator_film_9bd3b6df.jpg';
import creator3 from '@assets/stock_images/content_creator_film_021bd8a5.jpg';
import asuraRecapsImage from '@assets/channels4_profile_1763199408331.jpg';
import luffyRecapsImage from '@assets/channels4_profile (1)_1763199567501.jpg';
import shonenSpiritImage from '@assets/channels4_profile (2)_1763199882649.jpg';
import stealthyWiseImage from '@assets/channels4_profile (3)_1763199981318.jpg';
import aniRollImage from '@assets/channels4_profile (4)_1763204315424.jpg';
import talkieAIImage from '@assets/channels4_profile (5)_1763204792677.jpg';

export default function Home() {
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

  const stats = [
    {
      value: "50+",
      label: "Happy Clients",
      targetNumber: 50
    },
    {
      value: "1500+",
      label: "Videos Scripted, Edited & Published",
      targetNumber: 1500
    }
  ];

  const portfolioItems = [
    {
      title: "If Mitsuri Love Tanjiro 😍| Demon Slayer...",
      image: "https://img.youtube.com/vi/yb6GYZlncCI/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=yb6GYZlncCI"
    },
    {
      title: "If Yoriichi Meets Muzan Again 💀",
      image: "https://img.youtube.com/vi/OQ9JFe89i9k/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/shorts/OQ9JFe89i9k"
    },
    {
      title: "Manhwa Recap",
      image: "https://img.youtube.com/vi/aoFjaP_2jp4/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=aoFjaP_2jp4"
    },
    {
      title: "Anime Recap",
      image: "https://img.youtube.com/vi/AMtKoMzsTz4/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=AMtKoMzsTz4"
    },
    {
      title: "20 SECRETS Kpop Demon Hunters",
      image: "https://img.youtube.com/vi/fP7awQVMDLo/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=fP7awQVMDLo"
    },
    {
      title: "These Bluey Episodes Will Make You Cry",
      image: "https://img.youtube.com/vi/AMF7sdw7jDA/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=AMF7sdw7jDA"
    },
    {
      title: "How To Get A Physique Like Baki Hanma",
      image: "https://img.youtube.com/vi/JCBG1VkhvOA/hqdefault.jpg",
      category: "",
      videoUrl: "https://www.youtube.com/watch?v=JCBG1VkhvOA"
    }
  ];

  const testimonials = [
    {
      name: "Asura Recaps",
      platform: "YouTube Creator",
      image: asuraRecapsImage,
      quote: "Shlgrow provides valuable support in research, scripting, and video production, consistently achieving over 100K views.",
      rating: 5
    },
    {
      name: "Luffy Recaps",
      platform: "YouTube Creator",
      image: luffyRecapsImage,
      quote: "Shlgrow delivers exceptional video editing with seamless flow and powerful storytelling.",
      rating: 5
    },
    {
      name: "Talkie AI",
      platform: "AI Chatting Brand",
      image: talkieAIImage,
      quote: "Thanks to Shlgrow and their creative content ideas, we were able to increase our app downloads and gain recognition among fans.",
      rating: 5
    },
    {
      name: "Stealthy Wise",
      platform: "YouTube Creator",
      image: stealthyWiseImage,
      quote: "With the help of Shlgrow's video production services, we finally gained attention and views from Western fans.",
      rating: 5
    },
    {
      name: "AniRoll",
      platform: "YouTube Creator",
      image: aniRollImage,
      quote: "Shlgrow provides great support in video production, with an editing team that truly stands out.",
      rating: 5
    },
    {
      name: "Shonen Spirit",
      platform: "YouTube Creator",
      image: shonenSpiritImage,
      quote: "Shlgrow did a great job bringing my motivational and inspiring anime content to life.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection backgroundImage={heroImage} />
      <ServicesSection />
      <StatsSection stats={stats} />
      <PortfolioSection items={portfolioItems} />
      <WhyYouTubeSection />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
}
