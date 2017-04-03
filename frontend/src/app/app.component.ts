import { Component, ViewContainerRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from './state.service';
import { GeneralService } from './general.service';
import { AuthenticateService, USER_SIGNED_INFO } from './authenticate.service';
import { LanguageService } from './language.service';
import { environment } from '../environments';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public errorMessage: string = "";
  private viewContainerRef: ViewContainerRef;
  private SERVER_URL = environment.serverUrl;
  private USER_SIGNED_INFO = USER_SIGNED_INFO;
  constructor(private router: Router, public appState: StateService, public generalService: GeneralService, public authService: AuthenticateService, public lang:LanguageService, viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  ngOnInit() {
  }
  tr(tran: string): string
  {
    return this.lang.tr("app." + tran);
  }
  toggleChat(){
    this.appState.set('is_chat_window_open', !this.appState.get('is_chat_window_open'));
  }
}
