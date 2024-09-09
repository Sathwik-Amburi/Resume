'use client';

import React, { useState } from 'react';
import ProfileInfo from '@/components/ProfileInfo';
import EducationCard from '@/components/EducationCard';
import Header from '@/components/Header';
import personalData from '@/data/personalData';
import SkillsSection from '@/components/SkillsSection';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import PublicationCard from '@/components/PublicationCard';

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header
        name={personalData.name}
        avatar={personalData.avatar}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4 order-1 md:order-2">
            <ProfileInfo
              name={personalData.name}
              location={personalData.location}
              phone={personalData.phone}
              email={personalData.email}
              avatar={personalData.avatar}
              github="https://github.com/Sathwik-Amburi"
              linkedin="https://www.linkedin.com/in/sathwik-amburi/"
            />
            <div className="md:hidden mt-6">
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
            {activeTab === 'experience' && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                {personalData.experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            )}
            {activeTab === 'education' && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                {personalData.education.map((edu, index) => (
                  <EducationCard key={index} {...edu} />
                ))}
              </div>
            )}
            {activeTab === 'projects' && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                {personalData.projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            )}
            {activeTab === 'publications' && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Publications</h2>
                {personalData.publications.map((publication, index) => (
                  <PublicationCard key={index} {...publication} />
                ))}
              </div>
            )}
          </div>

          <aside className="w-full md:w-1/4 space-y-6 order-2 md:order-1 hidden md:block">
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
          </aside>
        </div>
      </main>
    </div>
  );
}
