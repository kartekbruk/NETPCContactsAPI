import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {

  readonly contactsAPIUrl = "https://localhost:7156/api";

  constructor(private http:HttpClient) { }
  //methods sending http requests
  //enables to get contacts from db
  getContactList():Observable<any[]>{
    return this.http.get<any>(this.contactsAPIUrl + '/contacts');
  }
  //enables to add contacts to db
  addContact(data:any){
    return this.http.post(this.contactsAPIUrl + '/contacts', data);
  }
  //enables to update contacts in db
  updateContact(id:number|string, data:any){
    return this.http.put(this.contactsAPIUrl + `/contacts/${id}`, data);
  }
  //enables to delete contacts from db
  deleteContact(id:number|string){
    return this.http.delete(this.contactsAPIUrl + `/contacts/${id}`);
  }

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.contactsAPIUrl + '/categories');
  }

  getSubcategoryList():Observable<any[]>{
    return this.http.get<any>(this.contactsAPIUrl + '/subcategories');
  }

  addCategory(data:any){
    return this.http.post(this.contactsAPIUrl + '/categories', data);
  }
}
