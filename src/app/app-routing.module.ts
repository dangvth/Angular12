import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDataComponent } from './post-data/post-data.component';
import { PutDataComponent } from './put-data/put-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'getdata', component: GetDataComponent },
  { path: 'postdata', component: PostDataComponent },
  { path: 'putdata', component: PutDataComponent },
  { path: 'deletedata', component: DeleteDataComponent },
  { path: 'templateform', component: TemplateDrivenFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
