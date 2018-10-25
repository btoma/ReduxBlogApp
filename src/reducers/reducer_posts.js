import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function (posts = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
    }
    return posts;
}