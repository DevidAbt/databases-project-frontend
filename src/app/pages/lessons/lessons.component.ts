import { Component, OnInit, ViewChild } from '@angular/core';

import { LessonService } from 'src/app/services/lesson.service';
import { LessonModel } from 'src/app/models/lesson';
import { NumOfSubjectTypes } from 'src/app/models/NumOfSubjectTypes';
import { Button } from 'src/app/enums/button';
import { LessonRequest } from 'src/app/requests/LessonRequest';
import { NgForm } from '@angular/forms';
import { Week } from 'src/app/enums/week';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  @ViewChild('f') lessonForm: NgForm;
  currentSubjectType = 'reál';
  currentClass = 1;
  emptyLesson: LessonModel = {
    targykod: null,
    nap: null,
    A_het: null,
    idopont: null,
    teremszam: null,
    targynev: null,
    hanyadikos: null,
    tipus: null
  };
  currentLesson: LessonModel = this.emptyLesson;
  lessons: LessonModel[];
  displayedColumns: string[] = ['targykod', 'targynev', 'A_het', 'nap', 'idopont', 'teremszam'];
  currentNumOfTypes: NumOfSubjectTypes = {real: 0, human: 0, sport: 0, egyeb: 0};
  button: Button;
  weekDays = ['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek'];
  hours = [8,9,10,11,12,13,14];
  roomNumbers: number[];
  subjectCodes: number[];

  constructor(private _service: LessonService) { }

  ngOnInit(): void {
    this.getLessons();
    this.getRoomNumbers();
    this.getSubjectCodes();
  }

  getLessons(){
    this.getNumOfSubjectByTypeOfClass();
    this._service.getLessonsByClassAndType(this.currentClass, this.currentSubjectType).subscribe(result => {
      this.lessons = result;
      var subjectNames = this.lessons.map((item:LessonModel)=>(item.targynev));
    })
  }

  getRoomNumbers(){
    this._service.getRoomNumbers().subscribe(result => {
      this.roomNumbers = result.map(item => item.szam);
    })
  }

  getSubjectCodes(){
    this._service.getSubjectCodesByClass(this.currentClass).subscribe(result => {
      this.subjectCodes = result;
    })
  }

  setCurrentClass(num: number){
    this.clearFields();
    this.currentClass = num;
    this.getLessons();
    this.getSubjectCodes();
  }

  setCurrnetSubjectType(type: string){
    this.clearFields();
    this.currentSubjectType = type;
    this.getLessons();
    this.getSubjectCodes();
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
    const lesson = new LessonRequest(this.lessonForm.value);
    lesson.hanyadikos = this.currentClass;
    switch(this.button){
      case "ADD":
        this._service.addLesson(lesson).subscribe(() => {
          this.clearFields();
          this.ngOnInit();
        });
        break;
      case "UPDATE":
        lesson.old_targykod = this.currentLesson.targykod;
        lesson.old_nap = this.currentLesson.nap;
        lesson.old_idopont = this.currentLesson.idopont;
        this._service.updateLesson(lesson).subscribe(() => {
          this.clearFields();
          this.ngOnInit();
        });
        break;
      case "REMOVE":
        this._service.removeLesson(lesson).subscribe(() => {
          this.clearFields();
          this.ngOnInit();
        });
        break;
    }
  }
}