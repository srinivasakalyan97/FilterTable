import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'filterRepeated',
  pure: false
})

export class FilterRepeated implements PipeTransform {
    transform(value: any,filterby): any{
        console.log("asd",filterby.sort_by);
        
        if(value!== undefined && value!== null){
            return _.uniqBy(value, filterby.sort_by);
        }
        return value;
    }
}