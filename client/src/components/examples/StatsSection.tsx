import StatsSection from '../StatsSection';

export default function StatsSectionExample() {
  const stats = [
    {
      value: "50+",
      label: "International Channels Launched"
    },
    {
      value: "1,500+",
      label: "Videos Scripted, Edited & Optimized"
    }
  ];

  return <StatsSection stats={stats} />;
}
