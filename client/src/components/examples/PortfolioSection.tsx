import PortfolioSection from '../PortfolioSection';
import thumb1 from '@assets/stock_images/youtube_video_thumbn_3647b331.jpg';
import thumb2 from '@assets/stock_images/youtube_video_thumbn_8d0a950d.jpg';
import thumb3 from '@assets/stock_images/youtube_video_thumbn_1c4dd684.jpg';
import thumb4 from '@assets/stock_images/youtube_video_thumbn_58c41ddd.jpg';
import thumb5 from '@assets/stock_images/youtube_video_thumbn_5db1b0c5.jpg';
import thumb6 from '@assets/stock_images/youtube_video_thumbn_2e92faa1.jpg';
import creator1 from '@assets/stock_images/content_creator_film_b93b3cc9.jpg';
import creator2 from '@assets/stock_images/content_creator_film_9bd3b6df.jpg';
import creator3 from '@assets/stock_images/content_creator_film_021bd8a5.jpg';

export default function PortfolioSectionExample() {
  const items = [
    {
      title: "Sanjay's YouTube SEO Tutorial Series",
      image: thumb1,
      category: "Educational Content",
      videoUrl: "https://www.youtube.com/watch?v=yb6GYZlncCI"
    },
    {
      title: "Luru's Product Launch Video Campaign",
      image: thumb2,
      category: "Product Marketing",
      videoUrl: "https://www.youtube.com/watch?v=OQ9JFe89i9k"
    },
    {
      title: "Ishan's Marvel Fan Theory Analysis",
      image: thumb3,
      category: "Entertainment",
      videoUrl: "https://www.youtube.com/watch?v=aoFjaP_2jp4"
    },
    {
      title: "Ishan's Coaching Industry Exposé",
      image: thumb4,
      category: "Documentary",
      videoUrl: "https://www.youtube.com/watch?v=AMtKoMzsTz4"
    },
    {
      title: "Harnoor's Disney Adventure Vlog",
      image: thumb5,
      category: "Travel & Lifestyle",
      videoUrl: "https://www.youtube.com/watch?v=fP7awQVMDLo"
    },
    {
      title: "Vauld x Alfa Romeo Promo Video",
      image: thumb6,
      category: "Brand Partnership",
      videoUrl: "https://www.youtube.com/watch?v=AMF7sdw7jDA"
    },
    {
      title: "UAbility's Online Business Guide",
      image: creator1,
      category: "Business Education",
      videoUrl: "https://www.youtube.com/watch?v=JCBG1VkhvOA"
    },
    {
      title: "Kushal's Scam Exposé Investigation",
      image: creator2,
      category: "Investigative",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Kushal's SRK Documentary Series",
      image: creator3,
      category: "Celebrity Documentary",
      videoUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
    }
  ];

  return <PortfolioSection items={items} />;
}
