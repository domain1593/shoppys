import { getProducts } from '../../api/products/products.api';
import actionEnum from '../../enums/actions.enums';

export const getData = () => {
    return {type: actionEnum.FETCHING_DATA}
}

export const getDataSuccess = (data) => {
    return {type: actionEnum.FETCHING_DATA_SUCCESS, data}
}

export const getDataPeopleSuccess = (dataPeople) => {
    return {type: actionEnum.FETCHING_DATA_PEOPLE_SUCCESS, dataPeople}
}

export const getDataFailure = (data) => {
    return {type: actionEnum.FETCHING_DATA_FAILURE}
}

export const fetchData = () => {
    return (dispatch) => {
        
        dispatch(getData())

        getProducts()
        .then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}
