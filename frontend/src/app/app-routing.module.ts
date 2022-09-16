import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes =  [
  { path: 'list', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', component: DetailsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
