import type { Contact } from "./Contact";
import type { Education } from "./Education";
import type { ExperienceItem } from "./ExperienceItem";
import type { Learning } from "./Learning";
import type { Meta } from "./Meta";
import type { Stats } from "./Stats";


export interface Profile {
  meta: Meta;
  name: string;
  summary: string;
  role: string;
  contact: Contact;
  experience: ExperienceItem[];
  skills: string[];
  tools: string[];
  education: Education;
  stats: Stats[];
  learning: Learning[];
}