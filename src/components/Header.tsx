'use client';

import { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import ModeToggle from '@/components/Toggle';
import { HeaderProps } from '@/types/types';
import {
  Search,
  Briefcase,
  GraduationCap,
  Code,
  BookOpen,
  ChevronDown,
  Menu,
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { useId } from 'react';

interface ExtendedHeaderProps extends HeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const tabs = [
  { value: 'experience', icon: Briefcase, label: 'Experience' },
  { value: 'education', icon: GraduationCap, label: 'Education' },
  { value: 'projects', icon: Code, label: 'Projects' },
  { value: 'publications', icon: BookOpen, label: 'Publications' },
];

const FacebookLogo = memo(() => (
  <svg
    className="w-8 h-8 text-[#1877F2] dark:text-[#4599FF]"
    viewBox="0 0 36 36"
    fill="currentColor"
    role="img"
    aria-label="Facebook logo"
  >
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
    <path
      fill="#fff"
      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    />
  </svg>
));

FacebookLogo.displayName = 'FacebookLogo';

const TabContent = memo(
  ({
    activeTab,
    onTabChange,
  }: {
    activeTab: string;
    onTabChange: (value: string) => void;
  }) => (
    <Tabs
      value={activeTab}
      onValueChange={onTabChange}
      className="flex-1 max-w-md"
    >
      <TabsList className="flex justify-center bg-transparent space-x-1 sm:space-x-2">
        {tabs.map((tab) => (
          <TooltipProvider key={tab.value}>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value={tab.value}
                  className={`flex-1 relative group px-2 py-1.5 rounded-md transition-colors duration-200 ${
                    activeTab === tab.value
                      ? 'bg-[#E7F3FF] dark:bg-[#263951]'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <tab.icon
                    className={`w-5 h-5 mx-auto transition-colors duration-200 ${
                      activeTab === tab.value
                        ? 'text-[#1877F2] dark:text-[#4599FF]'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  />
                  {activeTab === tab.value && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1877F2] dark:bg-[#4599FF]"
                      layoutId="underline"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tab.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </TabsList>
    </Tabs>
  )
);

TabContent.displayName = 'TabContent';

export default function Header({
  name,
  avatar,
  activeTab,
  onTabChange,
}: ExtendedHeaderProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  }, []);

  const handleTabChange = useCallback(
    (value: string) => {
      onTabChange(value);
    },
    [onTabChange]
  );

  const searchId = useId();

  return (
    <header className="shadow-sm sticky top-0 z-10 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FacebookLogo />
          <div
            className={`relative ${
              isSearchVisible ? 'flex' : 'hidden'
            } sm:flex flex-1 max-w-[200px]`}
          >
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id={searchId}
              className="pl-8 pr-2 py-1 w-full text-sm placeholder-gray-500 border-none rounded-full focus:ring-2 focus:ring-[#1877F2] dark:focus:ring-[#4599FF]"
              placeholder={`Search Resume`}
            />
          </div>
        </div>
        {!isMobile && (
          <TabContent activeTab={activeTab} onTabChange={handleTabChange} />
        )}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {isMobile && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Toggle search</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {tabs.map((tab) => (
                    <DropdownMenuItem
                      key={tab.value}
                      onClick={() => handleTabChange(tab.value)}
                      className="flex items-center"
                    >
                      <tab.icon className="mr-2 h-4 w-4" />
                      {tab.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Avatar className="w-7 h-7">
                  <Image
                    src={avatar}
                    alt={name}
                    width={28}
                    height={28}
                    className="object-cover rounded-full"
                    priority
                  />
                </Avatar>
                <span className="font-semibold text-sm hidden sm:inline">
                  {name}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
