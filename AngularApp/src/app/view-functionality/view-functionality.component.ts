import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-functionality',
  templateUrl: './view-functionality.component.html',
  styleUrls: ['./view-functionality.component.scss']
})
export class ViewFunctionalityComponent implements OnInit {
  
  functionalityId: any;
  functionalityDetail: any=[];

  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) {}

  ngOnInit(): void {
    this.functionalityId = this.route.snapshot.params['functionalityId'];
    this.getFunctionalityDetailById();
  }

  getFunctionalityDetailById() {
    this.httpProvider.getFunctionalityDetailById(this.functionalityId).subscribe((data : any ) => {
      if(data != null && data.body != null) {
        var resultData = data.body;
        if(resultData) {
          this.functionalityDetail = resultData;
        }
      }
    }, 
    (error : any) => {});
  }

}
