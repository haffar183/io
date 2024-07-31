import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username : string = '';
  password : string = '';
  usersRef: AngularFireList<any>;

  constructor(private db:AngularFireDatabase ){
    this.usersRef = db.list('users');
  }

  signIn() {

    const data = {
      name: this.username,
      password: this.password
    };
    this.usersRef.push(data).then(() => {
      alert('submitter');
    }).catch((error) => {
      alert('not submitter');
    });
    // this.calltobackend(this.username, this.password)
    //   .subscribe(
    //     response => {
    //       alert('verified');
    //     },
    //     error => {
    //       alert('not verified');
    //     }
    //   );
  }

  // calltobackend(username: string, password: string): Observable<any> {

  //   // const body = { username, password };
  //   // return this.http.post<any>(`http://127.0.0.1:8080/api/users/signup`, body);
  // }
}
