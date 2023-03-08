import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, of } from 'rxjs' ;
import {Product } from '../products' ;

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private url = 'http://localhost:3000/api/get_products';
  private urlpost = 'http://localhost:3000/api/add_product'; 
  private urldelete = 'http://localhost:3000/api/delete_product' ;
  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url).pipe(catchError(this.handleError<any>('getProduts')));
  }
}
