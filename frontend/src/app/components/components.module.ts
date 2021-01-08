import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UiSelectComponent } from './ui/ui-select/ui-select.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { UiInputComponent } from './ui/ui-input/ui-input.component';
import { UiButtonComponent } from './ui/ui-button/ui-button.component';

const materialModules = [ 
  MatFormFieldModule,
  MatButtonModule, 
  MatRippleModule, 
  MatSelectModule, 
  MatInputModule, 
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatIconModule
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    materialModules,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UiSelectComponent,
    UiInputComponent,
    UiButtonComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UiInputComponent,
    UiSelectComponent,
    materialModules,
  ]
})
export class ComponentsModule { }
