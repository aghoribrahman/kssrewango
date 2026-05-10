import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface District {
  id: string;
  nameKey: string;
  campKey: string;
  // Approximate centroid in MP outline coordinate space (viewBox 0 0 800 600)
  cx: number;
  cy: number;
}

/**
 * Stylised outline of Madhya Pradesh + the six focus districts.
 * Coordinates are deliberately schematic (not GIS-accurate) so the map reads
 * cleanly as an editorial illustration. Districts cluster in the eastern
 * "Shahdol division" region of the state.
 */
const MP_OUTLINE =
  "M120,260 C140,200 200,160 270,150 C340,140 400,150 460,130 C520,110 580,120 640,150 C690,175 720,210 720,250 C720,290 700,320 690,360 C680,400 660,440 600,460 C540,480 470,470 410,475 C350,480 290,490 240,470 C190,450 150,420 130,380 C110,340 100,300 120,260 Z";

const DISTRICTS: District[] = [
  { id: "sidhi", nameKey: "map.districts.sidhi", campKey: "map.camps.sidhi", cx: 595, cy: 205 },
  { id: "shahdol", nameKey: "map.districts.shahdol", campKey: "map.camps.shahdol", cx: 580, cy: 270 },
  { id: "umaria", nameKey: "map.districts.umaria", campKey: "map.camps.umaria", cx: 530, cy: 295 },
  { id: "anuppur", nameKey: "map.districts.anuppur", campKey: "map.camps.anuppur", cx: 620, cy: 320 },
  { id: "dindori", nameKey: "map.districts.dindori", campKey: "map.camps.dindori", cx: 555, cy: 355 },
  { id: "mandla", nameKey: "map.districts.mandla", campKey: "map.camps.mandla", cx: 490, cy: 380 },
];

const DistrictMap = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("anuppur");
  const active = DISTRICTS.find((d) => d.id === activeId) ?? DISTRICTS[0];

  return (
    <section className="bg-parchment py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
            {t("map.eyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
            {t("map.heading")}
          </h2>
          <p className="mt-5 text-foreground/65 text-base md:text-lg leading-relaxed">
            {t("map.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center">
          {/* Map */}
          <div className="relative rounded-2xl bg-parchment-deep/60 p-4 md:p-6 border border-border/60">
            <svg
              viewBox="0 0 800 600"
              className="w-full h-auto"
              role="img"
              aria-labelledby="mp-map-title"
            >
              <title id="mp-map-title">{t("map.heading")}</title>

              {/* MP outline */}
              <path
                d={MP_OUTLINE}
                fill="hsl(var(--parchment-deep))"
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Subtle eastern division shading where focus districts live */}
              <path
                d="M460,180 C520,170 600,180 680,210 C700,260 700,330 660,400 C600,440 520,440 470,420 C440,380 440,300 460,180 Z"
                fill="hsl(var(--secondary) / 0.08)"
                stroke="hsl(var(--secondary) / 0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* District markers */}
              {DISTRICTS.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <g
                    key={d.id}
                    onMouseEnter={() => setActiveId(d.id)}
                    onFocus={() => setActiveId(d.id)}
                    onClick={() => setActiveId(d.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${t(d.nameKey)} — ${t(d.campKey)}`}
                    className="cursor-pointer outline-none focus-visible:[&>circle]:stroke-amber-warm"
                  >
                    {/* halo */}
                    <circle
                      cx={d.cx}
                      cy={d.cy}
                      r={isActive ? 28 : 18}
                      fill="hsl(var(--primary) / 0.18)"
                      className="transition-all duration-300"
                    />
                    {/* dot */}
                    <circle
                      cx={d.cx}
                      cy={d.cy}
                      r={isActive ? 9 : 7}
                      fill="hsl(var(--primary))"
                      stroke="hsl(var(--parchment))"
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />
                    {/* label */}
                    <text
                      x={d.cx}
                      y={d.cy - (isActive ? 38 : 30)}
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                      fontSize={isActive ? 18 : 14}
                      fontFamily='"Hind", system-ui, sans-serif'
                      fontWeight={isActive ? 600 : 500}
                      fill="hsl(var(--foreground))"
                    >
                      {t(d.nameKey)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Details panel */}
          <div className="lg:pl-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
              {t("map.activeLabel")}
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-5">
              {t(active.nameKey)}
            </h3>
            <div className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {t("map.nextCamp")}
              </p>
              <p className="font-serif text-2xl text-foreground mb-2">
                {t(active.campKey)}
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {t("map.cta")}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {DISTRICTS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActiveId(d.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors border",
                    d.id === activeId
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground/70 border-border hover:border-primary/60 hover:text-foreground",
                  )}
                >
                  {t(d.nameKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistrictMap;
