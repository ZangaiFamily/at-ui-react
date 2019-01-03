export const DropDownDefaultStyle: any = {
    transition: `all 150ms ease-in-out`,
    opacity: 0,
};

export const DropDownTransitionStyles: any = {
    entering: {opacity: 0, transform: 'scaleY(0)', transformOrigin: '0% 0%'},
    entered: {opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%'},
};

export const ExpandDefaultStyle: any = {
    transition: `height 150ms ease-in`,
    opacity: 0,
    height: 0,
    overflow: 'hidden',
};

export const ExpandTransitionStyles: any = {
    entering: {opacity: 0, overflow: 'hidden'},
    entered: {opacity: 1, height: 'auto'},
};
