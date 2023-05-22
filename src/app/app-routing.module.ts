import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyScrumHomepageComponent } from './monthly-scrum-homepage/monthly-scrum-homepage.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path:'homepage', component:MonthlyScrumHomepageComponent, pathMatch:'full'},
  {path:'addComment', component:AddCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
