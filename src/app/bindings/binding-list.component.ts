import { Component } from "@angular/core";

@Component({
  selector:'binding-list',
  templateUrl: './binding-list.component.html'
})
export class BindingListComponent{
  expressionInterpolation: String = 'Expression interpolation';
  imageUrlPropertyBinding: String = 'https://i.imgflip.com/2cx5m8.jpg';
  imageUrlTemplateExpression: String = 'https://i.imgflip.com/2cx5nq.jpg';
  imgW: number = 200;
  imgH: number = 160;
  count: number = 0;
  inputText: String = '';

  toggleImage():void{
    this.count++;
  }
}
