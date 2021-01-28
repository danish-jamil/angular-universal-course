import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {CoursesService} from "./services/courses.service";
import {CourseResolver} from "./services/course.resolver";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {AppShellRenderDirective} from "./directives/app-shell-render.directive";
import {AppShellNoRenderDirective} from "./directives/app-shell-norender.directive";
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './courses/course/course.component';
import { CourseDialogComponent } from './courses/course-dialog/course-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CourseComponent,
    // CourseDialogComponent,
    CoursesCardListComponent,
    AboutComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
