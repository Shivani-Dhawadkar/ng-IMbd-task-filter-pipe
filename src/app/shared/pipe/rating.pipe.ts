import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../model/interface';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
 
  transform(value: Array<Imovie>, searchstring : string) {
    console.log(value)
    console.log(searchstring)
    console.log(value.filter(ele=>ele.vote_average > 5))
  
    return value.filter(ele=>ele.title.trim().toLocaleLowerCase().includes(searchstring.trim().toLocaleLowerCase())).length!
  }

}
