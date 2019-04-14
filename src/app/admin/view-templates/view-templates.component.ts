import { Component, OnInit } from '@angular/core';
import { Template } from './template.model';
import { TemplateService } from './template-service.service';

@Component({
  selector: 'app-view-templates',
  templateUrl: './view-templates.component.html',
  styleUrls: ['./view-templates.component.css']
})
export class ViewTemplatesComponent implements OnInit {

  templates: Template[];
  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templates = this.templateService.getTemplates();
  }

}
