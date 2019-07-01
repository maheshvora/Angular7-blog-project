import { Component, OnInit } from '@angular/core';
import { BlogpostService } from "../blogpost.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  error: {};

  constructor(
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    this.blogpostService.getCategories().subscribe(
      (data: any) => this.categories = data
    );
  }

}
