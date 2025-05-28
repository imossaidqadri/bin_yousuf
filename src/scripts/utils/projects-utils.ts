import { Project } from "@/types/index";

export const getProjectsByLocation = (projects: Project[], location: string) => {
  return projects.filter(project => project.location === location);
};

export const getProjectCounts = (projects: Project[]) => {
  return {
    emaar: projects.filter(p => p.location === 'Emaar').length,
    hmr: projects.filter(p => p.location === 'HMR').length,
  };
};
export const getProjectsGrouped = (projects: Project[]) => {
  return {
    emaar: projects.filter(p => p.location === 'Emaar'),
    hmr: projects.filter(p => p.location === 'HMR'),
  };
};