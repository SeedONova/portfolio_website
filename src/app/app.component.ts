import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Experience {
  title: string;
  logoUrl: string;
  company: string;
  period: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
