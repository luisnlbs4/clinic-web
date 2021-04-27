import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get("http://localhost:9001/api/patient");
  }

  registerPatient(inputData) {
    return this.http.post("http://localhost:9001/api/patient", inputData);
  }

  getPatientById(patientId) {
    console.log("patientId",patientId);
    return this.http.get("http://localhost:9001/api/patient/get/" + patientId);
  }
}
