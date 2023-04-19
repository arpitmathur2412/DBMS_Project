import { Component } from '@angular/core';
import { WingService } from 'src/app/service/wing/wing.service';

@Component({
  selector: 'app-wing',
  templateUrl: './wing.component.html',
  styleUrls: ['./wing.component.css']
})
export class WingComponent {
  wing: any;
  constructor(private wingService: WingService) {

  }
  ngOnInit(): void {
    this.wingService.getWing().subscribe((data) => {
      this.wing = data;
    });
  }
  onDeleteClick(id: string) {
    this.wingService.deleteWing(id).subscribe(() => this.wingService.getWing().subscribe((data) => {
      this.wing = data;
    }));
    console.log(id);
  }

}
