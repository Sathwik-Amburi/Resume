import React from "react";
import ProfileInfo from "@/components/ProfileInfo";
import EducationCard from "@/components/EducationCard";
import Header from "@/components/Header";
import personalData from "@/data/personalData";
import SkillsSection from "@/components/SkillsSection";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";

export default function Component() {
  return (
    <div className="bg-background min-h-screen">
      <Header
        name={personalData.name}
        jobTitle={personalData.jobTitle}
        avatar={personalData.avatar}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProfileInfo
          name={personalData.name}
          location={personalData.location}
          phone={personalData.phone}
          email={personalData.email}
          avatar={personalData.avatar}
        />

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/3 space-y-6 mb-6 lg:mb-0">
            <SkillsSection
              title="Programming Languages"
              skills={personalData.programmingLanguages}
            />
            <SkillsSection
              title="Technologies"
              skills={personalData.technologies}
            />
            <SkillsSection
              title="Soft Skills"
              skills={personalData.softSkills}
            />
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {personalData.experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}

            <h2 className="text-2xl font-bold mb-4 mt-8">Education</h2>
            {personalData.education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}

            <h2 className="text-2xl font-bold mb-4 mt-8">Projects</h2>
            {personalData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}

            <h2 className="text-2xl font-bold mb-4 mt-8">Publications</h2>
            {personalData.publications.map((publication, index) => (
              <PublicationCard key={index} {...publication} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
