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
  static readonly createOrUpdateCandidatUsingPOSTPath = '/candidat';
  static readonly getCandidatByEventIdUsingGETPath = '/candidat/event/{evenementId}';
  static readonly getCandidatByIdUsingGETPath = '/candidat/{candidatId}';
  static readonly deleteUsingDELETEPath = '/candidat/{candidatId}';
  static readonly getAllCandidatsUsingGETPath = '/candidats';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createOrUpdateCandidat
   * @param params The `CandidatControllerService.CreateOrUpdateCandidatUsingPOSTParams` containing the following parameters:
   *
   * - `file`: file
   *
   * - `candidat`: candidat
   *
   * @return OK
   */
  createOrUpdateCandidatUsingPOSTResponse(params: CandidatControllerService.CreateOrUpdateCandidatUsingPOSTParams): __Observable<__StrictHttpResponse<Candidats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    if (params.candidat != null) __params = __params.set('candidat', params.candidat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/candidat`,
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
   * createOrUpdateCandidat
   * @param params The `CandidatControllerService.CreateOrUpdateCandidatUsingPOSTParams` containing the following parameters:
   *
   * - `file`: file
   *
   * - `candidat`: candidat
   *
   * @return OK
   */
  createOrUpdateCandidatUsingPOST(params: CandidatControllerService.CreateOrUpdateCandidatUsingPOSTParams): __Observable<Candidats> {
    return this.createOrUpdateCandidatUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Candidats)
    );
  }

  /**
   * getCandidatByEventId
   * @param evenementId evenementId
   * @return OK
   */
  getCandidatByEventIdUsingGETResponse(evenementId: number): __Observable<__StrictHttpResponse<Array<Candidats>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/candidat/event/${encodeURIComponent(evenementId)}`,
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
   * getCandidatByEventId
   * @param evenementId evenementId
   * @return OK
   */
  getCandidatByEventIdUsingGET(evenementId: number): __Observable<Array<Candidats>> {
    return this.getCandidatByEventIdUsingGETResponse(evenementId).pipe(
      __map(_r => _r.body as Array<Candidats>)
    );
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
}

module CandidatControllerService {

  /**
   * Parameters for createOrUpdateCandidatUsingPOST
   */
  export interface CreateOrUpdateCandidatUsingPOSTParams {

    /**
     * file
     */
    file: Blob;

    /**
     * candidat
     */
    candidat: string;
  }
}

export { CandidatControllerService }
