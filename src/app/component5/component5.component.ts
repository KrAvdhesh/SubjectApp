import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { Myclass } from '../myclass';

console.log('component5 loaded')
@Component({
  selector: 'app-component5',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css'],
  viewProviders: [Myclass]
})
export class Component5Component {

}
