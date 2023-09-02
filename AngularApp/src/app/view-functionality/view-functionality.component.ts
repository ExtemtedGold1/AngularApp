import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-functionality',
  templateUrl: './view-functionality.component.html',
  styleUrls: ['./view-functionality.component.scss']
})
export class ViewFunctionalityComponent implements OnInit {
  @Input() functionalityList: any[] = [];
  @Input() functionalityId: any;

  functionalityDetail: any;

  constructor(
    private route: ActivatedRoute,
    private webApiService: WebApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.functionalityDetail=this.functionalityList.find(item => item.Id === this.functionalityId);
    //this.functionalityDetail=this.functionalityList[this.functionalityId];
    console.log(this.functionalityDetail);
    //console.log(this.functionalityList);
    //console.log(this.functionalityId);
    

  }
}
