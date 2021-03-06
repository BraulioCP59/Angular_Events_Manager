import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
  `]
})
export class ProfileComponent implements OnInit
{
  profileForm: FormGroup = {} as FormGroup
  private firstName:FormControl = {} as FormControl 
  private lastName:FormControl = {} as FormControl
  

  constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr)
  {

  }

  ngOnInit():void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }

  cancel():void
  {
    this.router.navigate(['events']);
  }

  saveProfile(profileForm:any):void
  {
    if(this.profileForm.valid)
    {
      this.authService.updateUser(profileForm.firstName, profileForm.lastName);
      this.toastr.success('Profile Saved');
    }
  }

  validateFirstName()
  {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName()
  {
    return this.lastName.valid || this.lastName.untouched;
  }

}

//profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched
//profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched