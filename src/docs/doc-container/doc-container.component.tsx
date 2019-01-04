import * as React from 'react';
import Highlight from 'react-highlight';
import AtAnimationHeight from '../../components/animation';

export function DocContainer(props: any) {
    return (<div className={'at-component__container'}>
        {props.children}
    </div>);
}

export function DocComponent(props: any) {
    return (<div className={'at-component__sample'}>
        {props.children}
    </div>);
}

export class DocCode extends React.Component<{ code: string }, { open: boolean }> {

    constructor(props: { code: string }) {
        super(props);
        this.state = {
            open: false,
        };
    }

    open = () => {
        const open = !this.state.open;
        this.setState({
            open: open,
        });
    };

    render() {
        return (<div>
            <AtAnimationHeight height={this.state.open ? 'auto' : '0'}>
                <div key={'code'} className={'at-component__code'}>
                    <Highlight className={'tsx'}>{this.props.code}</Highlight>
                </div>
            </AtAnimationHeight>
            <a key={'click'} onClick={this.open} className="at-component__code-toggle"> 显示代码 </a></div>);
    }
}

export function DocDesc(props: any) {
    return (<div className="doc-code">
        {props.children}
    </div>);
}
