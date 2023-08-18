import { Component, Input, OnInit, Type } from '@angular/core';
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
  closeResault = '';
  functionalityList: any = [];
  constructor(
    private router: Router,
    private modalServices: NgbModal,
    private toastr: ToastrService,
    private httpProvider: HttpProviderService) {}

  ngOnInit(): void {
    this.functionalityList = [{
      Name: "Szybka Rezerwacja",
      Description: "Umożliwia klientom dokonanie natychmiastowej rezerwacji usług lub produktów bez konieczności rejestracji, zwiększając konwersje i usprawniając proces zakupowy.",
      Type: "Usprawnienie procesu zakupowego.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Name: "Indywidualne Rekomendacje",
      Description: "Wykorzystuje algorytmy uczenia maszynowego do analizy zachowań klientów i dostarczania spersonalizowanych rekomendacji produktów lub treści, zwiększając zaangażowanie i sprzedaż.",
      Type: "Udoskonalenie obsługi klienta.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Name: "Wirtualne Przymierzanie",
      Description: "Tworzy wirtualne środowisko, w którym klienci mogą przymierzyć odzież lub akcesoria za pomocą rzeczywistości rozszerzonej, poprawiając interakcję ze sklepem internetowym i redukując zwroty.",
      Type: "Innowacyjne rozwiązanie technologiczne.",
      Note: "Brak przypisu do Kanbana"
    },
    {
      Name: "Edit",
      Description: "Edit",
      Type: "Edit",
      Note: "Edit"
    }];
  };
  
  goToAddFunctionality() {
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
          //this.getAllFunctionality();
        }
      }
    },
    (error:any) => {});
  }
}
