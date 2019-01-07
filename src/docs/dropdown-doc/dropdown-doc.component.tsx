import * as React from 'react';
import {  DocComponent, DocContainer, DocDesc } from '../doc-container/doc-container.component';
// @ts-ignore
// import basic from '!raw-loader!./basic-button-doc';
import { AtDropdown } from '../../components/dropdown/at-dropdown.component';

export class DropdownDocComponent extends React.Component {
    public render() {
        return <div>
            <h1> Dropdown 下拉框 </h1>
            <hr/>
            <div className={'doc-section'}>
                <h2>普通按钮</h2>
                <DocDesc><p>普通的按钮的类型&nbsp;<code>atType=""</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <AtDropdown/>
                    </DocComponent>
                </DocContainer>
            </div>
        </div>;
        ;
    }
}
