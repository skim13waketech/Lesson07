import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() {console.log("OK, now this has been injected!");
}
ExamPoster(qty) {
  console.log(qty, "Alright, all done!");
}
}
