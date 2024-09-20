import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Experience {
  id: string;
  likes: number;
  comments: number;
}

interface ExperienceState {
  experiences: Record<string, Experience>;
  incrementLikes: (id: string) => void;
  decrementLikes: (id: string) => void;
  setCommentCount: (id: string, count: number) => void;
}

export const useExperienceStore = create<ExperienceState>()(
  persist(
    (set) => ({
      experiences: {},
      incrementLikes: (id) =>
        set((state) => ({
          experiences: {
            ...state.experiences,
            [id]: {
              ...state.experiences[id],
              likes: (state.experiences[id]?.likes || 0) + 1,
            },
          },
        })),
      decrementLikes: (id) =>
        set((state) => ({
          experiences: {
            ...state.experiences,
            [id]: {
              ...state.experiences[id],
              likes: Math.max((state.experiences[id]?.likes || 0) - 1, 0),
            },
          },
        })),
      setCommentCount: (id, count) =>
        set((state) => ({
          experiences: {
            ...state.experiences,
            [id]: {
              ...state.experiences[id],
              comments: count,
            },
          },
        })),
    }),
    {
      name: 'experience-storage',
    }
  )
);
