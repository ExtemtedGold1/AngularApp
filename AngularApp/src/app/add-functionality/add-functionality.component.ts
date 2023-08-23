import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-functionality',
  templateUrl: './add-functionality.component.html',
  styleUrls: ['./add-functionality.component.scss']
})
export class AddFunctionalityComponent implements OnInit {
  addFunctionalityForm: functionalityForm = new functionalityForm();

  @ViewChild("functionalityForm")
  functionalityForm!: NgForm;
  isSubmitted: boolean = false;


  constructor(
    private router: Router,
    private httpProvider: HttpProviderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

    
  AddFunctionality(isValid: any){
    this.isSubmitted = true;
    if(isValid) {
      this.httpProvider.saveFunctionality(this.addFunctionalityForm).subscribe(async data => {
        if(data != null && data.body != null ){
          if(data != null && data.body != null ) {
            var resultData = data.body;
            if(resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              //this.addFunctionalityToList(resultData.data);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      }, 
      async error => {
        this.toastr.error(error.message);
        setTimeout(() => {
          this.router.navigate(['/Home']);
        }, 500);
      });
    }
  }
}
  export class functionalityForm {
      Name: String = "";
      Description: String = "";
      Type: String = "";
      Note: string = "";

  }
