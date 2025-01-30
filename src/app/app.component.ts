import { Component, OnInit, inject } from '@angular/core';
import { KingdomList } from '../domain/kingdom';
import { KingdomService } from '../services/service.kingdom';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ClassList } from '../domain/class';
import { FamilyList } from '../domain/family';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  public kingdoms$!: Observable<KingdomList>;
  public classes$!: Observable<ClassList>;
  public families$!: Observable<FamilyList>;


  private kingdomService = inject(KingdomService);

  ngOnInit() {
    this.kingdoms$ = this.kingdomService.getKingdomList();
  }

  title = 'wild-life-integration';
}
