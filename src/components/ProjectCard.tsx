import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { ProjectProps } from '@/types/types';

const ProjectCard: React.FC<ProjectProps> = ({
  name,
  description,
  date,
  technologies,
  role,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{description}</p>
        <p className="mb-2">
          <strong>Role:</strong> {role}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
