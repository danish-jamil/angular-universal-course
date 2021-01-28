import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoursesService } from '../services/courses.service';
import { CourseResolver } from '../services/course.resolver';
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Route[] = [
  {
    path: ':id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },
];

@NgModule({
  declarations: [CourseComponent, CourseDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [CoursesService, CourseResolver],
})
export class CoursesModule {}
