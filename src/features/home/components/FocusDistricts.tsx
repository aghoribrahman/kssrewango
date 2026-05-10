const FocusDistricts = () => {
  const districts = ["Anuppur", "Dindori", "Mandla", "Shahdol", "Umaria", "Sidhi"];
  return (
    <section className="bg-parchment border-y border-border/60 overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex shrink-0">
            {districts.map((d) => (
              <span
                key={`${i}-${d}`}
                className="text-sm md:text-base tracking-[0.2em] text-foreground/55 uppercase mx-8 inline-flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {d}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusDistricts;
