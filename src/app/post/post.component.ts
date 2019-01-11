import { PostModel } from './../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  postList: PostModel[];


  ngOnInit() {
    this.postList=[
{postHeader: "Test post", postBody: "Today I tested a post." },
{postHeader:"Pigs", postBody: "Pigs are pink and cute and cuddly."}

    ];


  }

  addNewPost():void
  {
    this.postList.push({ postHeader, postBody});
  }
  
}
