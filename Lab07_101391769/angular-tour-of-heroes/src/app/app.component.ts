import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InputFormatDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
