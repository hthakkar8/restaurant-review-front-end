import { Injectable } from '@angular/core';
import { Template } from './template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }
  templates: Template[] = [];
  getTemplates() {
    return this.templates.slice();
  }
  setTemplates(templates: Template[]) {
    this.templates = templates.slice();
  }

  deleteTemplate(index: number) {
    this.templates.splice(index, 1);
  }

}
