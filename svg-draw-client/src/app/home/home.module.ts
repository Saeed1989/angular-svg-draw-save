import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { RectangleService } from './services/rectangle.service';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(homeRoutes)],
  declarations: [HomeComponent],
  providers: [RectangleService],
})
export class HomeModule {}
