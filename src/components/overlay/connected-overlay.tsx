import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OverlayContainer } from './overlay-container';
import { EventMonitor } from '../core/common';
import { Subscription } from 'rxjs';

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

    $scrollSub = Subscription.EMPTY;
    position = 'bottom';

    constructor(props: IConnectedOverlayProp) {
        super(props);
        this.state = {
            overlayPosition: {
                pointerEvents: 'auto', top: 0, left: 0,
            },
            pane: null,
            showpane: props.open,
        };
        this.position = this.props.position;
    }

    setPane = (ref: HTMLDivElement | null) => {
        this.setState({
            pane: ref,
        }, () => {
            this.calculateOriginPosition(this.props.origin);
        });

    };

    componentDidMount() {
        this.$scrollSub = EventMonitor.getInstance().DOCUMENT_SCROLL.subscribe(data => this.calculateOriginPosition(this.props.origin));
    }

    componentWillUnmount() {
        this.$scrollSub.unsubscribe();
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
        const boundingBoxStyle = {
            top: '0px',
            left: '0px',
            height: '100%',
            width: '100%',
            // display: this.state.showpane ? '' : 'none',
        };
        const backDropStyle = {
            // display: this.state.showpane ? '' : 'none',
        };
        return this.props.open ? [
                (this.props.hasBackDrop ? <div onClick={this.handleBackDropClick} key={'A'}
                                               style={backDropStyle}
                                               className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"/> : null),
                <div key={'B'} className="cdk-overlay-connected-position-bounding-box" style={boundingBoxStyle}>
                    <div className="cdk-overlay-pane" ref={this.setPane}
                         style={this.state.overlayPosition}>{this.props.children}</div>
                </div>,
            ] :
            null;
    }

    calculateOriginPosition(origin: HTMLDivElement | null | undefined) {
        if (origin) {
            const dom = origin;
            const rect: any = dom.getBoundingClientRect();
            const width = dom.offsetWidth;
            const height = dom.offsetHeight;
            let state = {};
            let paneRect;
            if (this.state.pane && this.position === 'bottom') {
                paneRect = this.state.pane.getBoundingClientRect();
                if ((window.innerHeight < (paneRect.y + paneRect.height)) || paneRect.y < 0) {
                    this.position = 'top';
                }
            }

            if (this.state.pane && this.position === 'top') {
                paneRect = this.state.pane.getBoundingClientRect();
                if (window.innerHeight - rect.y - height > paneRect.height) {
                    this.position = 'bottom';
                }
            }

            switch (this.position) {
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
                        bottom: window.innerHeight - rect.y,
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
