/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Candidats } from '../models/candidats';

/**
 * Candidat Controller
 */
@Injectable({
  providedIn: 'root',
})
class CandidatControllerService extends __BaseService {
  static readonly getCandidatByIdUsingGETPath = '/candidat/{candidatId}';
  static readonly deleteUsingDELETEPath = '/candidat/{candidatId}';
  static readonly getAllCandidatsUsingGETPath = '/candidats';
  static readonly createOrUpdateCandidatUsingPOSTPath = '/candidats';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getCandidatById
   * @param candidatId candidatId
   * @return OK
   */
  getCandidatByIdUsingGETResponse(candidatId: number): __Observable<__StrictHttpResponse<Candidats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/candidat/${encodeURIComponent(candidatId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Candidats>;
      })
    );
  }
  /**
   * getCandidatById
   * @param candidatId candidatId
   * @return OK
   */
  getCandidatByIdUsingGET(candidatId: number): __Observable<Candidats> {
    return this.getCandidatByIdUsingGETResponse(candidatId).pipe(
      __map(_r => _r.body as Candidats)
    );
  }

  /**
   * delete
   * @param candidatId candidatId
   * @return OK
   */
  deleteUsingDELETEResponse(candidatId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/candidat/${encodeURIComponent(candidatId)}`,
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
   * delete
   * @param candidatId candidatId
   * @return OK
   */
  deleteUsingDELETE(candidatId: number): __Observable<{}> {
    return this.deleteUsingDELETEResponse(candidatId).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllCandidats
   * @return OK
   */
  getAllCandidatsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Candidats>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/candidats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Candidats>>;
      })
    );
  }
  /**
   * getAllCandidats
   * @return OK
   */
  getAllCandidatsUsingGET(): __Observable<Array<Candidats>> {
    return this.getAllCandidatsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Candidats>)
    );
  }

  /**
   * createOrUpdateCandidat
   * @param candidats candidats
   * @return OK
   */
  createOrUpdateCandidatUsingPOSTResponse(candidats: Candidats): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = candidats;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/candidats`,
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
   * createOrUpdateCandidat
   * @param candidats candidats
   * @return OK
   */
  createOrUpdateCandidatUsingPOST(candidats: Candidats): __Observable<{}> {
    return this.createOrUpdateCandidatUsingPOSTResponse(candidats).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module CandidatControllerService {
}

export { CandidatControllerService }
