import { Component, OnInit } from '@angular/core';

import { LessonService } from 'src/app/services/lesson.service';
import { LessonModel } from 'src/app/models/lesson';
import { NumOfSubjectTypes } from 'src/app/models/NumOfSubjectTypes';
import { Button } from 'src/app/enums/button';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  currentSubjectType = 'reál';
  currentClass = 1;
  emptyLesson: LessonModel = {
    targykod: null,
    nap: null,
    idopont: null,
    teremszam: null,
    targynev: null,
    hanyadikos: null,
    tipus: null
  };
  currentLesson: LessonModel = this.emptyLesson;
  uniqSubjectNames: String[];
  lessons: LessonModel[];
  displayedColumns: string[] = ['targykod', 'targynev', 'nap', 'idopont', 'teremszam'];
  currentNumOfTypes: NumOfSubjectTypes = {real: 0, human: 0, sport: 0, egyeb: 0};
  button: Button;
  weekDays = ['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek'];
  hours = [8,9,10,11,12,13,14];

  constructor(private _service: LessonService) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(){
    this.getNumOfSubjectByTypeOfClass();
    this._service.getLessonsByClassAndType(this.currentClass, this.currentSubjectType).subscribe(result => {
      this.lessons = result;
      var subjectNames = this.lessons.map((item:LessonModel)=>(item.targynev));
      this.uniqSubjectNames = subjectNames.filter(function(value, index){ return subjectNames.indexOf(value) == index });
    })
  }

  setCurrentClass(num: number){
    this.clearFields();
    this.currentClass = num;
    this.getLessons();
  }

  setCurrnetSubjectType(type: string){
    this.clearFields();
    this.currentSubjectType = type;
    this.getLessons();
  }

  getNumOfSubjectByTypeOfClass(){
    this._service.getNumOfSubjectByTypesOfClass(this.currentClass).subscribe(result => {
      this.currentNumOfTypes = result;
    });
  }

  onLessonClick(lesson: LessonModel){
    this.currentLesson = lesson;
  }

  clearFields(){
    this.currentLesson = this.emptyLesson;
  }

  onButtonClick(type: string){
    switch (type) {
      case "ADD":
        this.button = Button.ADD;
        break;
      case "UPDATE":
        this.button = Button.UPDATE;
        break;
      case "REMOVE":
        this.button = Button.REMOVE;
        break;
    }
  }

  submitLessonForm(){

  }
}