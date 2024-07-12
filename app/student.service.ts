import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Mockups/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlConsult = 'src/app/Mockups/Students.json';

  constructor( private http : HttpClient) { }

 
getStudents(): Observable<Student[]>{
  return this.http.get<Student[]>(this.urlConsult);  
  console.log(this.urlConsult)
}

}
