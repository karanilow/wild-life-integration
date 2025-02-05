import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesList } from 'src/domain/specie';

@Injectable({ providedIn: 'root' })
export class SpecieService {
  constructor(private http: HttpClient) {}

  getSpeciesList(familyCommonName: string): Observable<SpeciesList> {
    const speciesUrl = `https://apps.des.qld.gov.au/species/?op=getspecies&family=${familyCommonName}`;
    return this.http.get<SpeciesList>(speciesUrl);
  }
}
