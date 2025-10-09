import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Tabs, { Item } from 'devextreme-react/tabs';
import notify from 'devextreme/ui/notify';
import type { ItemClickEvent } from 'devextreme/ui/tabs';

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

function renderFourth(): JSX.Element {
  return <div id="fourth">Fourth</div>;
}

function App(): JSX.Element {
  const onItemClick = useCallback((e: ItemClickEvent) => {
    showMessage(e.itemIndex + 1);
  }, []);

  return (
    <div id="container">
      <Tabs
        width={300}
        selectedIndex={2}
        onItemClick={onItemClick}
        selectionMode="multiple"
      >
        <Item badge="First"></Item>
        <Item text="Second" disabled={true}></Item>
        <Item text="Third" icon="favorites"></Item>
        <Item render={renderFourth}></Item>
      </Tabs>
    </div>
  );
}

export default App;
