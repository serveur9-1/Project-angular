/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Evenement } from '../models/evenement';

/**
 * Evenement Controller
 */
@Injectable({
  providedIn: 'root',
})
class EvenementControllerService extends __BaseService {
  static readonly getEvenementByIdUsingGETPath = '/evenement/{evenementId}';
  static readonly deleteUsingDELETE2Path = '/evenement/{evenementId}';
  static readonly getAllEvenementsUsingGETPath = '/evenements';
  static readonly createOrUpdateEvenementUsingPOSTPath = '/evenements';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getEvenementById
   * @param evenementId evenementId
   * @return OK
   */
  getEvenementByIdUsingGETResponse(evenementId: number): __Observable<__StrictHttpResponse<Evenement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/evenement/${encodeURIComponent(evenementId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Evenement>;
      })
    );
  }
  /**
   * getEvenementById
   * @param evenementId evenementId
   * @return OK
   */
  getEvenementByIdUsingGET(evenementId: number): __Observable<Evenement> {
    return this.getEvenementByIdUsingGETResponse(evenementId).pipe(
      __map(_r => _r.body as Evenement)
    );
  }

  /**
   * delete
   * @param evenementId evenementId
   * @return OK
   */
  deleteUsingDELETE2Response(evenementId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/evenement/${encodeURIComponent(evenementId)}`,
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
   * @param evenementId evenementId
   * @return OK
   */
  deleteUsingDELETE2(evenementId: number): __Observable<{}> {
    return this.deleteUsingDELETE2Response(evenementId).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getAllEvenements
   * @return OK
   */
  getAllEvenementsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Evenement>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/evenements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Evenement>>;
      })
    );
  }
  /**
   * getAllEvenements
   * @return OK
   */
  getAllEvenementsUsingGET(): __Observable<Array<Evenement>> {
    return this.getAllEvenementsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Evenement>)
    );
  }

  /**
   * createOrUpdateEvenement
   * @param evenement evenement
   * @return OK
   */
  createOrUpdateEvenementUsingPOSTResponse(evenement: Evenement): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = evenement;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/evenements`,
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
   * createOrUpdateEvenement
   * @param evenement evenement
   * @return OK
   */
  createOrUpdateEvenementUsingPOST(evenement: Evenement): __Observable<{}> {
    return this.createOrUpdateEvenementUsingPOSTResponse(evenement).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module EvenementControllerService {
}

export { EvenementControllerService }
