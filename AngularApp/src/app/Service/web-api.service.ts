import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private httpClient: HttpClient) { }


  //Get call method
  //Param 1 : url
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Contet-Type': 'appliaction/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      }),
      observe: "response" as 'body'
    };
    return this.httpClient.get(
      url,
      httpOptions
    )
    .pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  //POST call: method
  //Param 1: url
  //Param 2: model
  post(url: string, model: any): Observable<any> {
    const httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'repsonse' as 'body'
    };
    return this.httpClient.post(
      url,
      model,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  getFunctionalityDetailById(funcitonalityId: any): Observable<any> {
    const url= 'Home/ViewFunctionality';
    return this.get(url);
  }

  private ReturnResponseData(response: any){
    return response;
  }
  private handleError(error: any ){
    return throwError(error);
  }

}
