import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  onItemClick(e: any) {
    showMessage(e.itemIndex + 1);
  }
}

function showMessage(id: number) {
  notify(
    {
      message: `Tab ${id} has been clicked!`,
      width: 250,
      position: {
        my: 'bottom',
        at: 'bottom',
        of: '#container'
      }
    },
    'info',
    500
  );
};
