import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  getwelcomemsg() {
    return this.http.get("http://3.238.252.112:8080/api/welcome", { responseType: 'text' });
  }
}
