import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
import { Kingdom, KingdomList } from '../domain/kingdom';
import { ClassList } from '../domain/class';

@Injectable({ providedIn: 'root' })
export class ClassService {
  constructor(private http: HttpClient) {}

  getClassList(kingdomCommonName: string): Observable<ClassList> {
    const classesUrl = `https://apps.des.qld.gov.au/species/?op=getclassnames&kingdom=${kingdomCommonName}`;
    return this.http.get<ClassList>(classesUrl);
  }
}
