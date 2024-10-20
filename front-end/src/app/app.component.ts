import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front-end';
  message?: string;


  ngOnInit(): void {
  }
}
