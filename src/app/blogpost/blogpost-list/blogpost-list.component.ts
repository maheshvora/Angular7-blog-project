import { Component, OnInit } from '@angular/core';
import { BlogpostService } from "../blogpost.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  title ='Blogs';
  blogs: any;
  error: {};
  
  constructor(
    private titleService: Title,
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.blogpostService.getBlogs().subscribe(
      (data: any) => this.blogs = data,
      error => this.error = error
    );
  }

}
