import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import CatalogAPI from '../api/CatalogAPI';

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },
  getCatalog(){
    return CatalogAPI.getCatalog();
  },
  getCatalogSearch : function(search){
    console.log("sadfsaf")
    return CatalogAPI.getCatalogSearch(search);
  },
  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.SEARCH:
                CatalogAPI.search( action.item );
                break;
    }
    AppStore.emitChange();

  })
});

export default AppStore;
