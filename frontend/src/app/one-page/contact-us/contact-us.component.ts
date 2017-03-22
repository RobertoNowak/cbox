import { Component, OnInit, trigger, state, style, transition, animate, keyframes, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../language.service';
import { StateService } from '../../state.service';
import { GeneralService } from '../../general.service';
import { OnePageService } from '../one-page.service';

import { ContactMessage } from '../../model/contact_message.type';

declare var jQuery:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public errorMessage = "";
  public successMessage = "";
  public model:ContactMessage;

  constructor(public lang: LanguageService, public router: Router, public appState: StateService, public generalService: GeneralService, public onePageService:OnePageService) {
  this.appState.set("one_page_menu_selected", 7);
  this.model = new ContactMessage();
 }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  sendContactMessage(contactForm){
    if(!contactForm.form.valid)
    {
      this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
      return;
    }
    console.log(this.model);
    // this.model.image = this.image_data.image;
    // this.model.birthday = jQuery('#input-birthday').val();
    this.appState.setLoading(this.tr("LOADING_TEXT"));
    this.onePageService.sendContactMessage(this.model).subscribe(
     result => {
       if(result)
       {
         this.successMessage = this.tr("SUCCESS_MESSAGE");
         this.errorMessage = "";
       }
       else
       {
         this.errorMessage = this.tr("SENT_FAILED");//"Please check your email and password again.";
       }
       this.appState.closeLoading();
     });
  }

  tr(tran: string): string
  {
    return this.lang.tr("contact." + tran);
  }

}
