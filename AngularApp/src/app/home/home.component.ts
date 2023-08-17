import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'ng-modal-confrim',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}
const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  closeResault = '';
  functionalityList: any = [];
  constructor(private router: Router, private modalServices: NgbModal, private toastr: ToastrService, private httpProvider: HttpProviderService) {}

  ngOnInit(): void {
    this.getAllFunctionality();
  }
  async getAllFunctionality() {
    this.httpProvider.getAllFunctionality().subscribe((data: any) => {
      if(data != null && data.body != null) {
        var resultData = data.body;
        if(resultData) {
          this.functionalityList = resultData;
        }
      }
    },
    (error: any) => {
      if(error) {
        if(error.status == 404) {
          if(error.error && error.error.message){
            this.functionalityList = [];
          }
        }
      }
    });
  }
  AddFunctionality() {
    this.router.navigate(['AddFunctionality']);
  }

  deleteFunctionalityConfirmation(functionality: any){
    this.modalServices.open(MODALS['deleteModal'],
    {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.deleteFunctionality(functionality);
    },
    (reason) => {});
  }

  deleteFunctionality(functionality: any) {
    this.httpProvider.deleteFunctionalityById(functionality.id).subscribe((data: any) => {
      if(data != null && data.body != null) {
        var resultData = data.body;
        if(resultData != null && resultData.isSuccess) {
          this.toastr.success(resultData.message);
          this.getAllFunctionality();
        }
      }
    },
    (error:any) => {});
  }


  

}
