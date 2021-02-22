/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Evenement } from '../models/evenement';
import { IParticipantService } from '../models/iparticipant-service';

/**
 * Evenement Controller
 */
@Injectable({
  providedIn: 'root',
})
class EvenementControllerService extends __BaseService {
  static readonly getEvenementByJuryIdUsingGETPath = '/evenement/jury/{juryId}';
  static readonly getAllEvenementsUsingGETPath = '/evenements';
  static readonly createOrUpdateEvenementUsingPOSTPath = '/evenements';
  static readonly getEvenementByIdUsingGETPath = '/evenements/{evenementId}';
  static readonly deleteUsingDELETE2Path = '/evenements/{evenementId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getEvenementByJuryId
   * @param juryId juryId
   * @return OK
   */
  getEvenementByJuryIdUsingGETResponse(juryId: number): __Observable<__StrictHttpResponse<Evenement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/evenement/jury/${encodeURIComponent(juryId)}`,
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
   * getEvenementByJuryId
   * @param juryId juryId
   * @return OK
   */
  getEvenementByJuryIdUsingGET(juryId: number): __Observable<Evenement> {
    return this.getEvenementByJuryIdUsingGETResponse(juryId).pipe(
      __map(_r => _r.body as Evenement)
    );
  }

  /**
   * getAllEvenements
   * @return OK
   */
  getAllEvenementsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<IParticipantService>>> {
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
        return _r as __StrictHttpResponse<Array<IParticipantService>>;
      })
    );
  }
  /**
   * getAllEvenements
   * @return OK
   */
  getAllEvenementsUsingGET(): __Observable<Array<IParticipantService>> {
    return this.getAllEvenementsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<IParticipantService>)
    );
  }

  /**
   * createOrUpdateEvenement
   * @param params The `EvenementControllerService.CreateOrUpdateEvenementUsingPOSTParams` containing the following parameters:
   *
   * - `file`: file
   *
   * - `evenement`: evenement
   *
   * @return OK
   */
  createOrUpdateEvenementUsingPOSTResponse(params: EvenementControllerService.CreateOrUpdateEvenementUsingPOSTParams): __Observable<__StrictHttpResponse<Evenement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    if (params.evenement != null) __params = __params.set('evenement', params.evenement.toString());
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
        return _r as __StrictHttpResponse<Evenement>;
      })
    );
  }
  /**
   * createOrUpdateEvenement
   * @param params The `EvenementControllerService.CreateOrUpdateEvenementUsingPOSTParams` containing the following parameters:
   *
   * - `file`: file
   *
   * - `evenement`: evenement
   *
   * @return OK
   */
  createOrUpdateEvenementUsingPOST(params: EvenementControllerService.CreateOrUpdateEvenementUsingPOSTParams): __Observable<Evenement> {
    return this.createOrUpdateEvenementUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Evenement)
    );
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
      this.rootUrl + `/evenements/${encodeURIComponent(evenementId)}`,
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
      this.rootUrl + `/evenements/${encodeURIComponent(evenementId)}`,
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
}

module EvenementControllerService {

  /**
   * Parameters for createOrUpdateEvenementUsingPOST
   */
  export interface CreateOrUpdateEvenementUsingPOSTParams {

    /**
     * file
     */
    file: Blob;

    /**
     * evenement
     */
    evenement: string;
  }
}

export { EvenementControllerService }
