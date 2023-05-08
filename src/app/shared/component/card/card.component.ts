import { Component, OnInit } from '@angular/core';
import { MovieCardService } from '../../service/movie-card.service';
import { Imovie } from '../../model/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  getImgUrl : any =this._movieService.imgurl;
  getmovieArray : Array<Imovie> = this._movieService.movieArr
  searchmovie! : string
  checked: boolean = false
  Rating5:boolean =true


  constructor(private _movieService : MovieCardService) { }

  ngOnInit(): void {
  }

  onclickradio(){
    this.checked =!this.checked
    if(this.checked){
    let array= this._movieService.movieArr.filter(ele=>ele.vote_average> 5)  
    console.log(array)
    }else{
      this._movieService.movieArr
    }
  
  }
}
