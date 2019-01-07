import * as React from 'react';
import { ConnectedOverlay } from '../overlay/connected-overlay';

export class AtDropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false,
            origin: null,
        };
    }

    click = () => {
        const open = this.state.open;
        this.setState({
            open: !open,
        })
        ;
    };

    setOrigin = (ref: HTMLDivElement | null) => {
        this.setState({
            origin: ref,
        });
    };

    public render() {
        return (
            <div className={'asdasd'}>
                <div ref={this.setOrigin} onClick={this.click} style={{width: '100px', height: '50px'}}>fffffffff</div>
                <ConnectedOverlay origin={this.state.origin} open={this.state.open} hasBackDrop
                                  clickBackDrop={this.click}
                                  position={'bottom'}>
                    <div style={{height: '250px', background: 'white', width: '100%', border: '1px solid red'}}>
                        asdasdasdasd
                        asdasdasdasd
                    </div>
                </ConnectedOverlay>
            </div>
        );
    }
}
