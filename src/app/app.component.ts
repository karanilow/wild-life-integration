import { Component, OnInit, inject } from '@angular/core';
import { KingdomList } from '../domain/kingdom';
import { KingdomService } from '../services/service.kingdom';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ClassList } from '../domain/class';
import { FamilyList } from '../domain/family';
import { ClassService } from '../services/service.class';
import { fromSubscribable } from 'rxjs/internal/observable/fromSubscribable';
import { FamilyService } from '../services/service.family';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'wild-life-integration';

  public kingdoms$!: Observable<KingdomList>;
  public classes$!: Observable<ClassList>;
  public families$!: Observable<FamilyList>;

  public kingdomCommonName: string = "";
  public classCommonName: string = "";
  public familyCommonName: string = "";

  private kingdomService = inject(KingdomService);
  private classService = inject(ClassService);
  private familyService = inject(FamilyService);

  ngOnInit() {
    this.kingdoms$ = this.kingdomService.getKingdomList();
  }

  onKingdomClick(kingdomCommonName: string) {
    this.kingdomCommonName = kingdomCommonName
    this.classes$ = this.classService.getClassList(kingdomCommonName);
    this.families$ = new Observable<FamilyList>();
  }

  onClassClick(classCommonName: string) {
    this.classCommonName = classCommonName;
    this.families$ = this.familyService.getFamilyList(this.kingdomCommonName, classCommonName);
  }
  
  onFamilyClick(familyCommonName: string) {
    console.log(familyCommonName);
  }
}
