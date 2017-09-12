import React from 'react';
import CatalogSearch from './catalog-search/app-catalog';
import Catalog from './catalog/app-catalog';
import Template from './app-template';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default () => {
    return (
    	<Router history={browserHistory}>
            <Route path="/" component={ Template}>
				<IndexRoute component={Catalog} />
                <Route path="/:item" component={ CatalogSearch }/>
            </Route>
        </Router>
    );
};
