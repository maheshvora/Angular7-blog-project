import { Component, OnInit } from '@angular/core';
import { BlogpostService } from "../blogpost.service";

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  blogs: any;
  error: {};
  
  constructor(
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {

    this.blogpostService.getFeaturedBlogs().subscribe(
      (data: any) => this.blogs = data,
      error => this.error = error
    );
  }

}
