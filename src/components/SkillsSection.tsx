'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ChevronDown, ChevronRight, ChevronLeft, Info } from 'lucide-react';

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

const SkillContent = React.memo(({ skill }: { skill: Skill }) => (
  <div className="space-y-2">
    <p>
      <span className="font-semibold">Proficiency:</span> {skill.proficiency}
    </p>
    <p>
      <span className="font-semibold">Years of Experience:</span>{' '}
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
));

SkillContent.displayName = 'SkillContent';

const SkillsSidebar = ({ title, skills }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsDialogOpen(true);
  };

  const handleBack = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="bg-background rounded-lg shadow">
      {/* Desktop View */}
      <div className="hidden md:block">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-4">
              {title}
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4 space-y-2">
              {skills.map((skill) => (
                <Button
                  key={skill.name}
                  variant="outline"
                  className="w-full justify-between p-2 h-auto"
                  onClick={() => handleSelectSkill(skill)}
                >
                  <span>{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{skill.proficiency}</Badge>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Years of Experience: {skill.yearsOfExperience}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedSkill?.name}</DialogTitle>
              <DialogDescription>Skill details</DialogDescription>
            </DialogHeader>
            {selectedSkill && <SkillContent skill={selectedSkill} />}
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-4">
              {title}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>
                Select a skill to view details
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 py-2">
              {selectedSkill ? (
                <>
                  <Button variant="ghost" className="mb-4" onClick={handleBack}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Skills
                  </Button>
                  <h3 className="font-bold text-lg mb-2">
                    {selectedSkill.name}
                  </h3>
                  <SkillContent skill={selectedSkill} />
                </>
              ) : (
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <Button
                      key={skill.name}
                      variant="outline"
                      className="w-full justify-between p-2 h-auto"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <span>{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{skill.proficiency}</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Years of Experience: {skill.yearsOfExperience}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
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
      </div>
    </div>
  );
};

export default SkillsSidebar;
