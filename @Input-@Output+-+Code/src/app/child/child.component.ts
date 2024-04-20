import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy{
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number){
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is initialized');
  }
  ngOnDestroy(): void {
    console.log('Child Component is destroyed');
  }
}
