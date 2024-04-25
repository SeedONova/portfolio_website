import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '../marquee/marquee.component';
import { DataService } from '../../service/data.service';
import { RouterLink } from '@angular/router';

interface Experience {
  title: string;
  logoUrl: string;
  company: string;
  period: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MarqueeComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('myExperience') myExperienceElement!: ElementRef;
  @ViewChild('tools') toolsElement!: ElementRef;
  @ViewChild('portfolio') portfolioElement!: ElementRef;
  experiences: Experience[] = [];

  constructor(private dataService: DataService) {
    this.experiences = this.dataService.getExperiences();
  }

  scrollToMyExperience(): void {
    this.myExperienceElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTools(): void{
    this.toolsElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToPortfolio(): void{
    this.portfolioElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
