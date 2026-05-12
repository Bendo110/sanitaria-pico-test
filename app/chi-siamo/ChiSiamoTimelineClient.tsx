"use client";

import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ChiSiamoTimelineClientProps = {
  sectionLabel: string;
  timeline: TimelineItem[];
};

export default function ChiSiamoTimelineClient({
  sectionLabel,
  timeline,
}: ChiSiamoTimelineClientProps) {
  return (
    <main className="overflow-x-hidden bg-white px-6 py-6 md:py-8 text-brand-primary">
      <section className="mx-auto max-w-[88rem] overflow-x-hidden">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-secondary">
            {sectionLabel}
          </p>
        </div>

        <div className="mb-10">
          <h1 className="text-5xl font-bold md:text-6xl">La nostra storia</h1>
        </div>

        <VerticalTimeline
          animate={false}
          layout="2-columns"
          lineColor="var(--color-primary)"
          className="about-timeline"
        >
          {timeline.map((item) => (
            <VerticalTimelineElement
              key={item.year}
              position="left"
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: 0,
              }}
              contentArrowStyle={{ display: "none" }}
              iconStyle={{
                background: "var(--color-white)",
                boxShadow: "none",
                border: "4px solid var(--color-primary)",
                width: "28px",
                height: "28px",
                marginLeft: "-14px",
              }}
              icon={<span />}
            >
              <div className="about-timeline-content">
                <div className="about-timeline-title-row">
                      <h2 className="text-2xl font-semibold text-brand-primary md:text-3xl">
                        {item.title}
                      </h2>
                  <span className="about-timeline-date-left">{item.year}</span>
                </div>

                <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
                  <div>
                    <p className="text-[1.03rem] leading-8 text-brand-soft">
                      {item.description}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-brand lg:self-start">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={1000}
                      height={560}
                      className="h-[210px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </main>
  );
}
