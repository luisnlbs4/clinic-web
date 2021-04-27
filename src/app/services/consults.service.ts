import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  constructor(private http: HttpClient) { }

  getAllConsultsPatient(idPatient) {
    return this.http.get("http://localhost:9001/api/consult/patient/" + idPatient);
  }

  getAllPatientsByDoctorId(idDoctor) {
    return this.http.get("http://localhost:9001/api/consult/doctor/" + idDoctor);
  }

  getConsultById(idConsult) {
    return this.http.get("http://localhost:9001/api/consult/" + idConsult);
  }


  registerConsult(inputData) {
    return this.http.post("http://localhost:9001/api/consult" ,inputData);
  }


}
