import * as React from 'react';
import { buildClassName } from '../core/css-builder';
import AtMenuItemComponent from './menu-item.component';
import { AtSubMenuComponent } from './sub-menu.component';
import { ChildrenWithProp } from '../core/common';

export interface IMenuProps {
    theme?: string
    atType?: 'horizontal' | 'inline' | 'vertical'
    style?: any
}

export class AtMenu extends React.Component<IMenuProps, any> {

    static MenuItem = AtMenuItemComponent;
    static SubMenu = AtSubMenuComponent;
    static defaultProps: IMenuProps = {
        atType: 'horizontal',
        theme: 'light',
    };

    constructor(props: IMenuProps) {
        super(props);
    }

    public render() {
        const classes = buildClassName({
            'at-menu': true,
            [`at-menu--${this.props.atType}`]: true,
            [`at-menu--${this.props.theme}`]: true,
        });
        const {atType, theme} = this.props;
        return (<ul className={classes} style={this.props.style}>
            {ChildrenWithProp(this, {atType, theme})}
        </ul>);
    }
}
