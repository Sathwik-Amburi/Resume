"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { ChevronLeft, ChevronDown } from "lucide-react";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const SkillContent = ({ skill }: { skill: Skill }) => (
    <div className="space-y-2">
      <p>
        <span className="font-semibold">Proficiency:</span> {skill.proficiency}
      </p>
      <p>
        <span className="font-semibold">Years of Experience:</span>{" "}
        {skill.yearsOfExperience}
      </p>
      <div>
        <h3 className="font-semibold">Projects:</h3>
        <ul className="list-disc list-inside">
          {skill.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Certifications:</h3>
        <ul className="list-disc list-inside">
          {skill.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const DesktopView = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {title}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {skills.map((skill, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => setSelectedSkill(skill)}
          >
            <Badge variant="secondary" className="mr-2">
              {index + 1}
            </Badge>
            {skill.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileView = () => (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {title}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>Select a skill to view details</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          {selectedSkill ? (
            <>
              <Button
                variant="ghost"
                className="mb-4"
                onClick={() => setSelectedSkill(null)}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Skills
              </Button>
              <h3 className="font-bold text-lg mb-2">{selectedSkill.name}</h3>
              <SkillContent skill={selectedSkill} />
            </>
          ) : (
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <Badge variant="secondary" className="mr-2">
                    {index + 1}
                  </Badge>
                  {skill.name}
                </Button>
              ))}
            </div>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <div className="bg-background rounded-lg shadow p-6 mb-6">
      {isDesktop ? <DesktopView /> : <MobileView />}
      {isDesktop && (
        <div className="mt-4">
          {selectedSkill ? (
            <>
              <h3 className="font-bold text-lg mb-2">{selectedSkill.name}</h3>
              <SkillContent skill={selectedSkill} />
            </>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>Select a skill to view its details.</p>
              <p>
                You can see information about proficiency, years of experience,
                projects, and certifications.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
