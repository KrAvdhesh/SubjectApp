import { Component } from '@angular/core';  
import { DataSharingService } from '../data-service.service';  
  
@Component({  
  selector: 'app-component1',  
  templateUrl: './component1.component.html',  
  styleUrls: ['./component1.component.css']  
})  
export class Component1Component {  
  
  Component1Data: any = '';  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })  
  }  
  
  onSubmit(data : any) {  
    this.DataSharing.SharingData.next(data.value);  
  }  
}  
