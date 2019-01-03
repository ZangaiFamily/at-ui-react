import * as React from 'react';
import { buildClassName } from '../core/css-builder';
import { ConnectedOverlay } from '../overlay/connected-overlay';
import { IMenuProps } from './menu.component';
import Transition from 'react-transition-group/Transition';
import {
    DropDownDefaultStyle,
    DropDownTransitionStyles,
    ExpandDefaultStyle,
    ExpandTransitionStyles
} from '../core/animations';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { ChildrenWithProp } from '../core/common';

export interface ISubMenu extends IMenuProps {
    title?: any
    level: number
}

export class AtSubMenuComponent extends React.Component<ISubMenu, any> {
    static defaultProps: ISubMenu = {
        level: 0,
    };
    $mouseSubject = new Subject();

    constructor(props: ISubMenu) {
        super(props);
        this.state = {
            titleRef: null,
            open: false,
            animation: false,
        };
    }

    componentDidMount() {
        this.$mouseSubject.asObservable().pipe(auditTime(150)).subscribe(value => {
            this.setState({
                open: value,
            });
        });
    }

    setTitle = (ref: HTMLDivElement | null) => {
        this.setState({
            titleRef: ref,
        });
    };
    handleClick = (event: any) => {
        event.preventDefault();
        if (event.target === this.state.titleRef) {
            const open = !this.state.open;
            console.log('open');
            this.$mouseSubject.next(open);
        }
    };

    handleEnter = (event: any) => {
        event.preventDefault();
        const open = true;
        if (this.props.atType !== 'inline') this.$mouseSubject.next(open);
    };

    handleLeave = (event: any) => {
        event.preventDefault();
        const open = false;
        if (this.props.atType !== 'inline') this.$mouseSubject.next(open);
    };

    close = () => {
        this.$mouseSubject.next(false);
    };

    public render() {
        const classes = buildClassName({
            'at-menu__submenu': true,
            'at-menu__submenu--opened': this.state.open,
        });
        const overlayClasses = buildClassName({
            'overlay-menu': true,
            [`overlay-menu-${this.props.atType}`]: true,
            [`at-menu--${this.props.theme}`]: true,
        });

        const titleClasses = buildClassName({
            'at-menu__submenu-title': true,
            [`menu-item-on-hover-${this.props.atType}`]: this.state.open,
        });

        const position = (this.props.level === 0 && this.props.atType === 'horizontal') ? 'bottom' : 'right';

        const common = <Transition in={this.state.open} timeout={15}>
            {(state: any) => (
                <ConnectedOverlay
                    position={position}
                    origin={this.state.titleRef}
                    open={this.state.open}>
                    <div onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}
                         className={overlayClasses} style={{
                        ...DropDownDefaultStyle,
                        ...DropDownTransitionStyles[state],
                    }}>
                        <div className="at-menu-dropdown__popover">
                            <div className="at-dropdown-menu">
                                {ChildrenWithProp(this.props.children, {
                                    level: this.props.level + 1,
                                    atType: this.props.atType,
                                    theme: this.props.theme,
                                })}
                            </div>
                        </div>
                    </div>
                </ConnectedOverlay>
            )}
        </Transition>;
        const inline = <Transition in={this.state.open} timeout={10}>
            {(state: any) => {
                const style = {...ExpandDefaultStyle, ...ExpandTransitionStyles[state]};
                return (
                    <ul className="at-sub-dropdown-menu"
                        style={style}>
                        {ChildrenWithProp(this.props.children, {
                            level: this.props.level + 1,
                            atType: this.props.atType,
                            theme: this.props.theme,
                        })}
                    </ul>
                );
            }}
        </Transition>;

        return (<li className={classes}>
                <div onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}
                     ref={this.setTitle} className={titleClasses}>
                    {this.props.title}
                    {((this.props.level > 0 && this.props.atType === 'horizontal') || this.props.atType === 'vertical') ?
                        <i className="icon icon-chevron-right right-arrow"/> : null}

                </div>
                {this.props.atType === 'inline' ? inline : common}
            </li>
        );
    }
}
