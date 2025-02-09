import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecieDetail, SpeciesList } from 'src/app/domain/specie';

@Injectable({ providedIn: 'root' })
export class SpecieService {
  constructor(private http: HttpClient) {}

  getSpeciesList(familyCommonName: string): Observable<SpeciesList> {
    const speciesUrl = `https://apps.des.qld.gov.au/species/?op=getspecies&family=${familyCommonName}`;
    return this.http.get<SpeciesList>(speciesUrl);
  }

  getSpecie(taxonID: string): Observable<SpecieDetail> {
    const speciesUrl = `https://apps.des.qld.gov.au/species/?op=getspeciesinformation&taxonid=${taxonID}`;
    return this.http.get<SpecieDetail>(speciesUrl);
  }

  getSpeciePicture(url: string | undefined): string {
    if(url){
      this.http.get(url);
      return url
    } 
    return 'no Image';
  }
}
