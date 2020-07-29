import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  filmDate=null;
  url: string = "http://localhost:8080/film/filmlist";

  constructor() { }
  getFilmList(){
    axios.post(this.url).then(res =>{
      console.log(res.data);
      this.filmDate=res.data;
    })
  }

  ngOnInit() {
    this.getFilmList()
  }

}
