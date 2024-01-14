import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";


@Component({
    selector: 'house-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class FormComponent {

    housePriceCtrl = this.fb.control('', Validators.required);
    depositCtrl = this.fb.control('', Validators.required);
    interestRateCtrl = this.fb.control('', Validators.required);
    userForm = this.fb.group({
        housePrice: this.housePriceCtrl,
        deposit: this.depositCtrl,
        interestRate: this.interestRateCtrl
    });

    constructor(private fb: FormBuilder) {

    }

    check(): void {
        console.log(this.userForm.value);
    }
}