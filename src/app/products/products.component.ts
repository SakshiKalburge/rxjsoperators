import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/products';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsArr : IProducts[] = [];
searchControl : FormControl<any> = new FormControl()
show: any;
showsArr: any;
  constructor(
    private _productservice : ProductsService,
   private _http : HttpClient

  ) { }

  ngOnInit(): void {
    this.productsearch()
  }

  productsearch(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val=>{
        return this._productservice.fetchsearchproducts(val)
      })
    )
    .subscribe({
      next:data=>{
        console.log(data);
       this.productsArr = data.products
      }
    })
    

}
}