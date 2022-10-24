import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsApiService } from 'src/app/contacts-api.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  contactList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;
  categoryList:any=[];
  subcategoryList$!: Observable<any[]>;

  constructor(private service:ContactsApiService) { }
  //variables with default values
  @Input() contact:any;
  @Input() category:any;
  id:number = 0;
  firstName:string = "";
  lastName:string = "";
  email:string = "";
  password:string = "";
  categoryId!:number;
  subcategoryId:number = 1;
  phoneNumber:string = "";
  birthDay:number = 1;
  birthMonth:number = 1;
  birthYear:number = 1900;
  newCategoryId:number = 0;
  newType:string = "";
  tempId:number = 0;

  ngOnInit(): void {
    this.id = this.contact.id;
    this.firstName = this.contact.firstName;
    this.lastName = this.contact.lastName;
    this.email = this.contact.email;
    this.password = this.contact.password;
    this.categoryId = this.contact.categoryId;
    this.subcategoryId = this.contact.subcategoryId;
    this.phoneNumber = this.contact.phoneNumber;
    this.birthDay = this.contact.birthDay;
    this.birthMonth = this.contact.birthMonth;
    this.birthYear = this.contact.birthYear;
    this.contactList$ = this.service.getContactList();
    this.categoryList$ = this.service.getCategoryList();
    this.subcategoryList$ = this.service.getSubcategoryList();
    this.newCategoryId = this.category.id;
    this.newType = this.category.type;
  }

  //enables to add contacts
  addContact() {
    var contact = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      categoryId:this.categoryId,
      subcategoryId:this.subcategoryId,
      phoneNumber:this.phoneNumber,
      birthDay:this.birthDay,
      birthMonth:this.birthMonth,
      birthYear:this.birthYear
    }
    //if contact is "prywatny", automatically assigns type = none
    if(contact.subcategoryId == null){
      contact.subcategoryId = 1;
    }
    
    this.service.addContact(contact).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = 'none'
        }
      }, 4000);
    })
  }
  //enables to update contacts
  updateContact() {
    var contact = {
      id:this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      categoryId:this.categoryId,
      subcategoryId:this.subcategoryId,
      phoneNumber:this.phoneNumber,
      birthDay:this.birthDay,
      birthMonth:this.birthMonth,
      birthYear:this.birthYear
    }
    var id:number = this.id;
    this.service.updateContact(id,contact).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = 'none'
        }
      }, 4000);
    })
  }
  //enables to add new category
  addCategory(){
    var Category = {
      type:this.newType
    }
    this.service.addCategory(Category).subscribe();
  }
}
