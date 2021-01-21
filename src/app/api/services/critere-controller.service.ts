/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Criteres } from '../models/criteres';

/**
 * Critere Controller
 */
@Injectable({
  providedIn: 'root',
})
class CritereControllerService extends __BaseService {
  static readonly getCritereByIdUsingGETPath = '/critere/{critereId}';
  static readonly deleteUsingDELETE1Path = '/critere/{critereId}';
  static readonly getAllCriteresUsingGETPath = '/criteres';
  static readonly createOrUpdateCritereUsingPOSTPath = '/criteres';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getCritereById
   * @param critereId critereId
   * @return OK
   */
  getCritereByIdUsingGETResponse(critereId: number): __Observable<__StrictHttpResponse<Criteres>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/critere/${encodeURIComponent(critereId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Criteres>;
      })
    );
  }
  /**
   * getCritereById
   * @param critereId critereId
   * @return OK
   */
  getCritereByIdUsingGET(critereId: number): __Observable<Criteres> {
    return this.getCritereByIdUsingGETResponse(critereId).pipe(
      __map(_r => _r.body as Criteres)
    );
  }

  /**
   * delete
   * @param critereId critereId
   * @return OK
   */
  deleteUsingDELETE1Response(critereId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/critere/${encodeURIComponent(critereId)}`,
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
   * @param critereId critereId
   * @return OK
   */
  deleteUsingDELETE1(critereId: number): __Observable<{}> {
    return this.deleteUsingDELETE1Response(critereId).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllCriteres
   * @return OK
   */
  getAllCriteresUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Criteres>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/criteres`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Criteres>>;
      })
    );
  }
  /**
   * getAllCriteres
   * @return OK
   */
  getAllCriteresUsingGET(): __Observable<Array<Criteres>> {
    return this.getAllCriteresUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Criteres>)
    );
  }

  /**
   * createOrUpdateCritere
   * @param criteres criteres
   * @return OK
   */
  createOrUpdateCritereUsingPOSTResponse(criteres: Criteres): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = criteres;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/criteres`,
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
   * createOrUpdateCritere
   * @param criteres criteres
   * @return OK
   */
  createOrUpdateCritereUsingPOST(criteres: Criteres): __Observable<{}> {
    return this.createOrUpdateCritereUsingPOSTResponse(criteres).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module CritereControllerService {
}

export { CritereControllerService }
