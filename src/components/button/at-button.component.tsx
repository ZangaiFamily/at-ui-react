import * as React from 'react';
import { buildClassName } from '../core/css-builder';
import { tuple } from '../core/type';

export interface IButtonProps {
    atIcon?: string
    atType?: 'default' | 'primary' | 'text' | 'success' | 'error' | 'warning' | 'info'
    atLoading?: boolean
    atShape?: 'circle' | null;
    atSize?: 'small' | 'large' | 'smaller';
    children?: any
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    atHollow?: boolean
    databinding?: any

    [x: string]: any
}

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');

export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export class AtButton extends React.Component<IButtonProps> {

    static defaultProps: IButtonProps = {
        atType: 'default',
    };

    constructor(props: IButtonProps) {
        super(props);
    }

    public isIcon() {
        const {atIcon} = this.props;
        return (atIcon ? (<i className={`at-btn__icon icon ${atIcon}`}/>) : null);
    }

    public isLoading() {
        const {atIcon, atLoading} = this.props;
        return ((atLoading && !atIcon) ? (<i className={`at-btn__icon icon at-btn__loading icon-loader`}/>) : null);
    }

    public childrenExist() {
        const {children} = this.props;
        return (children) ? (<span className="at-btn__text">{this.props.children} </span>) : null;
    }

    handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e);
        }
    };

    public render() {
        const {atType, atHollow, atSize, atLoading, atShape, atIcon, ...rest} = this.props;
        const classMap = {
            'at-btn': true,
            [`at-btn--${atType}`]: true,
            [`at-btn--${atType}--hollow`]: atHollow,
            [`at-btn--${atSize}`]: atSize,
        };
        const className = buildClassName(classMap);
        const {htmlType, ...otherProps} = rest as NativeButtonProps;
        return (
            <button type={htmlType || 'button'} {...otherProps} onClick={this.handleClick} className={className}>
                {this.isIcon()}
                {this.isLoading()}
                {this.childrenExist()}
            </button>);
    }

}

