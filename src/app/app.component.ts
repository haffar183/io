import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username : string = '';
  password : string = '';

  constructor(private http: HttpClient ){

  }

  signIn() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.calltobackend(this.username, this.password)
      .subscribe(
        response => {
          alert('verified');
        },
        error => {
          alert('not verified');
        }
      );
  }

  calltobackend(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`http://127.0.0.1:8080/api/users/signup`, body);
  }
}
