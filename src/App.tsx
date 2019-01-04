import * as React from 'react';
import './assets/stylesheets/index.css';
import { RouteWithSubRoutes } from './index';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log(props);
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
            <div className='at-container row at-row' style={{margin: '40px auto'}}>
                {this.props.routes.map((route: any, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        )
            ;
    }
}

export default App;
