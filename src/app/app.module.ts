import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavMenuComponent } from './pages/nav-menu/nav-menu.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './pages/students/students.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ClassesComponent,
    StudentsComponent,
    SubjectsComponent,
    LessonsComponent,
    TimetableComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'hu-HU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
