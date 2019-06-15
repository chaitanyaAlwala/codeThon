import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-incubator',
  templateUrl: './incubator.component.html',
  styleUrls: ['./incubator.component.css']
})
export class IncubatorComponent implements OnInit {
  form: any;
  powers: string[];
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
    this.powers = ['Women Safety' ,'Transport', 
                'Education', 'Politics','Others']
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }

}
