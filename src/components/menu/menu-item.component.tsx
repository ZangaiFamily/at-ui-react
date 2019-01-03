import * as React from 'react';
import { buildClassName } from '../core/css-builder';


export interface IMenuItemProps {
    active?: boolean
}

export class AtMenuItemComponent extends React.Component<IMenuItemProps, any> {

    static defaultProps: IMenuItemProps = {
        active: false,
    };

    constructor(props: IMenuItemProps) {
        super(props);
    }

    public render() {
        const classes = buildClassName({
            'at-menu__item': true,
            'at-menu__item--active': this.props.active,
        });
        return (
            <li className={classes}>
                <div className="at-menu__item-link">{this.props.children}</div>
            </li>
        );
    }

}

export default AtMenuItemComponent;
