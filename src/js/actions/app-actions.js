import AppConstants from '../constants/app-constants';
import { dispatch, register} from '../dispatchers/app-dispatcher';

export default {
    search( item ){
        dispatch( {
            actionType: AppConstants.SEARCH,
            item: item
        } )
    },
}
