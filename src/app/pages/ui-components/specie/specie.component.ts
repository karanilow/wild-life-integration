import { Component, inject, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/service.specie';

@Component({
  selector: 'app-specie',
  standalone: true,
  templateUrl: './specie.component.html',
})
export class AppSpecieComponent implements OnInit {
  
  private specieService = inject(SpecieService);

  ngOnInit() {
  }

}
