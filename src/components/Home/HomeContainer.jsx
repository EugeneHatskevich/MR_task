import React from 'react'
import {Home} from "./Home";
import {compose} from "redux";
import {connect} from "react-redux";
import {setFilterDataByContains, setFilterDataByLength, setRegister} from "../../redux/home-reducer";


export const HomeContainer = (props) => {

    const filterLengthHandler = (input) => {
        if (!isNaN(input)){
            props.setFilterDataByLength(Number(input))
        }
    }
    const filterContainsHandler = (input) => {
        props.setFilterDataByContains(input)
    }
    const changeRegisterHandler = () => {
        props.setRegister()
    }

    return (
        <Home filterLengthHandler={filterLengthHandler}
              changeRegisterHandler={changeRegisterHandler}
              filterContainsHandler={filterContainsHandler}
              {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        filterData: state.home.filterData,
        isRegister: state.home.isRegister
    }
}

export default compose(
    connect(mapStateToProps, {
        setFilterDataByLength,
        setFilterDataByContains,
        setRegister
    })
)(HomeContainer)