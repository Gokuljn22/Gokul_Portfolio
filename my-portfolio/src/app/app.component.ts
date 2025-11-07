import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    AchievementsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;
  activeSection = 'home';

  constructor() {
    window.addEventListener('scroll', () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const navbarHeight = window.innerWidth <= 600 ? 60 : window.innerWidth <= 900 ? 70 : 80;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - navbarHeight - 50) {
          this.activeSection = section;
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth <= 600 ? 60 : window.innerWidth <= 900 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
}