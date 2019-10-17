import { Component, OnInit } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';

// import { Observable } from  'rxjs/Observable';

// import  'rxjs/add/operator/catch';

// import  'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    // private http : HTTP
    private http: HttpClient
    ) { }

  ngOnInit() {
    // this.http.get

    let url = "http://localhost:3001/place/consult";
    return  this.http.get(url) 
    .subscribe (data => {
      console.log(data);
    })

  }

}
