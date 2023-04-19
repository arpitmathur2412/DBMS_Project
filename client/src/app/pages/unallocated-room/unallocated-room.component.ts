import { Component } from '@angular/core';
import { UnallocService } from 'src/app/service/unalloc/unalloc.service';

@Component({
  selector: 'app-unallocated-room',
  templateUrl: './unallocated-room.component.html',
  styleUrls: ['./unallocated-room.component.css']
})
export class UnallocatedRoomComponent {
  unalloc: any;
  constructor(private unallocService: UnallocService) {

  }
  ngOnInit(): void {
    this.unallocService.getUnalloc().subscribe((data: any) => {
      this.unalloc = data;
    });
  }
  onDeleteClick(id: string) {
    this.unallocService.deleteUnalloc(id).subscribe(() => this.unallocService.getUnalloc().subscribe((data) => {
      this.unalloc = data;
    }));
    console.log(id);
  }

}
