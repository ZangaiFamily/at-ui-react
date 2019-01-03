import * as React from 'react';
import { AtMenu } from '../components/menu/menu.component';

export class DocComponent extends React.Component {
    public render() {
        return <div>
            <AtMenu>
                <AtMenu.MenuItem>
                    1
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    2
                </AtMenu.MenuItem>
                <AtMenu.SubMenu title={'asdasd'}>
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
                        <AtMenu.SubMenu title={'asdasd'}>
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
}
