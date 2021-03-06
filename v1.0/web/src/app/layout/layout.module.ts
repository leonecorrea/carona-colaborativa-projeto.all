import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
  MatHorizontalStepper
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FixedButtonMenuComponent } from './components/fixed-button-menu/fixed-button-menu.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { AuthService } from '../services/auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk',
  authDomain: 'pontuall-e350d.firebaseapp.com',
  databaseURL: 'https://pontuall-e350d.firebaseio.com',
  projectId: 'pontuall-e350d',
  storageBucket: '',
  messagingSenderId: '563062683709'
};

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatStepperModule,
    CdkTableModule,
    LayoutRoutingModule,
    ChartsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [NavbarComponent, FixedButtonMenuComponent],
  exports: [NavbarComponent, FixedButtonMenuComponent],
  providers: [ AuthService, AngularFireAuth ]
})
export class LayoutModule {}
