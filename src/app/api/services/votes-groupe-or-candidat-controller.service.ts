/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResultatByEvent } from '../models/resultat-by-event';
import { ResultGroupeByEvent } from '../models/result-groupe-by-event';
import { Vote_candidats } from '../models/vote-_candidats';
import { Vote_groupes } from '../models/vote-_groupes';

/**
 * Votes Groupe Or Candidat Controller
 */
@Injectable({
  providedIn: 'root',
})
class VotesGroupeOrCandidatControllerService extends __BaseService {
  static readonly getResultatUsingGETPath = '/resultat/{eventId}';
  static readonly getResultgroupByEventUsingGETPath = '/resultatGroupe/{eventId}';
  static readonly createOrUpdateVoteCandidatUsingPOSTPath = '/vote_candidat';
  static readonly getNoteCandidatByAllInfoUsingGETPath = '/vote_candidat/{evenementId}/{juryId}/{candidatId}/{critereId}';
  static readonly getVoteCandidatByIdUsingGETPath = '/vote_candidat/{voteCandidatID}';
  static readonly deleteCandidatUsingDELETEPath = '/vote_candidat/{voteCandidatID}';
  static readonly getAllVoteCandidatsUsingGETPath = '/vote_candidats';
  static readonly createOrUpdateVoteGroupeUsingPOSTPath = '/vote_groupe';
  static readonly getNoteGroupeByAllInfoUsingGETPath = '/vote_groupe/{evenementId}/{juryId}/{groupeId}/{critereId}';
  static readonly getVoteGroupeByIdUsingGETPath = '/vote_groupe/{voteGroupeID}';
  static readonly deleteGroupeUsingDELETEPath = '/vote_groupe/{voteGroupeID}';
  static readonly getAllVoteGroupesUsingGETPath = '/vote_groupes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getResultat
   * @param eventId eventId
   * @return OK
   */
  getResultatUsingGETResponse(eventId: number): __Observable<__StrictHttpResponse<Array<ResultatByEvent>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resultat/${encodeURIComponent(eventId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResultatByEvent>>;
      })
    );
  }
  /**
   * getResultat
   * @param eventId eventId
   * @return OK
   */
  getResultatUsingGET(eventId: number): __Observable<Array<ResultatByEvent>> {
    return this.getResultatUsingGETResponse(eventId).pipe(
      __map(_r => _r.body as Array<ResultatByEvent>)
    );
  }

  /**
   * getResultgroupByEvent
   * @param eventId eventId
   * @return OK
   */
  getResultgroupByEventUsingGETResponse(eventId: number): __Observable<__StrictHttpResponse<Array<ResultGroupeByEvent>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resultatGroupe/${encodeURIComponent(eventId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResultGroupeByEvent>>;
      })
    );
  }
  /**
   * getResultgroupByEvent
   * @param eventId eventId
   * @return OK
   */
  getResultgroupByEventUsingGET(eventId: number): __Observable<Array<ResultGroupeByEvent>> {
    return this.getResultgroupByEventUsingGETResponse(eventId).pipe(
      __map(_r => _r.body as Array<ResultGroupeByEvent>)
    );
  }

  /**
   * createOrUpdateVoteCandidat
   * @param vote_candidats vote_candidats
   * @return OK
   */
  createOrUpdateVoteCandidatUsingPOSTResponse(voteCandidats: Vote_candidats): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = voteCandidats;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/vote_candidat`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * createOrUpdateVoteCandidat
   * @param vote_candidats vote_candidats
   * @return OK
   */
  createOrUpdateVoteCandidatUsingPOST(voteCandidats: Vote_candidats): __Observable<{}> {
    return this.createOrUpdateVoteCandidatUsingPOSTResponse(voteCandidats).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getNoteCandidatByAllInfo
   * @param params The `VotesGroupeOrCandidatControllerService.GetNoteCandidatByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `evenementId`: evenementId
   *
   * - `critereId`: critereId
   *
   * - `candidatId`: candidatId
   *
   * @return OK
   */
  getNoteCandidatByAllInfoUsingGETResponse(params: VotesGroupeOrCandidatControllerService.GetNoteCandidatByAllInfoUsingGETParams): __Observable<__StrictHttpResponse<Vote_candidats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_candidat/${encodeURIComponent(params.evenementId)}/${encodeURIComponent(params.juryId)}/${encodeURIComponent(params.candidatId)}/${encodeURIComponent(params.critereId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vote_candidats>;
      })
    );
  }
  /**
   * getNoteCandidatByAllInfo
   * @param params The `VotesGroupeOrCandidatControllerService.GetNoteCandidatByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `evenementId`: evenementId
   *
   * - `critereId`: critereId
   *
   * - `candidatId`: candidatId
   *
   * @return OK
   */
  getNoteCandidatByAllInfoUsingGET(params: VotesGroupeOrCandidatControllerService.GetNoteCandidatByAllInfoUsingGETParams): __Observable<Vote_candidats> {
    return this.getNoteCandidatByAllInfoUsingGETResponse(params).pipe(
      __map(_r => _r.body as Vote_candidats)
    );
  }

  /**
   * getVoteCandidatById
   * @param voteCandidatID voteCandidatID
   * @return OK
   */
  getVoteCandidatByIdUsingGETResponse(voteCandidatID: number): __Observable<__StrictHttpResponse<Vote_candidats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_candidat/${encodeURIComponent(voteCandidatID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vote_candidats>;
      })
    );
  }
  /**
   * getVoteCandidatById
   * @param voteCandidatID voteCandidatID
   * @return OK
   */
  getVoteCandidatByIdUsingGET(voteCandidatID: number): __Observable<Vote_candidats> {
    return this.getVoteCandidatByIdUsingGETResponse(voteCandidatID).pipe(
      __map(_r => _r.body as Vote_candidats)
    );
  }

  /**
   * deleteCandidat
   * @param voteCandidatID voteCandidatID
   * @return OK
   */
  deleteCandidatUsingDELETEResponse(voteCandidatID: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/vote_candidat/${encodeURIComponent(voteCandidatID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * deleteCandidat
   * @param voteCandidatID voteCandidatID
   * @return OK
   */
  deleteCandidatUsingDELETE(voteCandidatID: number): __Observable<{}> {
    return this.deleteCandidatUsingDELETEResponse(voteCandidatID).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllVoteCandidats
   * @return OK
   */
  getAllVoteCandidatsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Vote_candidats>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_candidats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vote_candidats>>;
      })
    );
  }
  /**
   * getAllVoteCandidats
   * @return OK
   */
  getAllVoteCandidatsUsingGET(): __Observable<Array<Vote_candidats>> {
    return this.getAllVoteCandidatsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Vote_candidats>)
    );
  }

  /**
   * createOrUpdateVoteGroupe
   * @param vote_groupes vote_groupes
   * @return OK
   */
  createOrUpdateVoteGroupeUsingPOSTResponse(voteGroupes: Vote_groupes): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = voteGroupes;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/vote_groupe`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * createOrUpdateVoteGroupe
   * @param vote_groupes vote_groupes
   * @return OK
   */
  createOrUpdateVoteGroupeUsingPOST(voteGroupes: Vote_groupes): __Observable<{}> {
    return this.createOrUpdateVoteGroupeUsingPOSTResponse(voteGroupes).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getNoteGroupeByAllInfo
   * @param params The `VotesGroupeOrCandidatControllerService.GetNoteGroupeByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `groupeId`: groupeId
   *
   * - `evenementId`: evenementId
   *
   * - `critereId`: critereId
   *
   * @return OK
   */
  getNoteGroupeByAllInfoUsingGETResponse(params: VotesGroupeOrCandidatControllerService.GetNoteGroupeByAllInfoUsingGETParams): __Observable<__StrictHttpResponse<Vote_groupes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_groupe/${encodeURIComponent(params.evenementId)}/${encodeURIComponent(params.juryId)}/${encodeURIComponent(params.groupeId)}/${encodeURIComponent(params.critereId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vote_groupes>;
      })
    );
  }
  /**
   * getNoteGroupeByAllInfo
   * @param params The `VotesGroupeOrCandidatControllerService.GetNoteGroupeByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `groupeId`: groupeId
   *
   * - `evenementId`: evenementId
   *
   * - `critereId`: critereId
   *
   * @return OK
   */
  getNoteGroupeByAllInfoUsingGET(params: VotesGroupeOrCandidatControllerService.GetNoteGroupeByAllInfoUsingGETParams): __Observable<Vote_groupes> {
    return this.getNoteGroupeByAllInfoUsingGETResponse(params).pipe(
      __map(_r => _r.body as Vote_groupes)
    );
  }

  /**
   * getVoteGroupeById
   * @param voteGroupeID voteGroupeID
   * @return OK
   */
  getVoteGroupeByIdUsingGETResponse(voteGroupeID: number): __Observable<__StrictHttpResponse<Vote_groupes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_groupe/${encodeURIComponent(voteGroupeID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vote_groupes>;
      })
    );
  }
  /**
   * getVoteGroupeById
   * @param voteGroupeID voteGroupeID
   * @return OK
   */
  getVoteGroupeByIdUsingGET(voteGroupeID: number): __Observable<Vote_groupes> {
    return this.getVoteGroupeByIdUsingGETResponse(voteGroupeID).pipe(
      __map(_r => _r.body as Vote_groupes)
    );
  }

  /**
   * deleteGroupe
   * @param voteGroupeID voteGroupeID
   * @return OK
   */
  deleteGroupeUsingDELETEResponse(voteGroupeID: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/vote_groupe/${encodeURIComponent(voteGroupeID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * deleteGroupe
   * @param voteGroupeID voteGroupeID
   * @return OK
   */
  deleteGroupeUsingDELETE(voteGroupeID: number): __Observable<{}> {
    return this.deleteGroupeUsingDELETEResponse(voteGroupeID).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllVoteGroupes
   * @return OK
   */
  getAllVoteGroupesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Vote_groupes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vote_groupes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vote_groupes>>;
      })
    );
  }
  /**
   * getAllVoteGroupes
   * @return OK
   */
  getAllVoteGroupesUsingGET(): __Observable<Array<Vote_groupes>> {
    return this.getAllVoteGroupesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Vote_groupes>)
    );
  }
}

module VotesGroupeOrCandidatControllerService {

  /**
   * Parameters for getNoteCandidatByAllInfoUsingGET
   */
  export interface GetNoteCandidatByAllInfoUsingGETParams {

    /**
     * juryId
     */
    juryId: number;

    /**
     * evenementId
     */
    evenementId: number;

    /**
     * critereId
     */
    critereId: number;

    /**
     * candidatId
     */
    candidatId: number;
  }

  /**
   * Parameters for getNoteGroupeByAllInfoUsingGET
   */
  export interface GetNoteGroupeByAllInfoUsingGETParams {

    /**
     * juryId
     */
    juryId: number;

    /**
     * groupeId
     */
    groupeId: number;

    /**
     * evenementId
     */
    evenementId: number;

    /**
     * critereId
     */
    critereId: number;
  }
}

export { VotesGroupeOrCandidatControllerService }
