import { Component } from '@angular/core';
import { FilterApply } from './filterapplication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterj';
  categories = ['e_city','e_dept','e_floor']
  resultant = [
  {"e_id":100,"e_name":"Shawn","email":"Shawn.chen@addept.com","e_city":"NYC","e_dept":"IT","e_floor":"1"},
  {"e_id":101,"e_name":"Ron","email":"Ron.chen@addept.com","e_city":"SF","e_dept":"Finance","e_floor":"2"},   
  {"e_id":102,"e_name":"Micheal","email":"Micheal.chen@addept.com","e_city":"LA","e_dept":"Admin","e_floor":"3"},
  {"e_id":103,"e_name":"Sanjay","email":"Sanjay.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"1"},
  {"e_id":104,"e_name":"Pradeep","email":"Pradeep.chen@addept.com","e_city":"SA","e_dept":"Admin","e_floor":"2"},
  {"e_id":105,"e_name":"Suhas","email":"Suhas.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"3"},
  {"e_id":106,"e_name":"Chandan","email":"Chandan.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":107,"e_name":"Shravya","email":"Shravya.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"2"},
  {"e_id":108,"e_name":"Shweta","email":"Shweta.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"3"},
  {"e_id":109,"e_name":"Sonal","email":"Sonal.chen@addept.com","e_city":"LA","e_dept":"Admin","e_floor":"1"},
  {"e_id":110,"e_name":"Srujana","email":"Srujana.chen@addept.com","e_city":"WA","e_dept":"Finance","e_floor":"2"},
  {"e_id":111,"e_name":"Samyuktha","email":"Samyuktha.chen@addept.com","e_city":"NYC","e_dept":"IT","e_floor":"3"},
  {"e_id":112,"e_name":"Shreyash","email":"Shreyash.chen@addept.com","e_city":"SA","e_dept":"Admin","e_floor":"1"},
  {"e_id":113,"e_name":"Shanmuga","email":"Shanmuga.chen@addept.com","e_city":"LA","e_dept":"IT","e_floor":"2"},
  {"e_id":114,"e_name":"Malli","email":"Malli.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"3"},
  {"e_id":115,"e_name":"Swati","email":"Swati.chen@addept.com","e_city":"NYC","e_dept":"Finance","e_floor":"1"},
  {"e_id":116,"e_name":"Shenba","email":"Shenba.chen@addept.com","e_city":"WA","e_dept":"Admin","e_floor":"2"},
  {"e_id":117,"e_name":"Ravi","email":"Ravi.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"3"},
  {"e_id":118,"e_name":"Rajya","email":"Rajya.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":119,"e_name":"Roopa","email":"Roopa.chen@addept.com","e_city":"ON","e_dept":"IT","e_floor":"2"},
  {"e_id":120,"e_name":"Rekha","email":"Rekha.chen@addept.com","e_city":"NYC","e_dept":"Finance","e_floor":"3"},
  {"e_id":121,"e_name":"Lokesh","email":"Lokesh.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":122,"e_name":"Vipin","email":"Vipin.chen@addept.com","e_city":"LA","e_dept":"Finance","e_floor":"2"},
  {"e_id":123,"e_name":"Sodhara","email":"Sodhara.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"3"},
  {"e_id":124,"e_name":"Jaswanth","email":"Jaswanth.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"1"}
  
 ]
  filter = {
    "e_city":{
      
    },
    "e_dept":{
      
    },
    "e_floor":{

    }
  }

  select_city = [{"e_city":"NYC"},{"e_city":"SF"},{"e_city":"LA"},{"e_city":"WA"},{"e_city":"SA"},{"e_city":"LA"},{"e_city":"ON"}]
  select_dept = [{"e_dept":"IT"},{"e_dept":"Finance"},{"e_dept":"Admin"}]
  select_floor = [{"e_floor":"1"},{"e_floor":"2"},{"e_floor":"3"}]

  products = [{"e_id":100,"e_name":"Shawn","email":"Shawn.chen@addept.com","e_city":"NYC","e_dept":"IT","e_floor":"1"},
  {"e_id":101,"e_name":"Ron","email":"Ron.chen@addept.com","e_city":"SF","e_dept":"Finance","e_floor":"2"},   
  {"e_id":102,"e_name":"Micheal","email":"Micheal.chen@addept.com","e_city":"LA","e_dept":"Admin","e_floor":"3"},
  {"e_id":103,"e_name":"Sanjay","email":"Sanjay.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"1"},
  {"e_id":104,"e_name":"Pradeep","email":"Pradeep.chen@addept.com","e_city":"SA","e_dept":"Admin","e_floor":"2"},
  {"e_id":105,"e_name":"Suhas","email":"Suhas.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"3"},
  {"e_id":106,"e_name":"Chandan","email":"Chandan.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":107,"e_name":"Shravya","email":"Shravya.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"2"},
  {"e_id":108,"e_name":"Shweta","email":"Shweta.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"3"},
  {"e_id":109,"e_name":"Sonal","email":"Sonal.chen@addept.com","e_city":"LA","e_dept":"Admin","e_floor":"1"},
  {"e_id":110,"e_name":"Srujana","email":"Srujana.chen@addept.com","e_city":"WA","e_dept":"Finance","e_floor":"2"},
  {"e_id":111,"e_name":"Samyuktha","email":"Samyuktha.chen@addept.com","e_city":"NYC","e_dept":"IT","e_floor":"3"},
  {"e_id":112,"e_name":"Shreyash","email":"Shreyash.chen@addept.com","e_city":"SA","e_dept":"Admin","e_floor":"1"},
  {"e_id":113,"e_name":"Shanmuga","email":"Shanmuga.chen@addept.com","e_city":"LA","e_dept":"IT","e_floor":"2"},
  {"e_id":114,"e_name":"Malli","email":"Malli.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"3"},
  {"e_id":115,"e_name":"Swati","email":"Swati.chen@addept.com","e_city":"NYC","e_dept":"Finance","e_floor":"1"},
  {"e_id":116,"e_name":"Shenba","email":"Shenba.chen@addept.com","e_city":"WA","e_dept":"Admin","e_floor":"2"},
  {"e_id":117,"e_name":"Ravi","email":"Ravi.chen@addept.com","e_city":"WA","e_dept":"IT","e_floor":"3"},
  {"e_id":118,"e_name":"Rajya","email":"Rajya.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":119,"e_name":"Roopa","email":"Roopa.chen@addept.com","e_city":"ON","e_dept":"IT","e_floor":"2"},
  {"e_id":120,"e_name":"Rekha","email":"Rekha.chen@addept.com","e_city":"NYC","e_dept":"Finance","e_floor":"3"},
  {"e_id":121,"e_name":"Lokesh","email":"Lokesh.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"1"},
  {"e_id":122,"e_name":"Vipin","email":"Vipin.chen@addept.com","e_city":"LA","e_dept":"Finance","e_floor":"2"},
  {"e_id":123,"e_name":"Sodhara","email":"Sodhara.chen@addept.com","e_city":"ON","e_dept":"Admin","e_floor":"3"},
  {"e_id":124,"e_name":"Jaswanth","email":"Jaswanth.chen@addept.com","e_city":"SA","e_dept":"Finance","e_floor":"1"}
  
  ];

  captureValues(event){
    if(event.target.checked){
      this.resultant = []
      this.filter[event.target.className][event.target.value] = true
      const filterPipe = new FilterApply();
      this.products.forEach((e)=>{
      let filteredArr = filterPipe.transform(e,this.filter);
      if(filteredArr[0]){
        this.resultant.push(e)
      }
    })
    console.log(this.filter)
    console.log(this.resultant);
    }
    else{
      delete this.filter[event.target.className][event.target.value]
      console.log("After removing the filter",this.filter);
      
      this.resultant = []
      const filterPipe = new FilterApply();
      this.products.forEach((e)=>{
      let filteredArr = filterPipe.transform(e,this.filter);
      if(filteredArr[0]){
        this.resultant.push(e)
      }
    })
    console.log(this.filter)
    console.log(this.resultant);
    }
  }
}