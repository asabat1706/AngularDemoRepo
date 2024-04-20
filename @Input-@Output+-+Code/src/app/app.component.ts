import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem(){
    const newItem = `Item ${this.itemsArr.length +1}`;
    this.itemsArr.push(newItem);
  }

  deleteItem(index: number){
    if(index >=0 && index < this.itemsArr.length){
      this.itemsArr.splice(index, 1);
    }
  }

  ngOnInit(): void {
    console.log('App Component is initialized');
  }
}
