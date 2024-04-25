import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  experiences = [
    {
      "title": "Co-Founder and Director",
      "logoUrl": "./assets/logos/magna.jpeg",
      "company": "CV Magna Innitiatives",
      "period": "Jan 2024 - Present"
    },
    {
      "title": "Director of Digital Products",
      "logoUrl": "./assets/logos/studentscatalyst.jpeg",
      "company": "StudentsCatalyst",
      "period": "Jun 2023 - Mar 2024"
    },
    {
      "title": "Full-stack Developer",
      "logoUrl": "./assets/logos/bisa_tumbuh.jpeg",
      "company": "PT Berhasil Tumbuh Bersama",
      "period": "Oct 2023 - Jan 2024"
    },
    {
      "title": "Software Engineer",
      "logoUrl": "./assets/logos/unilah.jpeg",
      "company": "Unilah. The Student App",
      "period": "May 2023 - Aug 2023"
    },
    {
      "title": "Chief Technology Officer",
      "logoUrl": "./assets/logos/career_network.jpeg",
      "company": "PT Career Network Asia",
      "period": "Nov 2022 - Jun 2023"
    },
    {
      "title": "Software Engineer Intern",
      "logoUrl": "./assets/logos/mulah.jpeg",
      "company": "Mulah Technologies Sdn Bhd",
      "period": "Aug 2022 - Nov 2022"
    },
  ]

  stackLogos = [
    './assets/stackLogos/angular_transparent.png',
    './assets/stackLogos/nextjs_transparent.png',
    './assets/stackLogos/postgresql.png',
    './assets/stackLogos/springboot_transparent.png',
    './assets/stackLogos/angular_transparent.png',
    './assets/stackLogos/nextjs_transparent.png',
    './assets/stackLogos/postgresql.png',
    './assets/stackLogos/springboot_transparent.png',
    './assets/stackLogos/angular_transparent.png',
    './assets/stackLogos/nextjs_transparent.png',
    './assets/stackLogos/postgresql.png',
    './assets/stackLogos/springboot_transparent.png',
    './assets/stackLogos/angular_transparent.png',
    './assets/stackLogos/nextjs_transparent.png',
    './assets/stackLogos/postgresql.png',
    './assets/stackLogos/springboot_transparent.png'
  ]

  getExperiences() {
    return this.experiences;
  }

  getStacks(): string[]{
    return this.stackLogos;
  }
}