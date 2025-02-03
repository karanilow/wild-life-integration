import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
import { Kingdom, KingdomList } from '../domain/kingdom';
import { FamilyList } from '../domain/family';

@Injectable({ providedIn: 'root' })
export class FamilyService {
  constructor(private http: HttpClient) {}

  getFamilyList(kingdomCommonName: string, classCommonName: string): Observable<FamilyList> {
    const familiesUrl = `https://apps.des.qld.gov.au/species/?op=getfamilynames&kingdom=${kingdomCommonName}&class=${classCommonName}`;
    return this.http.get<FamilyList>(familiesUrl);
  }
}
