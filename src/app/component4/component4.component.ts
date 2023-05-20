import { Component,ElementRef,HostListener ,Renderer2} from '@angular/core';  
import { DataSharingService } from '../data-service.service';  
import { CookieService } from 'ngx-cookie-service';
@Component({  
  selector: 'app-component4',  
  templateUrl: './component4.component.html',  
  styleUrls: ['./component4.component.css']  
})  
export class Component4Component {  
  title :string ="Hello comp4";
  Component4Data: any = '';  
  colors=['Red','Green', 'Yellow'];
  //renderer: any;
  //el: any;
//,private Cookie:CookieService)
  constructor(private DataSharing: DataSharingService, 
              private Cookie:CookieService,
              private el:ElementRef,
              private renderer:Renderer2
              ) {  
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

  click()
  {
//console.log('Hello');
this.Cookie.set("UserId","myId");
alert(this.Cookie.get("UserId"));
//this.Cookie.deleteAll();
  }

  @HostListener('click') onclick()
  {
alert('click');

  }

  @HostListener('mouseover') onmouseover()
  {
//console.log('mouseover');
this.changecolor('Red');

  }

  @HostListener('mouseleave') onmouseleave()
  {

    this.el.nativeElement.style = 'Black';
  }

  changecolor(color:string)
  {
  //  this.el.nativeElement.style. = 'yellow';
    this.renderer.setProperty(this.el.nativeElement.style,'color',color);
    //this.renderer.setProperty(this.el.nativeElement,'color',color);
    //this.renderer.setProperty(this.el.nativeElement,'color', color)
    //setElementProperty(renderElement, propertyName, propertyValue)	
    //setProperty(renderElement, propertyName, propertyValue)

  }

}
