/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CandidatControllerService } from './services/candidat-controller.service';
import { CommentCandidatOrGroupeControllerService } from './services/comment-candidat-or-groupe-controller.service';
import { CritereControllerService } from './services/critere-controller.service';
import { EvenementControllerService } from './services/evenement-controller.service';
import { GroupeControllerService } from './services/groupe-controller.service';
import { GroupeCandidatControllerService } from './services/groupe-candidat-controller.service';
import { JuryControllerService } from './services/jury-controller.service';
import { VotesGroupeOrCandidatControllerService } from './services/votes-groupe-or-candidat-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CandidatControllerService,
    CommentCandidatOrGroupeControllerService,
    CritereControllerService,
    EvenementControllerService,
    GroupeControllerService,
    GroupeCandidatControllerService,
    JuryControllerService,
    VotesGroupeOrCandidatControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
