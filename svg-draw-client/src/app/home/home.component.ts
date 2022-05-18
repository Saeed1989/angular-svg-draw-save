import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'SVG Drawing Demo';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  ngAfterViewInit(): void {}

  saveShape(): void {}
}
