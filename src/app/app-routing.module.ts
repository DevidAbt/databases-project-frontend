import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { StudentsComponent } from './pages/students/students.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { StatsComponent } from './pages/stats/stats.component';


const routes: Routes = [
  { path: 'classes', component: ClassesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', redirectTo: 'classes', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
