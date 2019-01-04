import * as React from 'react';
import { AtMenu } from '../components/menu/menu.component';
import { Link } from 'react-router-dom';
import { ComponentsRoutes } from '../routes';
import { RouteWithSubRoutes } from '../index';

export class DocComponent extends React.Component {
    public render() {
        return [<div key={'left'} className={'col-sm-24 col-md-6 col-lg-4 at-sidebar'}>
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
                <AtMenu.SubMenu open title={'基础组件'}>
                    <ul>
                        <AtMenu.MenuItem active>
                            <Link to={'/components/menu'}>
                                Menu
                            </Link>
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
        </div>,
            <div key={'right'} className={'at-markdown col-sm-24 col-md-18 col-lg-20'}>
                <div>
                    {ComponentsRoutes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </div>
            </div>,
        ];
    }
};
