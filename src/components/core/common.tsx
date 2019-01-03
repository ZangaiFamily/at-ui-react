import * as React from 'react';

export const ChildrenWithProp = (component: any, props: any) => React.Children.map(component.props.children, (child, index) => {
    return React.cloneElement(child, {index, ...props});
});
