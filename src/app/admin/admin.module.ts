import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { adminRoutes } from './admin.routes';
import { AdminGuard } from './guards/admin.guard';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { BankAccountEditComponent } from './bank-account/bank-account-edit/bank-account-edit.component';
import { BankAccountListComponent } from './bank-account/bank-account-list/bank-account-list.component';
import { BankAccountService } from './services/bank-account.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    adminRoutes
  ],
  declarations: [DashBoardComponent, CustomerListComponent, CustomerEditComponent, BankAccountEditComponent, BankAccountListComponent],
  providers: [AdminGuard, BankAccountService, CustomerService]

})
export class AdminModule { }
