import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { HeaderComponent } from '../../modules/shared/components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
