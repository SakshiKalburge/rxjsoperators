import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShowsService } from '../shows.service';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, switchMap } from 'rxjs';
import { IProducts } from '../models/products';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {
searchControl : FormControl<any> = new FormControl()

  constructor(
    private _showservice : ShowsService
  ) { }

  ngOnInit(): void {
   this.onSearch()
  }

  onSearch(){
    this.searchControl.valueChanges
    .pipe(
     debounceTime(400),   // delay
     distinctUntilChanged(),   // double type that time no api call
      switchMap(val=>{
        return this._showservice.fetchsearchShows(val)
      })
    )
    .subscribe({
      next:data=>{
        console.log(data);
      
        
      }
    })
  }

}
