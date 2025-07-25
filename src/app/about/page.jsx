'use client';

import AboutSection from "./aboutSection";
import PageTitle from "./PageTitle";
import TeamSection from "./TeamSection";

export default function AboutPage() {
  return (
    <main>
        <PageTitle 
            title="About Us" 
            description="Learn more about our mission, vision, and the team behind our blog."
        />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
