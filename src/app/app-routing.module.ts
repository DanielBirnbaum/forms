import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './forms/simple/simple.component';


const routes: Routes = [
  {path:'simple',component: SimpleComponent} ,
  {path:'',component: SimpleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
