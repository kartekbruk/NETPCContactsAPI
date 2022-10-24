import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsApiService } from 'src/app/contacts-api.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  contactList$!:Observable<any[]>;
  categoryList$!:Observable<any[]>;
  categoryList:any=[];
  subcategoryList$!:Observable<any[]>;
  subcategoryList:any=[];

  categoriesMap: Map<number, string> = new Map()
  subcategoriesMap: Map<number, string> = new Map()

  @Input() contact:any;

  constructor(private service:ContactsApiService) { }

  ngOnInit(): void {
    this.contactList$ = this.service.getContactList();
    this.categoryList$ = this.service.getCategoryList();
    this.subcategoryList$ = this.service.getSubcategoryList();
    this.refreshCategoriesMap();
    this.refreshSubcategoriesMap();
  }

  //refreshes mapping
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
}
