import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
//import { functionalityForm } from '../add-functionality/add-functionality.component';

@Component({
  selector: 'app-edit-functionality',
  templateUrl: './edit-functionality.component.html',
  styleUrls: ['./edit-functionality.component.scss']
})
export class EditFunctionalityComponent implements OnInit{
  editFunctionalityForm: functionalityForm = new functionalityForm();

  @ViewChild("functionalityForm")
  functionalityForm!: NgForm;

  isSubmitted: boolean = false;
  functionalityId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) {}

    ngOnInit(): void {
      this.functionalityId = this.route.snapshot.params['functionalityId'];
      this.getFunctionalityDetailById();
    }

    getFunctionalityDetailById() {
      this.httpProvider.getFunctionalityDetailById(this.functionalityId).subscribe((data: any) => {
        if(data != null && data.body != null) {
          var resultData = data.body;
          if(resultData) {
            this.editFunctionalityForm.Id = resultData.id
            this.editFunctionalityForm.Name = resultData.name;
            this.editFunctionalityForm.Description = resultData.description;
            this.editFunctionalityForm.Type = resultData.type;
            this.editFunctionalityForm.Note = resultData.note;
          }
        }
      }, (error: any)=>{});
    }
    EditFunctionality(isValid: any) {
      this.isSubmitted = true;
      if(isValid) {
        this.httpProvider.saveFunctionality(this.editFunctionalityForm).subscribe(async data =>{
          if(data != null && data.body != null) {
            var resultData = data.body;
            if(resultData != null && resultData.isSuccess){
              if(resultData != null && resultData.isSuccess) {
                this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/Home']);
                }, 500);
              }
            }
          }
        }, async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
      }
    }

}

export class functionalityForm {
  Id: number = 0;
  Name: string = "";
  Description: string ="";
  Type: string ="";
  Note: string ="";
}
