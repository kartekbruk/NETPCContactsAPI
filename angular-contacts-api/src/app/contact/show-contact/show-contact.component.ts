import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsApiService } from 'src/app/contacts-api.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  contactList$!:Observable<any[]>;
  categoryList$!:Observable<any[]>;
  categoryList:any=[];
  subcategoryList$!:Observable<any[]>;
  subcategoryList:any=[];

  //Mapping (id -> type)
  categoriesMap: Map<number, string> = new Map()
  subcategoriesMap: Map<number, string> = new Map()

  //Variables
  activateAddEditContactComponent:boolean = false;
  contact:any;
  category:any;

  constructor(private service:ContactsApiService) { }

  ngOnInit(): void {
    this.contactList$ = this.service.getContactList();
    this.categoryList$ = this.service.getCategoryList();
    this.subcategoryList$ = this.service.getSubcategoryList();
    this.refreshCategoriesMap();
    this.refreshSubcategoriesMap();
  }

  //refresh mapings
  refreshCategoriesMap(){
    this.service.getCategoryList().subscribe(data => {
      this.categoryList = data;

      for(let i = 0; i < data.length; i++){
        this.categoriesMap.set(this.categoryList[i].id, this.categoryList[i].type);
      }
    })
  }

  refreshSubcategoriesMap(){
    this.service.getSubcategoryList().subscribe(data => {
      this.subcategoryList = data;

      for(let i = 0; i < data.length; i++){
        this.subcategoriesMap.set(this.subcategoryList[i].id, this.subcategoryList[i].type);
      }
    })
  }

  //this method prepares to add new contact or category
  modalAdd(){
    this.contact = {
      id:0,
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      categoryId:null,
      subcategoryId:null,
      birthDay:null,
      birthMonth:null,
      birthYear:null,
    }
    this.category = {
      id:0,
      type:null
    }
    this.activateAddEditContactComponent = true;
  }

  //this method prepares to show contact details
  showDetails(item:any){
    this.contact = item;
    this.activateAddEditContactComponent = true;
  }

  //this method prepares to edit contact
  modalEdit(item:any){
    this.contact = item;
    this.activateAddEditContactComponent = true;
  }

  //this method enables to delete contact from db
  delete(item:any){
    if(confirm('Are you sure you want to delete this contact?')){
      this.service.deleteContact(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        var showDeleteSuccess = document.getElementById('add-delete-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = 'none'
          }
        }, 4000);
        this.contactList$ = this.service.getContactList();
      })
    }
  }

  //this is what happens when we close a modal
  modalClose(){
    this.activateAddEditContactComponent = false;
    this.contactList$ = this.service.getContactList();
  }
}
