import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

import { RoomService } from 'src/app/services/room.service'
import { RoomModel } from 'src/app/models/room'
import { RoomRequest } from 'src/app/requests/RoomRequest';
import { Button } from 'src/app/enums/button';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  @ViewChild('f') roomForm: NgForm;
  lecture_rooms: RoomModel[];
  computer_rooms: RoomModel[];
  lectureDisplayedColumns: string[] = ['szam', 'nev', 'ferohely'];
  computerDisplayedColumns: string[] = ['szam', 'nev', 'gepek_szama'];
  emptyRoom: RoomModel = {szam: null, nev: null, ferohely: null, gepek_szama: null};
  currentRoom: RoomModel = this.emptyRoom;
  button: Button;
  isComputerRoom = false;
  isLectureRoom = false;

  constructor(private _service: RoomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(){
    this._service.getRooms().subscribe(result => {
      this.lecture_rooms = result.lecture_rooms;
      this.computer_rooms = result.computer_rooms;
    });
  }

  onRoomClick(subject: RoomModel){
    this.currentRoom = subject;
  }

  clearFields(){
    this.currentRoom = this.emptyRoom;
  }

  submitSubjectForm(){
    const room = new RoomRequest(this.roomForm.value);
    console.log(room);
    switch(this.button){
      case "ADD":
        this._service.addRoom(room).subscribe(() => {
          this.clearFields();
          this.getRooms();
        });
        break;
      case "UPDATE":
        this._service.updateRoom(this.currentRoom.szam, room).subscribe(() => {
          this.clearFields();
          this.getRooms();
        });
        break;
      case "REMOVE":
        this._service.removeRoom(this.currentRoom.szam).subscribe(() => {
          this.clearFields();
          this.getRooms();
        });
        break;
    }
  }

  onNumFieldChange(event){
    if(event.target.name == 'gepek_szama'){
      this.isComputerRoom = event.target.value != '';
    }
    else if (event.target.name == 'ferohely') {
      this.isLectureRoom = event.target.value != '';
    }
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
    this.isComputerRoom = false;
    this.isLectureRoom = false;
  }
}
