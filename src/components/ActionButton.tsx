import React, { memo } from 'react';
import { Button } from '@/components/ui/button';

const ActionButton = memo(
  ({
    icon: Icon,
    label,
    onClick,
    isActive,
  }: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className={`flex-1 h-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ${
        isActive ? 'text-blue-500 dark:text-blue-400' : ''
      }`}
      onClick={onClick}
    >
      <Icon className="h-5 w-5 mr-2" />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  )
);

ActionButton.displayName = 'ActionButton';

export default ActionButton;
