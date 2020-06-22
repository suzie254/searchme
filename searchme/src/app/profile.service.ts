import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   private username:string;
   private client_id = "0ddd798ddad906269c18";
   private client_secret = "503631dca396dbe618e2d8379eaa8aafaeb77b48";

  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    this.username = "suzie254";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}