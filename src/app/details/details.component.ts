import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
 onSave(form: NgForm){
   this.http.post('https://trident-f932c-default-rtdb.firebaseio.com/post.json',form.value).subscribe(data=>{
     console.log(data);
   });
 }
 onFetch()
 {
   this.http.get('https://trident-f932c-default-rtdb.firebaseio.com/post.json').subscribe(data=>{
     console.log(data);
   })
 }
}
