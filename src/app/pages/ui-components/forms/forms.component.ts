import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Observable } from 'rxjs';
import { ClassList } from 'src/app/domain/class';
import { FamilyList } from 'src/app/domain/family';
import { KingdomList } from 'src/app/domain/kingdom';
import { ClassService } from 'src/app/services/service.class';
import { FamilyService } from 'src/app/services/service.family';
import { KingdomService } from 'src/app/services/service.kingdom';
import { AsyncPipe } from '@angular/common';
import { SpeciesList } from 'src/domain/specie';
import { SpecieService } from 'src/services/service.specie';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    AsyncPipe, 
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './forms.component.html',
})
export class AppFormsComponent implements OnInit {
  public kingdoms$!: Observable<KingdomList>;
  public classes$!: Observable<ClassList>;
  public families$!: Observable<FamilyList>;
  public species$! : Observable<SpeciesList>;


  public kingdomCommonName: string = '';
  public classCommonName: string = '';
  public familyCommonName: string = '';

  private kingdomService = inject(KingdomService);
  private classService = inject(ClassService);
  private familyService = inject(FamilyService);
  private specieService = inject(SpecieService);


  ngOnInit() {
    this.kingdoms$ = this.kingdomService.getKingdomList();
  }

  onKingdomClick(kingdomCommonName: string) {
    this.kingdomCommonName = kingdomCommonName;
    this.classes$ = this.classService.getClassList(kingdomCommonName);
    this.families$ = new Observable<FamilyList>();
  }

  onClassClick(classCommonName: string) {
    this.classCommonName = classCommonName;
    this.families$ = this.familyService.getFamilyList(
      this.kingdomCommonName,
      classCommonName
    );
  }

  onFamilyClick(familyCommonName: string) {
    this.familyCommonName = familyCommonName;
  }
  
  PrepareList() {
    console.log(this.familyCommonName);
    this.species$ = this.specieService.getSpeciesList(this.familyCommonName);
    this.species$.forEach(value => console.log(value));
  }
}
