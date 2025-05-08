import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline,
  chatbubbleOutline,
  homeOutline,
  personOutline,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, IonTabs],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({
      homeOutline,
      searchOutline,
      addOutline,
      personOutline,
      chatbubbleOutline,
    });
  }

  ngOnInit() {}
}
