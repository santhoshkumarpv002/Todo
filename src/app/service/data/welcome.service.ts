import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  getwelcomemsg() {
    return this.http.get("https://53ce-3-233-219-228.ngrok-free.app/api/welcome", { responseType: 'text' });
  }
}
