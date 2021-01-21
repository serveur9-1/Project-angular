/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Jury } from '../models/jury';

/**
 * Jury Controller
 */
@Injectable({
  providedIn: 'root',
})
class JuryControllerService extends __BaseService {
  static readonly getAllJuriesUsingGETPath = '/juries';
  static readonly createOrUpdateJuryUsingPOSTPath = '/jury';
  static readonly getJuryByIdUsingGETPath = '/jury/{juryId}';
  static readonly deleteUsingDELETE5Path = '/jury/{juryId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllJuries
   * @return OK
   */
  getAllJuriesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Jury>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/juries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Jury>>;
      })
    );
  }
  /**
   * getAllJuries
   * @return OK
   */
  getAllJuriesUsingGET(): __Observable<Array<Jury>> {
    return this.getAllJuriesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Jury>)
    );
  }

  /**
   * createOrUpdateJury
   * @param jury jury
   * @return OK
   */
  createOrUpdateJuryUsingPOSTResponse(jury: Jury): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = jury;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/jury`,
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
   * createOrUpdateJury
   * @param jury jury
   * @return OK
   */
  createOrUpdateJuryUsingPOST(jury: Jury): __Observable<{}> {
    return this.createOrUpdateJuryUsingPOSTResponse(jury).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getJuryById
   * @param juryId juryId
   * @return OK
   */
  getJuryByIdUsingGETResponse(juryId: number): __Observable<__StrictHttpResponse<Jury>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/jury/${encodeURIComponent(juryId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Jury>;
      })
    );
  }
  /**
   * getJuryById
   * @param juryId juryId
   * @return OK
   */
  getJuryByIdUsingGET(juryId: number): __Observable<Jury> {
    return this.getJuryByIdUsingGETResponse(juryId).pipe(
      __map(_r => _r.body as Jury)
    );
  }

  /**
   * delete
   * @param juryId juryId
   * @return OK
   */
  deleteUsingDELETE5Response(juryId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/jury/${encodeURIComponent(juryId)}`,
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
   * @param juryId juryId
   * @return OK
   */
  deleteUsingDELETE5(juryId: number): __Observable<{}> {
    return this.deleteUsingDELETE5Response(juryId).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module JuryControllerService {
}

export { JuryControllerService }
