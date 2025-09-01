import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'education',
    loadComponent: () => import('./education/education.component').then(m => m.EducationComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'achievements',
    loadComponent: () => import('./achievements/achievements.component').then(m => m.AchievementsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: '/home' // Wildcard for 404 handling
  }
];