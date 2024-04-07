import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `<h2>{{ getTitle () }}</h2>
            <p>Today's Date: {{ getCurrentDate() }}</p>`,
})
export class StudentsComponent {
    title = "My List of Students";

    getTitle(){
      return this.title;
    }
    
    getCurrentDate() {
      const currentDate = new Date();
      return `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    }
}