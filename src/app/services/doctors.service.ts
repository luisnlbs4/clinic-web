import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getAllDoctors() {
    return this.http.get("http://localhost:9001/api/doctor");
  }

  getAllPatientsByDoctorId(idDoctor) {
    return this.http.get("http://localhost:9001/api/consult/doctor/" + idDoctor);
  }

  registerDoctor(inputData) {
    return this.http.post("http://localhost:9001/api/doctor", inputData);
  }

  getDoctorById(doctorId) {
    return this.http.get("http://localhost:9001/api/doctor/get/" + doctorId);
  }

}
