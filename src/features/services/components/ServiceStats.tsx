import AnimateIn from "@/components/shared/AnimateIn";

interface Stat {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  stats: Stat[];
}

const ServiceStats = ({ stats }: ServiceStatsProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 mt-12">
      {stats.map((stat, index) => (
        <AnimateIn
          key={index}
          delay={index * 0.1}
          className="bg-white/40 backdrop-blur-sm border border-border/40 p-5 md:p-6 rounded-2xl text-center"
        >
          <div className="text-2xl md:text-4xl font-serif text-primary mb-1 md:mb-2">
            {stat.value}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/60">
            {stat.label}
          </div>
        </AnimateIn>
      ))}
    </div>
  );
};

export default ServiceStats;
