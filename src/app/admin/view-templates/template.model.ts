export class Template {

    public id: number;
    public text: string;
    public food: number;
    public service: number;
    public ambience: number;

    constructor (id: number, text: string, food: number, service: number, ambience: number) {
       this.id = id;
       this.text = text;
       this.food = food;
       this.service = service;
       this.ambience = ambience;
    }
}
