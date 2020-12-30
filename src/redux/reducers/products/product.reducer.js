import actionEnum from '../../../enums/actions.enums';

const initialState =  {
    data: {},
    isFetching: true,
    error: false
}

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionEnum.FETCHING_DATA:
            return {
                ...state,
                data: {},
                isFetching: true
            }
        case actionEnum.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case actionEnum.FETCHING_DATA_PEOPLE_SUCCESS:
            return {
                ...state,
                dataPeople: action.dataPeople,
                isFetching: false
            }
        case actionEnum.FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true 
            }
        default:
        return state
    }
}

export default dataReducer;
