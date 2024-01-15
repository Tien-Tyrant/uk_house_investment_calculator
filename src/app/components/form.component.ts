import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";


@Component({
    selector: 'house-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class FormComponent {
    buyingTypeEnumCtrl = this.fb.control('', Validators.required);
    propertyPriceCtrl = this.fb.control<number>(400000, Validators.required);
    depositCtrl = this.fb.control<number>(100000, Validators.required);
    interestRateCtrl = this.fb.control<number>(2.5, Validators.required);
    repaymentYearCtrl = this.fb.control<number>(25, Validators.required);

    userForm = this.fb.group({
        buyingType: this.buyingTypeEnumCtrl,
        propertyPrice: this.propertyPriceCtrl,
        deposit: this.depositCtrl,
        interestRate: this.interestRateCtrl,
        repaymentYear: this.repaymentYearCtrl
    });

    constructor(private fb: FormBuilder) {

    }

    check(): void {
        let formValues = this.userForm.getRawValue();
        //reference how to calculate mortage: https://onladder.co.uk/blog/how-to-calculate-mortgage-repayments/
        let propertyPrice = formValues.propertyPrice?? 0;
        let deposit = formValues.deposit?? 0;
        let principle = propertyPrice - deposit; 
        let interestRatePerMonth = (formValues.interestRate??0) /(100* 12);
        let numberOfPayments = (formValues.repaymentYear??0) * 12;

        let pow = Math.pow(1+interestRatePerMonth, numberOfPayments);
        let payment = principle * interestRatePerMonth * pow /(pow -1);
        console.log(payment);
    }
}