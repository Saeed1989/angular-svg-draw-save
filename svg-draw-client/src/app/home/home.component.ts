import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { RecShapeOptions } from '../core/models/rec-shape-options.model';
import { RectangleService } from './services/rectangle.service';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'SVG Drawing Demo';

  public recShapeOptions: RecShapeOptions;

  constructor(private reactangleService: RectangleService) {}

  ngOnInit(): void {}

  ngOnChanges() {}

  ngAfterViewInit(): void {
    this.reactangleService.getRecOptions().subscribe(res => {
      console.log(res);
      this.recShapeOptions = res;
    })
  }

  saveShape(): void {
    this.reactangleService.updateRecOptions(this.recShapeOptions).subscribe(res => {
      console.log(res);
    }); 
  }
}
