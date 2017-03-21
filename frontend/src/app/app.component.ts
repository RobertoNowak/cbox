import { Component, ViewContainerRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from './state.service';
import { GeneralService } from './general.service';
import { LanguageService } from './language.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public errorMessage: string = "";
  private viewContainerRef: ViewContainerRef;
  constructor(private router: Router, public appState: StateService, public generalService: GeneralService, public lang:LanguageService, viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  ngOnInit() {
  }
  tr(tran: string): string
  {
    return this.lang.tr("app." + tran);
  }
}
