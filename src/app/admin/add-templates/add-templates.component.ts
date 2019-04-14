import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-templates',
  templateUrl: './add-templates.component.html',
  styleUrls: ['./add-templates.component.css']
})
export class AddTemplatesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    const food = +form.value.food;
    const service = +form.value.service;
    const ambience = +form.value.ambience;
    const templatetext = form.value.templatetext;
    let overall = 0;
    let contains = 1;
    if (food === 0 && service === 0 && ambience === 0) {
      overall = 1;
      contains = 0;
    }
    this.dataService.addTemplate(templatetext, food, service, ambience, overall, contains);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
