import { Component } from '@angular/core';
import { ExamService } from './example/exam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExamService]
})
export class AppComponent {
  title = 'my-first-app';
  constructor(private exam: ExamService) {}
  funDemo(qty) {
    this.exam.ExamPoster(qty);
  }
}


