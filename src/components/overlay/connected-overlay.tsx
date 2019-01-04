import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OverlayContainer } from './overlay-container';

interface IConnectedOverlayProp {
    open: boolean
    hasBackDrop: boolean
    position: 'left' | 'bottom' | 'top' | 'right'
    origin?: HTMLDivElement | null | undefined,
    clickBackDrop?: Function
}

export class ConnectedOverlay extends React.Component<IConnectedOverlayProp, any> {
    static defaultProps: IConnectedOverlayProp = {
        open: false,
        hasBackDrop: false,
        position: 'bottom',
    };

    constructor(props: IConnectedOverlayProp) {
        super(props);
        this.state = {
            overlayPosition: {
                pointerEvents: 'auto', top: 0, left: 0,
            },
        };
    }

    componentDidMount() {
        window.document.addEventListener('scroll', () => {
            this.calculateOriginPosition(this.props.origin);
        });
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
    }

    componentWillReceiveProps(props: any) {
        this.calculateOriginPosition(props.origin);
    }

    handleBackDropClick = () => {
        if (this.props.clickBackDrop) this.props.clickBackDrop();
    };

    renderOverlayPanel() {
        const boundingBoxStyle = {top: '0px', left: '0px', height: '100%', width: '100%'};
        return this.props.open ? [
                (this.props.hasBackDrop ? <div onClick={this.handleBackDropClick} key={'A'}
                                               className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"/> : null),
                <div key={'B'} className="cdk-overlay-connected-position-bounding-box" style={boundingBoxStyle}>
                    <div className="cdk-overlay-pane" style={this.state.overlayPosition}>{this.props.children}</div>
                </div>,
            ] :
            null;
    }

    calculateOriginPosition(origin: HTMLDivElement | null | undefined) {
        if (origin) {
            const dom = origin;
            const rect = dom.getBoundingClientRect();
            const width = dom.offsetWidth;
            const height = dom.offsetHeight;
            let state = {};
            switch (this.props.position) {
                case 'bottom':
                    state = {
                        pointerEvents: 'auto',
                        left: rect.left,
                        top: rect.top + height,
                        minWidth: width,
                    };
                    break;
                case 'left':
                    state = {
                        pointerEvents: 'auto',
                        left: rect.left,
                        top: rect.top + height,
                        minWidth: width,
                    };
                    break;
                case 'right':
                    state = {
                        pointerEvents: 'auto',
                        left: rect.left + width,
                        top: rect.top,
                        minWidth: width,
                    };
                    break;
                case 'top':
                    state = {
                        pointerEvents: 'auto',
                        left: rect.left,
                        top: rect.top - height,
                        minWidth: width,
                    };
                    break;
                default:
                    state = {
                        pointerEvents: 'auto',
                        left: rect.left,
                        top: rect.top + height,
                        minWidth: width,
                    };
            }
            this.setState({
                overlayPosition: state,
            });
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.renderOverlayPanel(),
            OverlayContainer.getInstance().containerDom,
        );
    }
}
