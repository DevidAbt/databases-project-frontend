import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { StudentsComponent } from './pages/students/students.component';


const routes: Routes = [
  { path: 'classes', component: ClassesComponent },
  { path: 'students', component: StudentsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
