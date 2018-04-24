import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.scss']
})
export class SearchTravelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
}

}
