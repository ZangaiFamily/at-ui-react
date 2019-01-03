import * as React from 'react';
import { AtMenu } from '../components/menu/menu.component';

export class DocComponent extends React.Component {
    public render() {
        return <div>
            <AtMenu style={{width: '280px'}} atType={'inline'}>
                <AtMenu.MenuItem>
                    介绍
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    安装
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    快速上手
                </AtMenu.MenuItem>
                <AtMenu.SubMenu title={'基础组件'}>
                    <ul>
                        <AtMenu.MenuItem>
                            3
                        </AtMenu.MenuItem>
                        <AtMenu.MenuItem>
                            4
                        </AtMenu.MenuItem>
                        <AtMenu.MenuItem>
                            5
                        </AtMenu.MenuItem>
                        <AtMenu.MenuItem>
                            6
                        </AtMenu.MenuItem>
                        <AtMenu.SubMenu title={'表单组件'}>
                            <ul>
                                <AtMenu.MenuItem>
                                    3
                                </AtMenu.MenuItem>
                                <AtMenu.MenuItem>
                                    4
                                </AtMenu.MenuItem>
                                <AtMenu.MenuItem>
                                    5
                                </AtMenu.MenuItem>
                                <AtMenu.MenuItem>
                                    6
                                </AtMenu.MenuItem>
                            </ul>
                        </AtMenu.SubMenu>
                    </ul>
                </AtMenu.SubMenu>
            </AtMenu>
        </div>;
    }
};
