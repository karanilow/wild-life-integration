import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
import { Kingdom, KingdomList } from '../domain/kingdom';

@Injectable({ providedIn: 'root' })
export class KingdomService {
  constructor(private http: HttpClient) {}

  getKindomList(): Observable<KingdomList> {
    const kingdomsUrl = `https://apps.des.qld.gov.au/species/?op=getkingdomnames`;
    return this.http.get<KingdomList>(kingdomsUrl);
  }
}
