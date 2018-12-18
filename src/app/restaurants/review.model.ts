export class Review {
    public reviewtext: string;
    public responsetext: string;
    public isreplied: boolean;
    public postdate: string;
    public username: string;
    public restaurantid: string;

    constructor (reviewtext: string, responsetext: string, isreplied: boolean, postdate: string,
        username: string, restaurantid: string) {
        this.reviewtext = reviewtext;
        this.responsetext = responsetext;
        this.isreplied = isreplied;
        this.postdate = postdate;
        this.username = username;
        this.restaurantid = restaurantid;
    }
}
