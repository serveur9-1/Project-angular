/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Groupe_candidats } from '../models/groupe-_candidats';

/**
 * Groupe Candidat Controller
 */
@Injectable({
  providedIn: 'root',
})
class GroupeCandidatControllerService extends __BaseService {
  static readonly createOrUpdateGroupeCandidatUsingPOSTPath = '/groupe_candidat';
  static readonly getGroupeCandidatByIdUsingGETPath = '/groupe_candidat/{groupeCandidatID}';
  static readonly deleteUsingDELETE3Path = '/groupe_candidat/{groupeCandidatID}';
  static readonly getAllGroupeCandidatsUsingGETPath = '/groupe_candidats';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createOrUpdateGroupeCandidat
   * @param groupe_candidats groupe_candidats
   * @return OK
   */
  createOrUpdateGroupeCandidatUsingPOSTResponse(groupeCandidats: Groupe_candidats): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = groupeCandidats;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/groupe_candidat`,
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
   * createOrUpdateGroupeCandidat
   * @param groupe_candidats groupe_candidats
   * @return OK
   */
  createOrUpdateGroupeCandidatUsingPOST(groupeCandidats: Groupe_candidats): __Observable<{}> {
    return this.createOrUpdateGroupeCandidatUsingPOSTResponse(groupeCandidats).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getGroupeCandidatById
   * @param groupeCandidatID groupeCandidatID
   * @return OK
   */
  getGroupeCandidatByIdUsingGETResponse(groupeCandidatID: number): __Observable<__StrictHttpResponse<Groupe_candidats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/groupe_candidat/${encodeURIComponent(groupeCandidatID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Groupe_candidats>;
      })
    );
  }
  /**
   * getGroupeCandidatById
   * @param groupeCandidatID groupeCandidatID
   * @return OK
   */
  getGroupeCandidatByIdUsingGET(groupeCandidatID: number): __Observable<Groupe_candidats> {
    return this.getGroupeCandidatByIdUsingGETResponse(groupeCandidatID).pipe(
      __map(_r => _r.body as Groupe_candidats)
    );
  }

  /**
   * delete
   * @param groupeCandidatID groupeCandidatID
   * @return OK
   */
  deleteUsingDELETE3Response(groupeCandidatID: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/groupe_candidat/${encodeURIComponent(groupeCandidatID)}`,
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
   * @param groupeCandidatID groupeCandidatID
   * @return OK
   */
  deleteUsingDELETE3(groupeCandidatID: number): __Observable<{}> {
    return this.deleteUsingDELETE3Response(groupeCandidatID).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllGroupeCandidats
   * @return OK
   */
  getAllGroupeCandidatsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Groupe_candidats>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/groupe_candidats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Groupe_candidats>>;
      })
    );
  }
  /**
   * getAllGroupeCandidats
   * @return OK
   */
  getAllGroupeCandidatsUsingGET(): __Observable<Array<Groupe_candidats>> {
    return this.getAllGroupeCandidatsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Groupe_candidats>)
    );
  }
}

module GroupeCandidatControllerService {
}

export { GroupeCandidatControllerService }
