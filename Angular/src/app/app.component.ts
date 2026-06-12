import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import type { ItemClickEvent } from 'devextreme/ui/tabs';

import { DxTabsModule } from 'devextreme-angular/ui/tabs';

@Component({
    selector: 'app-root',
    imports: [DxTabsModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onItemClick(e: ItemClickEvent): void {
    showMessage(e.itemIndex + 1);
  }
}

function showMessage(id: number): void {
  notify(
    {
      message: `Tab ${id} has been clicked!`,
      width: 250,
      position: {
        my: 'bottom',
        at: 'bottom',
        of: '#container',
      },
    },
    'info',
    500,
  );
}
