import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private storageKey = 'studentData';

  saveStudent(studentData: any): void {
    const existingData = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
    existingData.push(studentData);
    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
  }

  getStudents(): any[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }
}
