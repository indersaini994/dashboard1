import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
