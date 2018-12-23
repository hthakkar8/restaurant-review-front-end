import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  users: User[];
  constructor(private dataService: DataService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.fetchUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

  onAdd(form: NgForm) {
    const email = form.value.email;
    const contact = form.value.contact;
    const name = form.value.name;
    const owner = form.value.owner;
    const address = form.value.address;
    const cost = +form.value.cost;
    const menu = ' ';
    const image = ' ';
    const rating = 0.0;
    this.dataService.addRestaurant(name, email, address, contact, owner, cost, menu, image, rating);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
