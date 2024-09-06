"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{skill.name}</h3>
        <Badge>{skill.proficiency}</Badge>
      </div>
      <p>
        <span className="font-semibold">Years of Experience:</span>{" "}
        {skill.yearsOfExperience}
      </p>
      <div>
        <h4 className="font-semibold mb-2">Projects:</h4>
        <ul className="list-disc list-inside space-y-1">
          {skill.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Certifications:</h4>
        <ul className="list-disc list-inside space-y-1">
          {skill.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const DesktopView = () => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Scroll horizontally to view all skills. Click on a skill to view
          details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={skills[0].name} className="w-full">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-none p-1">
              {skills.map((skill) => (
                <TabsTrigger
                  key={skill.name}
                  value={skill.name}
                  className="rounded-sm px-3"
                  onClick={() => setSelectedSkill(skill)}
                >
                  {skill.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="mt-6">
            {skills.map((skill) => (
              <TabsContent key={skill.name} value={skill.name}>
                <Card>
                  <CardContent className="pt-6">
                    <SkillContent skill={skill} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );

  const MobileView = () => (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {title}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            {selectedSkill ? selectedSkill.name : title}
          </DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-full px-4">
          {selectedSkill ? (
            <div className="pb-6">
              <Button
                variant="ghost"
                className="mb-4 p-0 h-auto"
                onClick={() => setSelectedSkill(null)}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Skills
              </Button>
              <SkillContent skill={selectedSkill} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 pb-6">
              {skills.map((skill, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-2 px-3 justify-start"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="mt-1">
                      {skill.proficiency}
                    </Badge>
                  </div>
                </Button>
              ))}
            </div>
          )}
        </ScrollArea>
        <DrawerClose className="absolute top-2 right-2" />
      </DrawerContent>
    </Drawer>
  );

  return (
    <div className="bg-background rounded-lg shadow mb-6">
      {isDesktop ? <DesktopView /> : <MobileView />}
    </div>
  );
};

export default SkillsSection;
