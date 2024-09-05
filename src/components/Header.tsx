import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "@/components/Toggle";

import { HeaderProps } from "@/types/types";

import { Search, Menu, Linkedin, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header: React.FC<HeaderProps> = ({ name, jobTitle, avatar }) => (
  <header className="bg-background shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar className="w-10 h-10 bg-blue-500">
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="relative hidden sm:block">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input className="pl-8" placeholder={jobTitle} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span className="text-blue-500 font-semibold hidden sm:inline">
          {name}
        </span>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Github className="h-5 w-5" />
        </Button>
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium">
                Profile
              </a>
              <a href="#" className="text-lg font-medium">
                Settings
              </a>
              <a href="#" className="text-lg font-medium">
                Logout
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

export default Header;
