import { Component, Input, OnInit, Type, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { IfStmt } from '@angular/compiler';

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
  addFunctionalityForm: functionalityForm = new functionalityForm();
  isHiddenMain: boolean = false;
  isHidden: boolean = true;
  showNotification: boolean = false;
  notificationMessage: string = '';
  Id: Number = 0;
  viewHidden: boolean = true;
  
  isSubmitted: boolean = false;
  closeResault = '';
   @Input() functionalityList: any[] = [];
   @Input() functionalityId: any[] = [];

  constructor(
    private router: Router,
    private modalServices: NgbModal,
    private toastr: ToastrService,
    private httpProvider: HttpProviderService
    ) { }

    @Output() functionalityListChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.functionalityList = [{
      Id: 1,
      Name: "Szybka Rezerwacja",
      Description: "Umożliwia klientom dokonanie natychmiastowej rezerwacji usług lub produktów bez konieczności rejestracji, zwiększając konwersje i usprawniając proces zakupowy.",
      Type: "Usprawnienie procesu zakupowego.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Id: 2,
      Name: "Indywidualne Rekomendacje",
      Description: "Wykorzystuje algorytmy uczenia maszynowego do analizy zachowań klientów i dostarczania spersonalizowanych rekomendacji produktów lub treści, zwiększając zaangażowanie i sprzedaż.",
      Type: "Udoskonalenie obsługi klienta.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Id: 3,
      Name: "Wirtualne Przymierzanie",
      Description: "Tworzy wirtualne środowisko, w którym klienci mogą przymierzyć odzież lub akcesoria za pomocą rzeczywistości rozszerzonej, poprawiając interakcję ze sklepem internetowym i redukując zwroty.",
      Type: "Innowacyjne rozwiązanie technologiczne.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Id: 4,
      Name: "Edit",
      Description: "Edit",
      Type: "Edit",
      Note: "Edit"
    }];
  };
  
  goToAddFunctionality() {
    //this.router.navigate(['AddFunctionality']);
    
  }

  showViewFunctionality(){
    this.viewHidden = !this.viewHidden;
  }

  viewFunctionality() {
    this.isHiddenMain = !this.isHiddenMain;
    this.isHidden = !this.isHidden;
  }


  // deleteFunctionalityConfirmation(functionality: any){
  //   this.modalServices.open(MODALS['deleteModal'],
  //   {
  //     ariaLabelledBy: 'modal-basic-title'
  //   }).result.then((result) => {
  //     this.deleteFunctionality(functionality);
  //   },
  //   (reason) => {});
  // }

  AddFunctionality(isValid: any){
    this.isSubmitted = true;
    if(isValid) {
      this.functionalityList.push(this.addFunctionalityForm);
      console.log;
      this.showNotification = true;
      this.notificationMessage = 'Dodano poprawnie do listy!';
      this.functionalityListChange.emit(this.functionalityList);      
    }
  }

  // deleteFunctionality(functionality: any) {
  //   this.httpProvider.deleteFunctionalityById(functionality.id).subscribe((data: any) => {
  //     if(data != null && data.body != null) {
  //       var resultData = data.body;
  //       if(resultData != null && resultData.isSuccess) {
  //         this.toastr.success(resultData.message);
  //         //this.getAllFunctionality();
  //       }
  //     }
  //   },
  //   (error:any) => {});
  // }
}
export class functionalityForm {
  Id: number = 0;
  Name: String = "";
  Description: String = "";
  Type: String = "";
  Note: string = "";

}