export class Restaurant {
    public name: string;
    public address: string;
    public contact: string;
    public rating: number;
    public email: string;
    public image: string;
    public menu: string;
    public cost: number;
    public publicid: string;

    constructor (name: string, address: string, contact: string, rating: number,
        email: string, image: string, menu: string, cost: number, publicid: string) {
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.rating = rating;
        this.email = email;
        this.image = image;
        this.menu = menu;
        this.cost = cost;
        this.publicid = publicid;
    }
}
