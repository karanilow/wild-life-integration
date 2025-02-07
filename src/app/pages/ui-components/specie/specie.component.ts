import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { SpecieDetail } from 'src/app/domain/specie';
import { SpecieService } from 'src/app/services/service.specie';

@Component({
  selector: 'app-specie',
  standalone: true,
  templateUrl: './specie.component.html',
  imports: [AsyncPipe]
})
export class AppSpecieComponent implements OnInit {
  
  private specieService = inject(SpecieService);
  private route = inject(ActivatedRoute)

  public specieList$: Observable<SpecieDetail>;

  ngOnInit() {
    this.specieList$ = this.route.paramMap.pipe(
      map(params => params.get('id') ?? ''),
      switchMap(id => this.specieService.getSpecie(id)
    ));
  };

}
