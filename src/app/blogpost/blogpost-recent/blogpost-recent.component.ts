import { Component, OnInit } from '@angular/core';
import { BlogpostService } from "../blogpost.service";

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {
  blogs: any;
  error: {};

  constructor(
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    this.blogpostService.getRecentBlogs().subscribe(
      (data: any) => this.blogs = data,
      error => this.error = error
    );
  }

}
