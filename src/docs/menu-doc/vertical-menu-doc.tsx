import { AtMenu } from '../../components/menu/menu.component';
import * as React from 'react';

export function VerticalMenuDoc() {
    return (
        <AtMenu style={{width: '200px'}} atType={'vertical'}>
            <AtMenu.SubMenu title={'导航彩蛋1'}/>
            <AtMenu.SubMenu title={'导航彩蛋2'}/>
            <AtMenu.SubMenu title={'导航彩蛋3'}/>
            <AtMenu.SubMenu title={'导航彩蛋4'}/>
            <AtMenu.SubMenu title={'低调的导航彩蛋5'}>
                <AtMenu.MenuItem>
                    低调的彩蛋1
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    低调的彩蛋2
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    低调的彩蛋3
                </AtMenu.MenuItem>
                <AtMenu.MenuItem>
                    低调的彩蛋1
                </AtMenu.MenuItem>
                <AtMenu.SubMenu title={'低调的鸟'}>
                    <AtMenu.MenuItem>
                        低调的彩蛋1
                    </AtMenu.MenuItem>
                    <AtMenu.MenuItem>
                        低调的彩蛋2
                    </AtMenu.MenuItem>
                    <AtMenu.MenuItem>
                        低调的彩蛋3
                    </AtMenu.MenuItem>
                    <AtMenu.MenuItem>
                        低调的彩蛋1
                    </AtMenu.MenuItem>
                    <AtMenu.MenuItem>
                        低调的彩蛋1
                    </AtMenu.MenuItem>
                </AtMenu.SubMenu>
            </AtMenu.SubMenu>
        </AtMenu>
    );
}
