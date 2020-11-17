import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

import { SubjectService } from 'src/app/services/subject.service'
import { SubjectModel } from 'src/app/models/subject'
import { SubjectRequest } from 'src/app/requests/SubjectRequest';
import { Button } from 'src/app/enums/button';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  @ViewChild('f') subjectForm: NgForm;
  currentClass = 1;
  subjects: SubjectModel[];
  displayedColumns: string[] = ['targykod', 'targynev', 'tipus'];
  emptySubject: SubjectModel = {targykod: null, targynev: null, tipus: null, hanyadikos: null};
  currentSubject: SubjectModel = this.emptySubject;
  button: Button;

  constructor(private _service: SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(){
    this._service.getSubjectsOfClass(this.currentClass).subscribe(result=>{
      this.subjects = result;
    });
  }

  setCurrentClass(num: number){
    this.clearFields();
    this.currentClass = num;
    this.getSubjects();
  }

  onSubjectClick(subject: SubjectModel){
    this.currentSubject = subject;
  }

  clearFields(){
    this.currentSubject = this.emptySubject;
  }

  submitSubjectForm(){
    const subject = new SubjectRequest(this.subjectForm.value);
    subject.hanyadikos = this.currentClass;
    switch(this.button){
      case "ADD":
        this._service.addSubject(subject).subscribe();
        break;
      case "UPDATE":
        this._service.updateSubject(this.currentSubject.targykod, subject).subscribe();
        break;
      case "REMOVE":
        this._service.removeSubject(this.currentSubject.targykod).subscribe();
        break;
    }
    this.clearFields();
    this.getSubjects();
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
}
