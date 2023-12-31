import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,ActivatedRoute,Router } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    SignupComponent,
    HomeComponent,
    RouterModule,
    SearchbarComponent,
    MatToolbarModule,
    ToolbarComponent
  ],
})
export class AppComponent implements OnInit{
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private route : ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    //console.log(this.router.url);
  }
}