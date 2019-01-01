import * as React from 'react';
import './assets/stylesheets/index.css';
import { AtButton } from './componnets/button/at-button.component';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {type: 'default', fuck: 'ss'};
    }

    handleClick = (e: any) => {
        this.setState({
            type: 'primary',
            atLoading: true,
        });
    };

    public render() {
        return (
            <div className='App'>
                {this.state.fuck}
                <AtButton onClick={this.handleClick} atType={this.state.type}
                          atLoading={this.state.atLoading}>
                    我是傻逼
                </AtButton>
                <AtButton onClick={this.handleClick} disabled atType={this.state.type} atLoading/>
                <AtButton onClick={this.handleClick} atType={'error'} atLoading atHollow/>
                <AtButton onClick={this.handleClick} atType={this.state.type} atIcon={'icon-search'} atHollow/>
                <AtButton onClick={this.handleClick} atType={this.state.type} atIcon={'icon-search'} atHollow/>
                <AtButton onClick={this.handleClick} atType={this.state.type} atIcon={'icon-search'} atSize={'large'}
                          atHollow/>;
                <AtButton onClick={this.handleClick} atType={this.state.type} atIcon={'icon-search'} atSize={'small'}
                          atHollow/>;
                <AtButton onClick={this.handleClick} atType={this.state.type} atIcon={'icon-search'} atSize={'smaller'}
                          atHollow/>;
            </div>
        )
            ;
    }
}

export default App;
