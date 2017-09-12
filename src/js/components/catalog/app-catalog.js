import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CatalogItem from '../catalog-search/app-catalogitem';

function getCatalog(props) {
    return {items: AppStore.getCatalog()}
}

const Catalog = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <CatalogItem key={ item.itemId } item={ item } />
    } );
    return (
        <div className="row">
            { items }
        </div>
    );
};

export default StoreWatchMixin( Catalog, getCatalog );
