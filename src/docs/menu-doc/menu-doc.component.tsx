import * as React from 'react';
import { BasicMenuDoc } from './basic-menu-doc';
import { VerticalMenuDoc } from './vertical-menu-doc';
import { DocCode, DocComponent, DocContainer, DocDesc } from '../doc-container/doc-container.component';
// @ts-ignore
import basic from '!raw-loader!./basic-menu-doc.tsx';
// @ts-ignore
import vertical from '!raw-loader!./vertical-menu-doc.tsx';
// @ts-ignore
import inline from '!raw-loader!./inline-menu-doc.tsx';
import { InlineMenuDoc } from './inline-menu-doc';
import { ThemeMenuDoc } from './theme-menu-doc';

export class MenuDocComponent extends React.Component {
    public render() {
        return <div>
            <h1> Menu 导航菜单 </h1>
            <hr/>
            <div className={'doc-section'}>
                <h2>顶部导航</h2>
                <DocDesc><p>顶部导航需要设置&nbsp;<code>atType="horizontal"</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <BasicMenuDoc/>
                    </DocComponent>
                    <DocCode code={basic}/>
                </DocContainer>
            </div>
            <div className={'doc-section'}>
                <h2>侧边</h2>
                <DocDesc><p>侧边导航需要设置&nbsp;<code>atType="vertical"</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <VerticalMenuDoc/>
                    </DocComponent>
                    <DocCode code={vertical}/>
                </DocContainer>
            </div>

            <div className={'doc-section'}>
                <h2>Inline</h2>
                <DocDesc><p>inline导航需要设置&nbsp;<code>atType="inline"</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <InlineMenuDoc/>
                    </DocComponent>
                    <DocCode code={inline}/>
                </DocContainer>
            </div>

            <div className={'doc-section'}>
                <h2>theme 主题</h2>
                <DocDesc><p>不同的主题&nbsp;<code>theme="'light' | 'dark' | 'dracula'"</code></p></DocDesc>
                <DocContainer>
                    <DocComponent>
                        <ThemeMenuDoc/>
                    </DocComponent>
                    <DocCode code={inline}/>
                </DocContainer>
            </div>
        </div>;
        ;
    }
}
