import { Component, OnInit } from '@angular/core';
import { IonTab, IonTabBar, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTab, IonTabs],
})
export class TabsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
