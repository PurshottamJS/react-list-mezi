import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CatalogItem from '../catalog-search/app-catalogitem';

function getCatalogSearch(props) {
    return {items: AppStore.getCatalogSearch(props.params.item)}
}

const CatalogSearch = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <CatalogItem key={ item.itemId } item={ item } />
    } );
    return (
        <div className="row">
            { items }
        </div>
    );
};

export default StoreWatchMixin( CatalogSearch, getCatalogSearch );
