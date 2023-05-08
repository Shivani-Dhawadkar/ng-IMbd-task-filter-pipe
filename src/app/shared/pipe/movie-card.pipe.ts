import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../model/interface';

@Pipe({
  name: 'movieCard'
})
export class MovieCardPipe implements PipeTransform {
// marray! : Array<Imovie> 
// searchmovie! : string
  transform(value: Array<Imovie>, searchstr : string): Array<Imovie> {
      // console.log(value.filter(ele=>ele.title.trim().toLocaleLowerCase().includes(searchstr.trim().toLocaleLowerCase())))
      console.log(searchstr)
      if(!searchstr){
        return value
      }
      if(!value){
        return []
      }
       return value.filter(ele=>ele.title.trim().toLocaleLowerCase().includes(searchstr.trim().toLocaleLowerCase()))
  }}

// }
