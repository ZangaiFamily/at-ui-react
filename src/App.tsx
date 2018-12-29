import * as React from 'react';
import './assets/stylesheets/index.css';

import { AtButton } from './componnets/button/button-componnent';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    handleClick = (e: any) => {
        this.setState({
            type: 'primary',
        });
    };

    public render() {
        return (
            <div className='App'>
                <AtButton onClick={this.handleClick} atType={this.state.type}>
                    我是傻逼
                </AtButton>
            </div>
        );
    }
}

export default App;
