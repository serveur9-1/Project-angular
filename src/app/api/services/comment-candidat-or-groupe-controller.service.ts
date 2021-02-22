/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Comment_candidat } from '../models/comment-_candidat';
import { Comment_groupe } from '../models/comment-_groupe';

/**
 * Comment Candidat Or Groupe Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommentCandidatOrGroupeControllerService extends __BaseService {
  static readonly createOrUpdateCommentCandidatUsingPOSTPath = '/comment_candidat';
  static readonly deleteCommentCandidatUsingDELETEPath = '/comment_candidat/delete/{commentCandidatID}';
  static readonly getCommentCandidatByIdUsingGETPath = '/comment_candidat/{commentCandidatID}';
  static readonly getCommentCandidatByAllInfoUsingGETPath = '/comment_candidat/{evenementId}/{juryId}/{candidatId}';
  static readonly getAllCommentCandidatsUsingGETPath = '/comment_candidats';
  static readonly createOrUpdateCommentGroupeUsingPOSTPath = '/comment_groupe';
  static readonly getCommentGroupeByIdUsingGETPath = '/comment_groupe/{commentGroupeID}';
  static readonly deleteCommentGroupeUsingDELETEPath = '/comment_groupe/{commentGroupeID}';
  static readonly getCommentGroupeByAllInfoUsingGETPath = '/comment_groupe/{evenementId}/{juryId}/{groupeId}';
  static readonly getAllCommentGroupesUsingGETPath = '/comment_groupes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createOrUpdateCommentCandidat
   * @param comment_candidat comment_candidat
   * @return OK
   */
  createOrUpdateCommentCandidatUsingPOSTResponse(commentCandidat: Comment_candidat): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentCandidat;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/comment_candidat`,
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
   * createOrUpdateCommentCandidat
   * @param comment_candidat comment_candidat
   * @return OK
   */
  createOrUpdateCommentCandidatUsingPOST(commentCandidat: Comment_candidat): __Observable<{}> {
    return this.createOrUpdateCommentCandidatUsingPOSTResponse(commentCandidat).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * deleteCommentCandidat
   * @param commentCandidatID commentCandidatID
   * @return OK
   */
  deleteCommentCandidatUsingDELETEResponse(commentCandidatID: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/comment_candidat/delete/${encodeURIComponent(commentCandidatID)}`,
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
   * deleteCommentCandidat
   * @param commentCandidatID commentCandidatID
   * @return OK
   */
  deleteCommentCandidatUsingDELETE(commentCandidatID: number): __Observable<{}> {
    return this.deleteCommentCandidatUsingDELETEResponse(commentCandidatID).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getCommentCandidatById
   * @param commentCandidatID commentCandidatID
   * @return OK
   */
  getCommentCandidatByIdUsingGETResponse(commentCandidatID: number): __Observable<__StrictHttpResponse<Comment_candidat>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_candidat/${encodeURIComponent(commentCandidatID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment_candidat>;
      })
    );
  }
  /**
   * getCommentCandidatById
   * @param commentCandidatID commentCandidatID
   * @return OK
   */
  getCommentCandidatByIdUsingGET(commentCandidatID: number): __Observable<Comment_candidat> {
    return this.getCommentCandidatByIdUsingGETResponse(commentCandidatID).pipe(
      __map(_r => _r.body as Comment_candidat)
    );
  }

  /**
   * getCommentCandidatByAllInfo
   * @param params The `CommentCandidatOrGroupeControllerService.GetCommentCandidatByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `evenementId`: evenementId
   *
   * - `candidatId`: candidatId
   *
   * @return OK
   */
  getCommentCandidatByAllInfoUsingGETResponse(params: CommentCandidatOrGroupeControllerService.GetCommentCandidatByAllInfoUsingGETParams): __Observable<__StrictHttpResponse<Comment_candidat>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_candidat/${encodeURIComponent(params.evenementId)}/${encodeURIComponent(params.juryId)}/${encodeURIComponent(params.candidatId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment_candidat>;
      })
    );
  }
  /**
   * getCommentCandidatByAllInfo
   * @param params The `CommentCandidatOrGroupeControllerService.GetCommentCandidatByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `evenementId`: evenementId
   *
   * - `candidatId`: candidatId
   *
   * @return OK
   */
  getCommentCandidatByAllInfoUsingGET(params: CommentCandidatOrGroupeControllerService.GetCommentCandidatByAllInfoUsingGETParams): __Observable<Comment_candidat> {
    return this.getCommentCandidatByAllInfoUsingGETResponse(params).pipe(
      __map(_r => _r.body as Comment_candidat)
    );
  }

  /**
   * getAllCommentCandidats
   * @return OK
   */
  getAllCommentCandidatsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Comment_candidat>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_candidats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Comment_candidat>>;
      })
    );
  }
  /**
   * getAllCommentCandidats
   * @return OK
   */
  getAllCommentCandidatsUsingGET(): __Observable<Array<Comment_candidat>> {
    return this.getAllCommentCandidatsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Comment_candidat>)
    );
  }

  /**
   * createOrUpdateCommentGroupe
   * @param comment_groupe comment_groupe
   * @return OK
   */
  createOrUpdateCommentGroupeUsingPOSTResponse(commentGroupe: Comment_groupe): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentGroupe;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/comment_groupe`,
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
   * createOrUpdateCommentGroupe
   * @param comment_groupe comment_groupe
   * @return OK
   */
  createOrUpdateCommentGroupeUsingPOST(commentGroupe: Comment_groupe): __Observable<{}> {
    return this.createOrUpdateCommentGroupeUsingPOSTResponse(commentGroupe).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getCommentGroupeById
   * @param commentGroupeID commentGroupeID
   * @return OK
   */
  getCommentGroupeByIdUsingGETResponse(commentGroupeID: number): __Observable<__StrictHttpResponse<Comment_groupe>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_groupe/${encodeURIComponent(commentGroupeID)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment_groupe>;
      })
    );
  }
  /**
   * getCommentGroupeById
   * @param commentGroupeID commentGroupeID
   * @return OK
   */
  getCommentGroupeByIdUsingGET(commentGroupeID: number): __Observable<Comment_groupe> {
    return this.getCommentGroupeByIdUsingGETResponse(commentGroupeID).pipe(
      __map(_r => _r.body as Comment_groupe)
    );
  }

  /**
   * deleteCommentGroupe
   * @param commentGroupeID commentGroupeID
   * @return OK
   */
  deleteCommentGroupeUsingDELETEResponse(commentGroupeID: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/comment_groupe/${encodeURIComponent(commentGroupeID)}`,
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
   * deleteCommentGroupe
   * @param commentGroupeID commentGroupeID
   * @return OK
   */
  deleteCommentGroupeUsingDELETE(commentGroupeID: number): __Observable<{}> {
    return this.deleteCommentGroupeUsingDELETEResponse(commentGroupeID).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getCommentGroupeByAllInfo
   * @param params The `CommentCandidatOrGroupeControllerService.GetCommentGroupeByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `groupeId`: groupeId
   *
   * - `evenementId`: evenementId
   *
   * @return OK
   */
  getCommentGroupeByAllInfoUsingGETResponse(params: CommentCandidatOrGroupeControllerService.GetCommentGroupeByAllInfoUsingGETParams): __Observable<__StrictHttpResponse<Comment_groupe>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_groupe/${encodeURIComponent(params.evenementId)}/${encodeURIComponent(params.juryId)}/${encodeURIComponent(params.groupeId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment_groupe>;
      })
    );
  }
  /**
   * getCommentGroupeByAllInfo
   * @param params The `CommentCandidatOrGroupeControllerService.GetCommentGroupeByAllInfoUsingGETParams` containing the following parameters:
   *
   * - `juryId`: juryId
   *
   * - `groupeId`: groupeId
   *
   * - `evenementId`: evenementId
   *
   * @return OK
   */
  getCommentGroupeByAllInfoUsingGET(params: CommentCandidatOrGroupeControllerService.GetCommentGroupeByAllInfoUsingGETParams): __Observable<Comment_groupe> {
    return this.getCommentGroupeByAllInfoUsingGETResponse(params).pipe(
      __map(_r => _r.body as Comment_groupe)
    );
  }

  /**
   * getAllCommentGroupes
   * @return OK
   */
  getAllCommentGroupesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Comment_groupe>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/comment_groupes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Comment_groupe>>;
      })
    );
  }
  /**
   * getAllCommentGroupes
   * @return OK
   */
  getAllCommentGroupesUsingGET(): __Observable<Array<Comment_groupe>> {
    return this.getAllCommentGroupesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Comment_groupe>)
    );
  }
}

module CommentCandidatOrGroupeControllerService {

  /**
   * Parameters for getCommentCandidatByAllInfoUsingGET
   */
  export interface GetCommentCandidatByAllInfoUsingGETParams {

    /**
     * juryId
     */
    juryId: number;

    /**
     * evenementId
     */
    evenementId: number;

    /**
     * candidatId
     */
    candidatId: number;
  }

  /**
   * Parameters for getCommentGroupeByAllInfoUsingGET
   */
  export interface GetCommentGroupeByAllInfoUsingGETParams {

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
  }
}

export { CommentCandidatOrGroupeControllerService }
