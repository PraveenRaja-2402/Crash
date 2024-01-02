import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourceComponent } from './all-cource/all-cource.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'all-cource',component:AllCourceComponent},
  {path:'pages',component:PagesComponent},
  {path:'blog',component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
