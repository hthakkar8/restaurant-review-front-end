import { Component, OnInit, Input } from '@angular/core';
import { Template } from '../template.model';
import { DataService } from 'src/app/shared/data.service';
import { TemplateService } from '../template-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {
  @Input() template: Template;
  @Input() index: number;
  outputString = {0: 'Neutral', 1: 'Positive', '-1': 'Negative' };
  foodString: string;
  serviceString: string;
  ambienceString: string;
  constructor(private dataService: DataService, private templateService: TemplateService ,
    private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.foodString = this.outputString[this.template.food];
    this.serviceString = this.outputString[this.template.service];
    this.ambienceString = this.outputString[this.template.ambience];
    console.log(this.outputString[this.template.food]);
    console.log(this.outputString['this.template.food']);
  }

  onDelete() {
    this.dataService.deleteTemplate(this.template.id);
    this.templateService.deleteTemplate(this.index);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
