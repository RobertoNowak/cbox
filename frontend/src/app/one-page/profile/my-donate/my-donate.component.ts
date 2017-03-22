import { Component, OnInit, trigger, state, style, transition, animate, keyframes, AfterViewChecked, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../language.service';
import { StateService } from '../../../state.service';
import { GeneralService } from '../../../general.service';
import { OnePageService } from '../../one-page.service';
import { ProfileService } from '../profile.service';

import { Donate } from '../../../model/donate.type';

declare var jQuery:any;

@Component({
  selector: 'app-my-donate',
  templateUrl: './my-donate.component.html',
  styleUrls: ['./my-donate.component.css']
})
export class MyDonateComponent implements OnInit {
  public errorMessage = "";
  public successMessage = "";
  public model:Donate;
  constructor(public lang: LanguageService, public router: Router, public appState: StateService, public generalService: GeneralService, public onePageService:OnePageService, public profileService: ProfileService, public elementRef: ElementRef) {
    this.model = new Donate();
    this.appState.setLoading('Loading ...');
    this.profileService.getDonate().subscribe(
     result => {
       if(result){
         this.model = profileService.myDonate;
       }
       else
         this.errorMessage = 'Donate Load Error';
       this.appState.closeLoading();
     });
  }

  ngOnInit() {
  }
  saveDonate(contactForm){
    var imageFile = jQuery(this.elementRef.nativeElement).find('.imageFile')[0];
    if(!contactForm.form.valid)
    {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }
    if(imageFile.files.length != 0)
    {
      this.model.picture = imageFile.files[0];
    }

    this.appState.setLoading('Saving...');
    this.profileService.saveDonate(this.model).subscribe(result => {
       if(result){
         this.errorMessage = "";
         this.successMessage = "Donate Successfully saved";
       }
       else
         this.errorMessage = 'Donate Save Error';
       this.appState.closeLoading();
     },
     error=>{
       
     });
  }

}
