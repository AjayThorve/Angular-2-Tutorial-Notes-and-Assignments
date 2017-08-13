import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') headingElement: ElementRef;
  @ContentChild('contentParagraph') contentElement: ElementRef;
  constructor() {
    console.log('constructor called ');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called ');
    console.log(changes);

  }
  ngOnInit() {
    console.log('ng-onInit called ');
    console.log('Text Content:' + this.headingElement.nativeElement.textContent);
    console.log('Paragraph Content:' + this.contentElement.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content:' + this.headingElement.nativeElement.textContent);
    console.log('Paragraph Content:' + this.contentElement.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called!');
  }


}
