export class User {
    public publicid: string;
    public name: string;
    public email: string;
    constructor (publicid: string, name: string, email: string) {
       this.publicid = publicid;
       this.name = name;
       this.email = email;
    }
}
