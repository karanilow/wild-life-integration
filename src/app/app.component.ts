import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Kingdom, KingdomList } from '../domain/kingdom';
import { KingdomService } from '../services/service.kingdom';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  public kingdoms$!: Observable<KingdomList>;


  private kingdomService = inject(KingdomService);

  ngOnInit() {
    this.kingdoms$ = this.kingdomService.getKindomList();
  }

  title = 'wild-life-integration';
}
