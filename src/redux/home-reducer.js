import data from '../data.json'

const SET_FILTER_DATA_BY_LENGTH = 'SET_FILTER_DATA_BY_LENGTH'
const SET_FILTER_DATA_BY_CONTAINS = 'SET_FILTER_DATA_BY_CONTAINS'
const SET_REGISTER = 'SET_REGISTER'

let initialState = {
    data: data.data,
    filterData: [],
    isRegister: false,
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_DATA_BY_LENGTH: {
            const filterData = state.data.filter(elem => elem.length >= action.inputValue)
            return {
                ...state,
                filterData: [...filterData]
            }
        }
        case SET_FILTER_DATA_BY_CONTAINS: {
            const filterData = state.isRegister ?
                state.data.filter(elem => elem.includes(action.inputValue)) :
                state.data.filter(elem => elem.toUpperCase().includes(action.inputValue.toUpperCase()))
            return {
                ...state,
                filterData: [...filterData]
            }
        }
        case SET_REGISTER: {
            return {
                ...state,
                isRegister: !state.isRegister
            }
        }
        default:
            return state
    }
}

export const setFilterDataByLength = (inputValue) => {
    return {
        type: SET_FILTER_DATA_BY_LENGTH,
        inputValue,
    }
}

export const setFilterDataByContains = (inputValue) => {
    return {
        type: SET_FILTER_DATA_BY_CONTAINS,
        inputValue,
    }
}
export const setRegister = () => {
    return {
        type: SET_REGISTER,
    }
}
