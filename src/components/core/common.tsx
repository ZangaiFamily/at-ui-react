import * as React from 'react';

export const ChildrenWithProp = (children: any, props: any) => children ? React.Children.map(children, (child, index) => {
    if (typeof children.type === 'string') {
        props = {};
    }
    return React.cloneElement(child, {index, ...props});
}) : null;
