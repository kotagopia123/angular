import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;
  cities: any = [{id: '', name: 'Select'}, {id: 1, name: 'Piduguralla'}, {id: 2, name: 'Guntur'}];
  states: any = [{id: '', name: 'Select'}, {id: 1, name: 'AP'}, {id: 2, name: 'TG'}];
  countries: any = [{id: '', name: 'Select'}, {id: 1, name: 'India'}, {id: 2, name: 'USA'}];


  constructor(private fb: FormBuilder, private userservice: UserService , private router: Router) {} 

  ngOnInit(): void { 

    const regData = {}
    this.createForm(null);
    this.userservice.getRegData().subscribe((res: any) => {
      this.regForm.patchValue({...res});
      res.companies.forEach((company: any, i: number) => {
        this.companies.push(this.getNewCompany());
        this.companies.at(i).patchValue({...company});
      });
    });  
    // this.regForm.get('email')?.valueChanges.subscribe((value: string) => {
    //   console.log(value);
    // });
    this.regForm.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
  }
  validateEmail(event: any) {
    // console.log(event.target.value);
  }
  addNewControl(event: any) {
    if(event.target.checked) {
      this.regForm.get('email')?.disable();
      this.regForm.get('desc')?.patchValue('this is profile summary desc');
      this.regForm.get('age')?.addValidators(Validators.required);
      this.regForm.addControl('newDetails', this.fb.control('', [Validators.required]));
    } else {
      this.regForm.get('email')?.enable();
      this.regForm.get('desc')?.patchValue('');
      this.regForm.get('age')?.removeValidators(Validators.required);
      this.regForm.removeControl('newDetails')
    }
  }
  createForm(regData: any) {
    this.regForm = this.fb.group({
      firstName: [regData?.firstName, [Validators.required]],
      lastName: [regData?.lastName, [Validators.required]],
      email: [regData?.email, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      gender: [regData?.gender, [Validators.required]],
      hobbies: ['', [Validators.required]],
      age: [regData?.age, [CustomValidators.ageRangeValidator(18, 30)], []],
      dob: [null, [Validators.required]],
      phone: [null, [Validators.pattern(/\d{10}/)]],
      showNewControl: [false],
      address: this.fb.group({
          address1: [regData?.address?.address1, [Validators.required]],
          address2: [regData?.address?.address2],
          city: [regData?.address.city, [Validators.required]],
          state: [regData?.address.state, [Validators.required]],
          country: [regData?.address.country, [Validators.required]]
      }),
      desc: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      companies: this.fb.array([])
    });
  } 

  getNewCompany() {
    return this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }
  addNew() {
    this.companies.push(this.getNewCompany());
    console.log('testing');
  } 

  getAddressFormControl(key: string): any {
    return this.regForm.get('address')?.get(key);
  }
  get companies() {
    return this.regForm.get('companies') as FormArray;
  }

  getControl(key: string): any {
    return this.regForm.get(key);
  }

  deleteCompany(i: number) {
    this.companies.removeAt(i);
  } 

  save() {
    console.log(this.regForm.value);
    const regData = this.regForm.value;
    const data = {
      fName: regData.firstName,
      lName: regData.lastName,
      
    }
  }
  
  }


