import * as React from 'react';
import { ISubMenu } from './sub-menu.component';
import { ChildrenWithProp } from '../core/common';

export interface IMenuGroupProps extends ISubMenu {

}

export class AtMenuGroup extends React.Component<IMenuGroupProps> {
    render() {
        const {children, ...y} = this.props;
        return ([
                (this.props.title ?
                    <li key={'li'} className="at-menu__item-group-title">{this.props.title}</li> : null),
                <ul key={'ul'} className="at-menu__item-group-list">
                    {this.props.children}
                    {ChildrenWithProp(this.props.children, y)}
                </ul>,
            ]
        );
    }

}
