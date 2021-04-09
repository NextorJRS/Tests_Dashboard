import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';

import { RotateDirective } from '../shared/rotate.directive';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from '../app.routes';

const MATERIAL = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    RotateDirective,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MATERIAL,
    APP_ROUTING
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class GeneralModule { }
