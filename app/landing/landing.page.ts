import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Mockups/student.model';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

 
  ngOnInit() {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
        console.log('Estudiantes:', this.students);
      },
      (error) => {
        console.error('Error al obtener estudiantes:', error);
      }
    );
  }
}
