import { Component, OnInit } from '@angular/core';

import { LessonService } from 'src/app/services/lesson.service';
import { LessonModel } from 'src/app/models/lesson';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  currentSubjectType = 'reál';
  currentClass = 1;
  lessons: LessonModel[];
  displayedColumns: string[] = ['targykod', 'targynev', 'nap', 'idopont', 'teremszam'];
  currentNumOfTypes: NumOfSubjectTypes = {real: 0, human: 0, sport: 0, egyeb: 0};

  constructor(private _service: LessonService) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(){
    this.getNumOfSubjectByTypeOfClass();
    this._service.getLessonsByClassAndType(this.currentClass, this.currentSubjectType).subscribe(result => {
      this.lessons = result;
    })
  }

  setCurrentClass(num: number){
    // this.clearFields();
    this.currentClass = num;
    this.getLessons();
  }

  setCurrnetSubjectType(type: string){
    this.currentSubjectType = type;
    this.getLessons();
  }

  getNumOfSubjectByTypeOfClass(){
    this._service.getNumOfSubjectByTypesOfClass(this.currentClass).subscribe(result => {
      this.currentNumOfTypes = result;
    });
  }
}

class NumOfSubjectTypes{
  real: number;
  human: number;
  sport: number; 
  egyeb: number;
}