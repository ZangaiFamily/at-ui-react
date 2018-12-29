import * as React from 'react';

export interface IButtonProps {
    atIcon?: string
    atType?: 'default' | 'primary' | 'text' | 'success' | 'error' | 'warning' | 'info'
    atLoading?: boolean
    atShape?: 'circle' | null;
    atSize?: 'small' | 'large' | 'smaller';
    children?: any
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export class AtButton extends React.Component<IButtonProps> {

    static defaultProps: IButtonProps = {
        atType: 'primary',
    };

    constructor(props: IButtonProps) {
        super(props);
    }

    handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e);
        }
    };

    public render() {
        const {atType} = this.props;
        return (
            <button onClick={this.handleClick} className={`at-btn at-btn--${atType}`}>
                <i className="at-btn__icon icon"/>
                <span className="at-btn__text">{this.props.children}
                </span>
            </button>);
    }

}
