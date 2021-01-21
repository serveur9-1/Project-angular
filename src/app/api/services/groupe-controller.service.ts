/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Groupes } from '../models/groupes';

/**
 * Groupe Controller
 */
@Injectable({
  providedIn: 'root',
})
class GroupeControllerService extends __BaseService {
  static readonly createOrUpdateGroupeUsingPOSTPath = '/groupe';
  static readonly getEvenementByIdUsingGET1Path = '/groupe/{groupeId}';
  static readonly deleteUsingDELETE4Path = '/groupe/{groupeId}';
  static readonly getAllGroupesUsingGETPath = '/groupes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createOrUpdateGroupe
   * @param groupes groupes
   * @return OK
   */
  createOrUpdateGroupeUsingPOSTResponse(groupes: Groupes): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = groupes;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/groupe`,
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
   * createOrUpdateGroupe
   * @param groupes groupes
   * @return OK
   */
  createOrUpdateGroupeUsingPOST(groupes: Groupes): __Observable<{}> {
    return this.createOrUpdateGroupeUsingPOSTResponse(groupes).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getEvenementById
   * @param groupeId groupeId
   * @return OK
   */
  getEvenementByIdUsingGET1Response(groupeId: number): __Observable<__StrictHttpResponse<Groupes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/groupe/${encodeURIComponent(groupeId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Groupes>;
      })
    );
  }
  /**
   * getEvenementById
   * @param groupeId groupeId
   * @return OK
   */
  getEvenementByIdUsingGET1(groupeId: number): __Observable<Groupes> {
    return this.getEvenementByIdUsingGET1Response(groupeId).pipe(
      __map(_r => _r.body as Groupes)
    );
  }

  /**
   * delete
   * @param groupeId groupeId
   * @return OK
   */
  deleteUsingDELETE4Response(groupeId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/groupe/${encodeURIComponent(groupeId)}`,
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
   * @param groupeId groupeId
   * @return OK
   */
  deleteUsingDELETE4(groupeId: number): __Observable<{}> {
    return this.deleteUsingDELETE4Response(groupeId).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllGroupes
   * @return OK
   */
  getAllGroupesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Groupes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/groupes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Groupes>>;
      })
    );
  }
  /**
   * getAllGroupes
   * @return OK
   */
  getAllGroupesUsingGET(): __Observable<Array<Groupes>> {
    return this.getAllGroupesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Groupes>)
    );
  }
}

module GroupeControllerService {
}

export { GroupeControllerService }
