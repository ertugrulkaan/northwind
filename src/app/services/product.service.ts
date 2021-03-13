import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44336/api/';
  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>> {
    let getAllUrl=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(getAllUrl);
  }
  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>> {
    let getAllByCategoryIdUrl=this.apiUrl+"products/getbycategoryid?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(getAllByCategoryIdUrl);
  }
}
