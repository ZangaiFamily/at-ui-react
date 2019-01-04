import * as React from 'react';

import { DocCode, DocComponent, DocContainer, DocDesc } from '../doc-container/doc-container.component';
import { BasicButtonDoc } from './basic-button-doc';
// @ts-ignore
import basic from '!raw-loader!./basic-button-doc';

export class ButtonDocComponent extends React.Component {
    public render() {
        return <div>
            <h1> Button 按钮 </h1>
            <hr/>
            <div className={'doc-section'}>
                <h2>普通按钮</h2>
                <DocDesc><p>普通的按钮的类型&nbsp;<code>atType=""</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <BasicButtonDoc/>
                    </DocComponent>
                    <DocCode code={basic}/>
                </DocContainer>
            </div>
        </div>;
        ;
    }
}
