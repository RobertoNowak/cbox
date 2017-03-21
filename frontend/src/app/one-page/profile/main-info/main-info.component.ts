import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { LanguageService } from '../../../language.service';
import { StateService } from '../../../state.service';
import { AuthenticateService, USER_TYPE, USER_SIGNED_INFO } from '../../../authenticate.service';
import { ProfileService } from '../profile.service';
import { RegisterUser } from '../../..//model/user_register.type';
// import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import 'rxjs/add/operator/toPromise';
declare var jQuery:any;

@Component({
  selector: 'app-main-info',
  templateUrl: 'main-info.component.html',
  styleUrls: ['main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  @ViewChild('image_box_dialog') image_box_dialog: any;
    // cropper:ImageCropperComponent;
  public image_data:any = null;
  public errorMessage: string = "";
  public successMessage: string = "";
  // public cropperSettings: CropperSettings;
  public temp_image_origin: any = null;
  public temp_image_data: any;
  public model: any = {};
  public USER_TYPE: any = USER_TYPE;
  public USER_SIGNED_INFO: any = USER_SIGNED_INFO;
  constructor(public authService:AuthenticateService, public lang: LanguageService, public router: Router, public appState: StateService, public profileService: ProfileService) {
   if(this.authService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN){
      this.model = JSON.parse(JSON.stringify(this.authService.currentUser));
      jQuery('#profile-image-viewer').attr('src', this.model.image_url);
   }
   else{
     this.authService.get('/api/v1/profile').subscribe(
        (response: Response) => {
              let res:any = response.json();
              if(res.success){
                this.model = res.data;
                jQuery('#input-birthday').val(this.model.birthday);
                console.log(this.model);
                jQuery('#profile-image-viewer').attr('src', this.model.image_url);
              }
        },
        error => {
          this.router.navigate(['/home']);
        }
      );
   }
   this.temp_image_data = {};
  }

  fileChange(input){
    if(input.files.length < 1)
      return;
    if(input.files[0].size > 4 * 1024 * 1024)
    {
      this.errorMessage = "You can't upload image which is larger than 4MB.";
      this.image_box_dialog.hide();
      return;
    }
    let file:File = input.files[0];
    this.temp_image_origin = file;
    var img = new Image;
    img.onload = function()
    {
        jQuery('#cropper').cropper('replace', img.src);
        jQuery('#cropper').cropper('crop');
        // .cropper('clear');
        // window.URL.revokeObjectURL(img.src);
    }
    img.src = window.URL.createObjectURL(file);
  }

  saveImage(){
    let canvasData = jQuery('#cropper').cropper('getCroppedCanvas');
    // this.image_data = canvasData.toDataURL();
    this.model.image_url = canvasData.toDataURL();
    let me = this;
    canvasData.toBlob(function(blob){
      me.model.image = me.blobToFile(blob, "image");
    }, "image/jpeg", 0.75);
    jQuery('#profile-image-viewer').attr('src', this.model.image_url);
  }

  blobToFile(blob, name): any {
      blob.lastModifiedDate = new Date();
      blob.name = name;
      var file = new File([blob], name, {type: blob.type, lastModified: blob.lastModifiedDate});
      return file;
  };

  updateProfile(profileForm){
    this.model.birthday = jQuery('#input-birthday').val();
    if(!profileForm.form.valid || this.model.birthday == "")
    {
      this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
      return;
    }
    // this.model.image = this.image_data;
    // if(this.image_data != null && this.image_data.src != this.model.image_origin){
    //   this.model.image_origin = this.temp_image_origin;
    // }
    this.appState.setLoading(this.tr("LOADING_TEXT"));
    this.profileService.updateProfile(this.model).subscribe(
     response => {
       let result:any = response.json();
       if(result.success)
       {
         this.successMessage = this.tr("SUCCESS_MESSAGE");
         this.errorMessage = "";
         this.model.image_url = result.data.image_url;
         this.authService.validateToken();
       }
       else
       {
         this.errorMessage = this.tr("UPDATE_FAILED");//"Please check your email and password again.";
       }
       this.appState.closeLoading();
     });
  }
  ngOnInit() {
    if (jQuery().datepicker) {
        jQuery('.date-picker').datepicker({
            rtl: false,
            orientation: "left",
            autoclose: true
        });
    }
    if(this.authService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN){
      jQuery('#profile-image-viewer').attr('src', this.model.image_url);
      jQuery('#input-birthday').val(this.model.birthday);
    }
    let me = this;
    jQuery('#cropper').cropper({
      aspectRatio: 1,
      // preview: '#crop-preview-pan',
      cropend: function(e){
        // let canvasData = jQuery('#cropper').cropper('getCroppedCanvas');
        // delete me.temp_image_data.image;
        // me.temp_image_data.image = canvasData.toDataURL();
        // jQuery('#crop-preview-pan').attr('src', me.temp_image_data.image);
      },
      ready: function (e) {
        jQuery('#cropper').cropper('crop');
        console.log("ASDFASDf");
      }
    });
  }
  tr(tran: string): string
  {
    return this.lang.tr("profile." + tran);
  }
}
