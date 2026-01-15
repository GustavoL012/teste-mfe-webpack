import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShibaDogComponent } from './modules/shiba-dog/shiba-dog.component';

const routes: Routes = [
  { path: '', redirectTo: 'shiba-dog', pathMatch: 'full' },
  { path: 'shiba-dog', component: ShibaDogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
