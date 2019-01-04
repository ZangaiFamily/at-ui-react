import * as React from 'react';
import { buildClassName } from '../core/css-builder';
import { ISubMenu } from './sub-menu.component';


export interface IMenuItemProps extends ISubMenu {
    active?: boolean
}

export class AtMenuItemComponent extends React.Component<IMenuItemProps, any> {

    static defaultProps: IMenuItemProps = {
        active: false,
        level: 0,
    };

    constructor(props: IMenuItemProps) {
        super(props);
    }

    public render() {
        let paddingLeft = {};
        if (this.props.atType === 'inline') {
            paddingLeft = {
                paddingLeft: (this.props.level + 1) * 23,
            };
        }

        const classes = buildClassName({
            'at-menu__item': true,
            'at-menu__item--active': this.props.active,
        });
        return (
            <li className={classes} style={paddingLeft}>
                <div className="at-menu__item-link">{this.props.children}</div>
            </li>
        );
    }

}

export default AtMenuItemComponent;
