import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  getwelcomemsg() {
    return this.http.get("http://44.203.211.59:8080/api/welcome", { responseType: 'text' });
  }
}
