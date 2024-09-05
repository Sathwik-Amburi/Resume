"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface Skill {
  name: string;
  proficiency: string;
  projects: string[];
  certifications: string[];
  yearsOfExperience: number;
}

export interface SkillsSectionProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const SkillContent = () => (
    <div>
      {selectedSkill && (
        <>
          <p>Proficiency: {selectedSkill.proficiency}</p>
          <p>Years of Experience: {selectedSkill.yearsOfExperience}</p>
          <h3 className="font-semibold mt-2">Projects:</h3>
          <ul className="list-disc list-inside">
            {selectedSkill.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-2">Certifications:</h3>
          <ul className="list-disc list-inside">
            {selectedSkill.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

  return (
    <div className="bg-background rounded-lg shadow p-6 mb-6">
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) =>
          isDesktop ? (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <Badge variant="secondary" className="mr-2">
                    {index + 1}
                  </Badge>
                  {skill.name}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{skill.name}</DialogTitle>
                  <DialogDescription>
                    Click the skill to see more details.
                  </DialogDescription>
                </DialogHeader>
                <SkillContent />
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer key={index}>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <Badge variant="secondary" className="mr-2">
                    {index + 1}
                  </Badge>
                  {skill.name}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>{skill.name}</DrawerTitle>
                  <DrawerDescription>
                    Click the skill to see more details.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <SkillContent />
                </div>
                <DrawerFooter className="pt-2">
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
