import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'checkboxfilter'
})
export class FilterApply implements PipeTransform {

  transform(data,filter): any {
     let filterdata = filter
    var matchesAND = true;
    for (var obj in filterdata) {

      if( filterdata.hasOwnProperty(obj) ) {
          
        if (this.noSubFilter(filterdata[obj])) continue;
        if (!filterdata[obj][data[obj]]) {
          matchesAND = false;
          break;
        }
      }
    }
    let result = [matchesAND,data]
    return result;
  };


noSubFilter(obj) {
  for (var key in obj) {
    if (obj[key]) return false;
  }
  return true;
}
}