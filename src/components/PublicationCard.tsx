import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import { PublicationProps } from '@/types/types';

const PublicationCard = ({
  title,
  publisher,
  date,
  description,
  link,
}: PublicationProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{publisher}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Published: {date}</p>
        <p className="mb-4">{description}</p>
        <Button variant="outline" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Publication <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
