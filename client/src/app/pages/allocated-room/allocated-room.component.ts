import { Component } from '@angular/core';
import { AllocService } from 'src/app/service/alloc/alloc.service';

@Component({
  selector: 'app-allocated-room',
  templateUrl: './allocated-room.component.html',
  styleUrls: ['./allocated-room.component.css']
})
export class AllocatedRoomComponent {
  alloc: any;
  constructor(private allocService: AllocService) {

  }
  ngOnInit(): void {
    this.allocService.getAlloc().subscribe((data) => {
      this.alloc = data;
    });
  }
  onDeleteClick(id: string) {
    this.allocService.deleteAlloc(id).subscribe(() => this.allocService.getAlloc().subscribe((data) => {
      this.alloc = data;
    }));
    console.log(id);
  }

}
