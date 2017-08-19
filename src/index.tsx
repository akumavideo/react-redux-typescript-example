import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello';
import AnswerPage from './containers/AnswerPage';
import { enthusiasm } from './reducers/index';
import { AppState } from './types/index';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import './index.css';
import { Link } from 'react-router-dom';
import logger from 'redux-logger'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore<AppState>(
  combineReducers({
    enthusiasm,
    router: routerReducer,
  }),
  applyMiddleware(middleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to={'/'}/>Home</Menu.Item>
            <Menu.Item key="2"><Link to={'/answers'}/>Answers</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route exact={true} path="/" component={Hello}/>
            <Route path="/answers" component={AnswerPage}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ANQ ©2017 Created by akumavideo
        </Footer>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
