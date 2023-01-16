import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  [x: string]: any;


    img = "assets/img_avatar.png";

    candidate: any = [
    {

      name: "Somya",
      age: 17,
      phone: 1234567890,
      img:'assets/avatar5.png',
    },
    {

      name: "Tanmay",
      age: 21,
      phone: 1234567890,
      img:'assets/avatar2.png',
    },
    {

      name: "Guddu",
      age: 56,
      phone: 1234567890,
      img:'assets/avatar2.png',
    },
    {

      name: "Anita",
      age: 49,
      phone: 1234567890,
      img:'assets/img_avatar2.png',
    },
    {

      name: "Vaishnavi",
      age: 24,
      phone: 1234567890,
      img:'assets/avatar2.png',
    },
    {

      name: "Ram",
      age: 15,
      phone: 1234567890,
      img:'assets/avatar6.png',
    },
    {

      name: "Mayank",
      age: 19,
      phone: 1234567890,
      img:'assets/avatar5.png',
    }
  ];

  dose1: any = []
  dose2: any = []
  boosterDose: any = []
  candidateName = "";
  candidateAge = "";
  candidatePhone = "";
  selectedIndex = "";

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  d1(index: any) {
    this.dose1.push(this.candidate[index])
    this.candidate.splice(index, 1)
  }
  delete(index: any) {
    this.candidate.splice(index, 1)
  }
  d2(index: any) {
    this.dose2.push(this.dose1[index])
    this.dose1.splice(index, 1)
  }
  d3(index: any) {
    this.boosterDose.push(this.dose2[index])
    this.dose2.splice(index, 1)
  }
  d4(index: any) {
    this.dose2.push(this.boosterDose[index])
    this.boosterDose.splice(index, 1)
  }
  d5(index: any) {
    this.dose1.push(this.dose2[index])
    this.dose2.splice(index, 1)
  }
  d6(index: any) {
    this.candidate.push(this.dose1[index])
    this.dose1.splice(index, 1)
  }

  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)

    if(index != null){
      this.candidateName = this.candidate[index].name;
      this.candidateAge = this.candidate[index].age;
      this.candidatePhone = this.candidate[index].phone;
      this.selectedIndex = index;
    }

    
    this.modalRef = this.modalService.show(template);
  }
  submit() {

    let user = {
      name:this.candidateName,
      age:this.candidateAge,
      phone:this.candidatePhone,
      img: this.img,
    }

    this.candidate.push(user);
    console.log('this',this.candidate)
    this.candidateName = "";
    this.candidateAge = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }

  update(){

    this.candidate[this.selectedIndex].name = this.candidateName;
    this.candidate[this.selectedIndex].age = this.candidateAge;
    this.candidate[this.selectedIndex].phone = this.candidatePhone;
    
    this.candidateName = "";
    this.candidateAge = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }

  close(){
    this.candidateName = "";
    this.candidateAge = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }


}
