import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import Tabs, { Item } from 'devextreme-react/tabs';
import notify from 'devextreme/ui/notify';

const showMessage = (id) => {
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
}

const onItemClick = (e) => {
    showMessage(e.itemIndex + 1);
}

const renderFourth = () => {
    return <div id="fourth">Fourth</div>;
}

function App() {
    return (
        <div id="container">
            <Tabs
                width={300}
                selectedIndex={2}
                onItemClick={onItemClick}
                selectionMode="multiple"
            >
                <Item
                    badge="First"
                >
                </Item>
                <Item
                    text="Second"
                    disabled={true}
                >
                </Item>
                <Item
                    text="Third"
                    icon="favorites"
                >
                </Item>
                <Item
                    render={renderFourth}
                >
                </Item>
            </Tabs>
        </div>
    );
}

export default App;
