import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

constructor( private http:HttpClient) { }

getimage() {
  return this.http.get("http://localhost:3000/images")
}

}
