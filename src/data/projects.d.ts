// src/data/projects.d.ts
import { Project } from '@/types/index';

declare module './projects.js' {
  export const projects: Project[];
  export default projects;
}