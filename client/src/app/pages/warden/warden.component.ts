import { Component } from '@angular/core';
import { WardensService } from 'src/app/service/warden/wardens.service';

@Component({
  selector: 'app-warden',
  templateUrl: './warden.component.html',
  styleUrls: ['./warden.component.css']
})
export class WardenComponent {
  warden: any;
  constructor(private wardenService: WardensService) {

  }
  ngOnInit(): void {
    this.wardenService.getWardens().subscribe((data) => {
      this.warden = data;
    });
  }
  onDeleteClick(id: string) {
    this.wardenService.deleteWarden(id).subscribe(() => this.wardenService.getWardens().subscribe((data) => {
      this.warden = data;
    }));
    console.log(id);
  }

}
