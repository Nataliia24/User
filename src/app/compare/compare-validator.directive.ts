import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidator(controlnameToCompare: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length ===0) {
      return null;
    }

    const controlToCompare = c.root.get(controlnameToCompare);
    if (controlToCompare) {
const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
  c.updateValueAndValidity();
  subscription.unsubscribe();
});
    }
    return controlToCompare && controlToCompare.value !== c.value ? {'compare': true}: null;
  };
}


@Directive({
  selector: '[compare]',
  providers: [{provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true}]
})
export class CompareValidatorDirective implements Validator {
  @Input('compare') controlNameCompare: string;

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === null || c.value.length ===0) {
      return null;
    }

    const controlToCompare = c.root.get(this.controlNameCompare);
    if (controlToCompare) {
const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
  c.updateValueAndValidity();
  subscription.unsubscribe();
});
    }
    return controlToCompare && controlToCompare.value !== c.value ? {'compare': true}: null;
  }

}
