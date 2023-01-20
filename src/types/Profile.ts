// Defines the Profile model in zod
import { z } from 'zod';
import { Education } from './Education';
import { Experience } from './Experience';
import { Link } from './Link';
import { Skill } from './Skill';

export const Profile = z.object({
  id: z.number().int().gt(0),
  name: z.string(),
  email: z.string(),
  bio: z.string().optional(),
  photoURL: z.string().optional(),
  tagline: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Experience: z.array(Experience).optional(),
  links: z.array(Link).optional(),
  Skills: z.array(Skill).optional(),
  educations: z.array(Education).optional(),
});

// Export the Profile model type
export type Profile = z.infer<typeof Profile>;
