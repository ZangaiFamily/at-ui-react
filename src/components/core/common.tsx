import * as React from 'react';
import { fromEvent } from 'rxjs';

export const ChildrenWithProp = (children: any, props: any) => children ? React.Children.map(children, (child, index) => {
    if (typeof children.type === 'string') {
        props = {};
    }
    return React.cloneElement(child, {index, ...props});
}) : null;

export class EventMonitor {
    static instance: EventMonitor;
    static isCreating: boolean = false;
    public static getInstance() {
        if (EventMonitor.instance == null) {
            EventMonitor.isCreating = true;
            EventMonitor.instance = new EventMonitor();
            EventMonitor.isCreating = false;
        }

        return EventMonitor.instance;
    }

    DOCUMENT_SCROLL = fromEvent(document, 'scroll');
    DOCUMENT_RESIZE = fromEvent(window, 'resize');

    constructor() {
        if (!EventMonitor.isCreating) {
            throw new Error('只能存在一个实例');
        }
    }

}
