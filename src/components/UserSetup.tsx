'use client';

import { useState, useLayoutEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useUserStore } from '@/hooks/userStore';

export function UserSetup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isMobile, setIsMobile] = useState(true);
  const setUser = useUserStore((state) => state.setUser);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: Date.now().toString(),
      name,
      age: parseInt(age),
      avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${name}`,
    });
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Set Up Profile
      </Button>
    </form>
  );

  if (isMobile) {
    return (
      <Drawer open={true}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Set Up Your Profile</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-2">{formContent}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Up Your Profile</DialogTitle>
        </DialogHeader>
        <div className="p-4">{formContent}</div>
      </DialogContent>
    </Dialog>
  );
}
