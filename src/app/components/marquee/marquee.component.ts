import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.css'
})
export class MarqueeComponent {
  list: string[] | undefined;

  constructor(private dataService: DataService) {
    this.list = this.dataService.getStacks();
  }
}
