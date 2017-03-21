import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../language.service';
import { StateService } from '../../../state.service';
import { AuthenticateService, USER_TYPE } from '../../../authenticate.service';
import { ProfileService } from '../profile.service';
import { Box } from '../../..//model/box.type';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public errorMessage: string = "";
  public successMessage: string = "";
  public model: any = {
    curPassword: "",
    newPassword: "",
    confirmPassword: ""
  };
  constructor(public authenticate:AuthenticateService, public lang: LanguageService, public router: Router, public appState: StateService, public profileService: ProfileService) {
  }
  
  ngOnInit() {
  }

  updatePassword(profileForm){
    if(!profileForm.form.valid)
    {
      this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
      return;
    }
    if(this.model.newPassword.length < 6)
    {
      this.errorMessage = "The password must be at least 6 characters.";
      return;
    }
    if(this.model.newPassword != this.model.confirmPassword){
      this.errorMessage = "Confirm Password doesn't match with new password.";
      return;
    }
    this.appState.setLoading(this.tr("LOADING_TEXT"));
    this.profileService.updatePassword(this.model).subscribe(
     result => {
       if(result)
       {
         this.successMessage = "Your password has been successfully updated.";
         this.errorMessage = "";
       }
       else
       {
         this.errorMessage = "Please check your current password.";
       }
       this.appState.closeLoading();
     });
  }

  tr(tran: string): string
  {
    return this.lang.tr("profile." + tran);
  }
}
