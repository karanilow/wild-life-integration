import { Component, OnInit, inject } from '@angular/core';
import { KingdomList } from '../../domain/kingdom';
import { KingdomService } from '../../services/service.kingdom';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ClassList } from '../../domain/class';
import { FamilyList } from '../../domain/family';
import { ClassService } from '../../services/service.class';
import { FamilyService } from '../../services/service.family';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-form',
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
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public kingdoms$!: Observable<KingdomList>;
  public classes$!: Observable<ClassList>;
  public families$!: Observable<FamilyList>;

  public kingdomCommonName: string = '';
  public classCommonName: string = '';
  public familyCommonName: string = '';

  private kingdomService = inject(KingdomService);
  private classService = inject(ClassService);
  private familyService = inject(FamilyService);

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
    console.log(familyCommonName);
  }
}
