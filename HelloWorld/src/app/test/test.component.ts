import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<h2>This is the second heading</h2>
             <div>welcome to {{region}}
             <h3></h3>This region has {{1+3}} main players</div>
             <input [disabled]="val" type="text" value="Google search"><br><br>
              <h3 class="random-class">Normal class invoking present in CSS</h3>
              <h2 [class]="exclass">Binding the class present in CSS</h2>
              <h2 [style.color]="'red'">Style Binding</h2>
              <h2 [ngClass]="multibinding">Multiple bindings to this tag</h2>`,
  styles: [`
  .random-class{
    color:blue;
  }
  .other-class{
    background-color:yellow;
  }
  .font-class{
   font-family:sans-serif;
   color:orange; 
  }`]
})
export class TestComponent implements OnInit {
   public region="Roman Empire";
   public val=false;
   public hasError=true;
   public spec=false;
   public exclass="other-class";
   public multibinding={
     "random-class": this.hasError,
     "font-class": this.spec
   }
  constructor() { }
  ngOnInit(): void {
  }
 

}
