import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from './routes';

export function RouteWithSubRoutes(route: { [x: string]: any }) {
    return (
        <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}
        />
    );
}

export function Header() {
    return (<header id="J-page-header" className="page-header collapse">
            <div className="nav-container">
                <div className="nav-left">
                    <div className="logo"><a href="#/zh" className="router-link-active">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAB7VJREFUaAXlWwlslEUUfvNv78MFSi8VVEARRdQYbDkqbVBSiEhiYjgSRGIiRo2JqWKs0KwcakSShgQTQhSJYsVAE0+KGs6mR0gVNYQCGjEi3bZAW7bndnfH9/7ubnf/zu7+/+xfdqsv2fz/zD/z5n1zvHnz5i2DUaKlNp52Fdrmcxd/iAOfzoFNZwzyOOeZwCBTbZaDgzHm4BzsDPg5BuwcS2BNWZBT+7WN9Y6GaMxMpnNt9hzuhlUe4E8i3wLgkCTFn4ET6zUqwKqZBT6rs+W1SfERVDIF8Fxb2yMet+c15F+KI5ggaEc6C2eACyvXKBZlW50t54Q0I2/FqADPq2gpcXtgEweYH60geuqjsLWQABsbbPnH9JQXlZECXLS1Pd/Z594OwFeKmI5+HqtKSrWUnXwzu8VoW4YBF1a0LeYeTxWCtRptzNzyrIspysqGTTmHjPBVjBQu2NBaxrnnm9iDJam5lWQhmYxg0DXCi3fw5I42+y5cq2uMML9RZRHE3vE5eesOvcwGIrUZEXDR245sZ1/Pl8D5nEjMYvqdsfqk1PRlJ8sz28PJEXZK08iOCbCEEAeEZCWZpQHTNI77kQ1Eh6BVmQPzNO8hR1hVUHG6ZjUYgpKkZ8IpMuEaVrce0sach+yQoFbiLcGYhzHlcdGWNQKw16g4Gx9bTzQ9ybrQOJmhNU5G2L1eC8o0oyI7U4Hie1LgvsmJcGdeIkzIUCA9mUH/IIfOXg+0drrh9F+D8NOfTvj5ohM8OCd9tO+lLJiam+hL+p87v3fAJyd7/GnxC7cOYYFVgd+DRrjQ1lLMXXA0sIDs+wO3JcLa4gx4eGoS4AFAFxs7gq8+1QsHG3uhZ4BDdICHmmQJUBJoewePsAs265IsTKHUJAZvLLsJFs1KDVNK/ClvnAVeeCwTlhemwfZvHeJCRnOHMBX5qvm7fs7G9gUe7jrm+yDzvD3bAu+sGA935AT3owwvqoNHTeHs0Delh1tVWEJx/ebs45Tj18Ic3K8OFzH+Nm96Mny0Lss0sCSB3qUQSdpAbCpg8lRgpdJIFUN9nzzRApufskJasr//QhWNVX6pFyMep5HILSPrqUhGJfruinERwbZdd0Nt8wD8bh+Eaz0eoLWeZ7VAwbRkVYNbFP/qMr1TCBt3M9LWlSpgrw9KqqHXl1phimDr8DFrQc2760cHHP61H9ekL3f4ued4D+SjsnpuYQaU3p9i2jQebmHozYuxUiHvImYVaAvoSd97ayIseTC0Nq47PwCrd16Bml/EYH1tUKe8dbALyvd3Qr9T0Cu+gtE9CwirQq5UWe/isyUZIUWobe6Hsk87oLtfP4CjZwbUOi63/johBdB+QA8qYVXIb6z9piedhRZT4TSxF/ZyhwsqDnQJp3Ak3k1ocX3wg0l7sKYxwqqQk1yTrytJ5qISQtHsPtINvWgpydL++l745xp5Z80lwoqAmRTgWWgbi6gTNfBhXLPRELp+4YsG8y8eCKtC1x8ywt2VLwZcf2Eg6AAgw5vqnDgb0T1lmDVhVXCPGrrnMVidTj0i+qPVnKlImrtnAIfaRCKseH3jvdgyyJiOeCLqwCltFl11mMdLlQmxiodJh8ROl1gppYhnug6OI4sMjsL2pOAeLLUHOELsrzloLsYtIVZUWkwK8MV28VqdPSWslzSmfUFYUWmBXUaK5suDwmozbkmASVnxOcqEFU0Hfk4oeYRMOvmIiM6wzz8qpfhF7EzNI6wImEkB/u3vQaCtQ0QLZ6agiydF9CmmeYQVvR+sSVaKfbWhPYfly6wwe4rY1pZtL9p6hFWhABLciymmwjB91dQLdFAQUQoe8CvXjIe1C9IhMR6WNGIkrIo3WqZRJHSkPCdiLf+8E0LtyeTFWIfr+cAr2bC6KF31d+n02EZqWuZ7I2FVPR4ULYMeAb8r0wi35ssuqPzuOqx/IrTvPhf35hcXZao/N3ra6YAxKF7+QU1PlLeLgvhQgjDSUwVMoUHMzbbJ+rWqT/XBzElJYb0f1BgRjXpW5o2d47hzuAgjta+alt44qBrKkKVN1V2w+4gDPIF3JbLMzK9X44v18tvSFAcVbTsfHu1RXTTX+0w2+qMULBCbHzAFfeH5pzZK3lB/wQlPo+Pu0Om+uBhtwhQY0OYHTEAtClREC5jq27s8qhdy+Y4rsPd4N1waBXeNbjkxkC2w7IhDbcEGOy5u8wPOyGFw980JeF1qAWuaAqi7pImuVs9cEtvywUxZVeOWvKDrUlVLBxaiCDe8V11i9oX4tW4P1J2Xsm8CxTPwrl6Il2krBE1p+kg35hThhlcA8aV5tJKHS1PIA2LQ3v5TlRGAKVONjeBsPb2PSULZRfEdhCXsSirc0PIxOnLWjCXQCGhvw5b8Z0LJLBxhX2EK58OpXe9Lx/0TZVVlDiNoWMAUu0jhfGMCtDf0MFK8ZVjA1FEUuzghO7eEpkqYjovpJ5KNZIwUZ0lCYln9pEa4Mf5e3ASs0U6CCqpxSy4Gq+sjQ4CJ5f8qQJwAk7qnCDecHFWUjg2pfwGYEWrrCSeT4REOZEaBbIBxULh1zQ/MH613FDY2f/LQAqIYL29o0Kj9jYeB5X1frJW2fSPpqEZY21DB1tZcpZ+v9AaQ/Hf/qKUFTul4/SvevyLy2yevqLD7AAAAAElFTkSuQmCC"
                            className="logo-img"/> <span>AT ANGULAR UIKIT</span></a>
                    </div>
                    <i className="icon icon-menu nav-icon"/>
                </div>
                <div className="nav-right">
                    <ul className="navbar">
                        <li><a className="">联系我</a></li>
                    </ul>

                </div>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo"/>
                <div className="footer-desc" style={{float: 'left'}}>
                    <div className="footer-copyright">© 2017 Created by <a href="//ng-at.thunderjava.com"
                                                                           target="_blank">Icepoint1999</a></div>
                </div>
                <div style={{float: 'right'}}>
                    <a href="https://github.com/icepoint0/at-angular">
                        <img style={{width: '40px', height: '40px'}}
                             src="data:image/png;base64,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"/>
                    </a>
                </div>
                <div className="clearfix"/>
            </div>
        </footer>
    );
}

class Layout extends React.Component {
    public render() {
        return (<div className={'wrapper'}>
            <Header/>
            <div className={'at-container row at-row'} style={{margin: '40px auto'}}>
                {this.props.children}
            </div>
            <Footer/>
        </div>);
    }
}

const Root = () => (
    <Layout>
        <BrowserRouter>
            <div>
                {Routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </BrowserRouter>
    </Layout>

);

ReactDOM.render(
    <Root/>
    ,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
