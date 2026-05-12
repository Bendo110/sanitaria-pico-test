"use client";

import dynamic from "next/dynamic";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ChiSiamoTimelineLoaderProps = {
  sectionLabel: string;
  timeline: TimelineItem[];
};

const ChiSiamoTimelineClient = dynamic(
  () => import("./ChiSiamoTimelineClient"),
  { ssr: false }
);

export default function ChiSiamoTimelineLoader(
  props: ChiSiamoTimelineLoaderProps
) {
  return <ChiSiamoTimelineClient {...props} />;
}
