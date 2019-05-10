import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  public openMenu: boolean;

  constructor( public store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ui')
      .subscribe(
        responseUi => {
          this.openMenu = responseUi.openMenu;
        }
      );
  }

}
