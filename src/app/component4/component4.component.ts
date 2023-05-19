import { Component } from '@angular/core';  
import { DataSharingService } from '../data-service.service';  
  
@Component({  
  selector: 'app-component4',  
  templateUrl: './component4.component.html',  
  styleUrls: ['./component4.component.css']  
})  
export class Component4Component {  
  
  Component4Data: any = '';  
  colors=['Red','Green', 'Yellow'];

  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component4Data = res;  
    })  
  }  
  
  onSubmit(data : any) {  
    this.DataSharing.SharingData.next(data.value);  
  }  

  onSave(myData: any)
  {
 console.log(myData.value);

  }

  setColor(data:any)
  {
console.log(data.value);

  }
  
}