import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { TodoComponent } from './home/components/todo/todo.component';
import { FirebaseComponent } from './home/components/firebase/firebase.component';

const routes: Routes = [
 {
   path:'',
   component: HomeComponent,
  children:[
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'todo',
      component: TodoComponent
    },
    {
      path: 'firebase',
      component: FirebaseComponent
    }
  ]
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
