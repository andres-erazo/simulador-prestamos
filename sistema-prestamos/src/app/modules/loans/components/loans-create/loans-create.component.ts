import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loans-create',
  templateUrl: './loans-create.component.html',
  styleUrls: ['./loans-create.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LoansCreateComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoansCreateComponent),
      multi: true
    }
  ],
})
export class LoansCreateComponent implements ControlValueAccessor,  OnInit {

  /**
   * valor maximo
   *
   * @memberof LoansCreateComponent
   */
  @Input() max: number = 100000;

  /**
   * valor minimo
   *
   * @memberof LoansCreateComponent
   */
  @Input() min: number = 10000;

  /**
   * step valor
   *
   * @memberof LoansCreateComponent
   */
   @Input() step: number = 5000;

   /**
   * Mostrar label slider
   *
   * @memberof LoansCreateComponent
   */
    @Input() thumbLabel: boolean = false;

  /**
   * Monto actual
   *
   * @memberof LoansCreateComponent
   */
  ammount = 0;



  form!: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): any {
    return this.form.value;
  }

  set value(value: any) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  get confirmPasswordControl() {
    return this.form.controls.confirmPassword;
  }

  constructor() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = (val: any) => {
    console.log(val)
  };
  onTouched: any = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(val:any) {
    console.log(val, "aqui")
    if (val) {
      this.ammount = val;
    }

    if (val === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { passwords: { valid: false } };
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        inputRequestValue: new FormControl (['', Validators.required])
      },
    );

    this.subscriptions.push(
      this.form.valueChanges.subscribe((value:any) => {
        this.ammount = value.inputRequestValue
        this.onChange(value);
        this.onTouched();
      })
    );
  }


}
