import * as React from 'react';
import { AtButton } from '../../components/button/at-button.component';

export function BasicButtonDoc() {
    return (
        <div>
            <AtButton atType={'primary'}>非主流按钮</AtButton>
            <AtButton atType={'default'}>非主流按钮</AtButton>
            <AtButton atType={'warning'}>非主流按钮</AtButton>
        </div>
    );
}
