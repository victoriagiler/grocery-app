import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';




@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-grocery-search',
  templateUrl: './grocery-search.component.html',
  styleUrls: ['./bootstrap.min.css']
})

export class GrocerySearchComponent {
 
task: string = ''
tasks: any [] = []
  
  onClick(){
    
    this.tasks.push({name: this.task});
    this.task = '';
    
    }
  
  



  

}
