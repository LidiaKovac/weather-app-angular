import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent {
  @Input() data!: any[]
  @Input() title!: string

}
