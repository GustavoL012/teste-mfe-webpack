import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShibaDogComponent } from './shiba-dog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShibaDogComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ShibaDogComponent],
})
export class ShibaDogModule {}
