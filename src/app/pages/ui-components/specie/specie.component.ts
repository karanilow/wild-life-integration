import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Image, SpecieDetail } from 'src/app/domain/specie';
import { SpecieService } from 'src/app/services/service.specie';

@Component({
  selector: 'app-specie',
  standalone: true,
  templateUrl: './specie.component.html',
  imports: [AsyncPipe, 
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTableModule,
      FormsModule,
      ReactiveFormsModule,
      MatRadioModule,
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatInputModule,
      MatIconModule,
      MatCheckboxModule,
      RouterModule]
})
export class AppSpecieComponent implements OnInit {
  
  private specieService = inject(SpecieService);
  private route = inject(ActivatedRoute)

  public specieList$: Observable<SpecieDetail>;

  public imgUrl$: Observable<string>;

   ngOnInit() {
    this.specieList$ = this.route.paramMap.pipe(
      map(params => params.get('id') ?? ''),
      switchMap(id => this.specieService.getSpecie(id)
    )); 

    this.imgUrl$ = this.specieList$.pipe(
      map((specie) => ImageUrlForSpecie(specie))
    );
  };
}

function ImageUrlForSpecie(specie: SpecieDetail): string {
  const preferredUrl = specie.Species.Image.find((img: Image) => img.Type === "Preferred Image")?.URL;
  if(preferredUrl){
    console.log(preferredUrl)
    return preferredUrl
  }
  const availableUrl = specie.Species.Image.find((img: Image) => img.Type === "Available Image")?.URL
  if(availableUrl) {
    console.log(availableUrl)
    return availableUrl
  }
  return ''
}

