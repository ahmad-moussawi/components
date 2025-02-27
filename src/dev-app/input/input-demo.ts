/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  FloatLabelType,
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import {ErrorStateMatcher, ThemePalette} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {FormFieldExamplesModule} from '@angular/components-examples/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'input-demo',
  templateUrl: 'input-demo.html',
  styleUrls: ['input-demo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    FormFieldExamplesModule,
    ReactiveFormsModule,
  ],
})
export class InputDemo {
  color: ThemePalette = 'primary';
  floatingLabel: FloatLabelType = 'auto';
  requiredField: boolean;
  disableTextarea: boolean;
  hideRequiredMarker: boolean;
  ctrlDisabled = false;
  textareaNgModelValue: string;
  textareaAutosizeEnabled = false;
  appearance: MatFormFieldAppearance = 'fill';
  prefixSuffixAppearance: MatFormFieldAppearance = 'fill';
  placeholderTestControl = new FormControl('', Validators.required);
  options: string[] = ['One', 'Two', 'Three'];
  showSecondPrefix = false;
  showPrefix = true;
  showHidden = false;
  hiddenLabel = 'Label';
  hiddenAppearance: MatFormFieldAppearance = 'outline';

  name: string;
  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  errorMessageExample4: string;
  dividerColorExample1: string;
  dividerColorExample2: string;
  dividerColorExample3: string;
  items: {value: number}[] = [{value: 10}, {value: 20}, {value: 30}, {value: 40}, {value: 50}];
  rows = 8;
  formControl = new FormControl('hello', Validators.required);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  delayedFormControl = new FormControl('');
  model = 'hello';
  isAutofilled = false;
  customAutofillStyle = true;

  legacyAppearance: string;
  standardAppearance: string;
  fillAppearance: string;
  outlineAppearance: string;

  constructor() {
    setTimeout(() => this.delayedFormControl.setValue('hello'), 100);
  }

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({value: ++max});
    }
  }

  customErrorStateMatcher: ErrorStateMatcher = {
    isErrorState: (control: FormControl | null) => {
      if (control) {
        const hasInteraction = control.dirty || control.touched;
        const isInvalid = control.invalid;

        return !!(hasInteraction && isInvalid);
      }

      return false;
    },
  };

  togglePlaceholderTestValue() {
    this.placeholderTestControl.setValue(this.placeholderTestControl.value === '' ? 'Value' : '');
  }

  togglePlaceholderTestTouched() {
    this.placeholderTestControl.touched
      ? this.placeholderTestControl.markAsUntouched()
      : this.placeholderTestControl.markAsTouched();
  }

  parseNumber(value: string): number {
    return Number(value);
  }
}
