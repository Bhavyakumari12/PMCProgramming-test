import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateAssignmentComponent } from './template-assignment/template-assignment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-assignment', component: TemplateAssignmentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
