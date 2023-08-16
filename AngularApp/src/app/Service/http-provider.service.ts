import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:4200/";

var httpLink = {
  getAllFunctionality: apiUrl + "/api/functionality/getAllFunctionality",
  deleteFunctionalityById: apiUrl + "/api/functionality/deleteFunctionalityById",
  getFunctionalityDetailById: apiUrl + "/api/functionality/getFunctionalityDetailById",
  saveFunctionality: apiUrl + "/api/functionality/SaveFunctionality"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllFunctionality(): Observable<any> {
    return this.webApiService.get(httpLink.getAllFunctionality)
  }

  public deleteFunctionalityById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteFunctionalityById + '?functionalityId=' + model,'');
  }

  public getFunctionalityDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getFunctionalityDetailById + '?functionalityId=' + model);
  }

  public saveFunctionality(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveFunctionality, model)
  }
}
