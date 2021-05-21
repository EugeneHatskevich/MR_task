import React, {useState} from 'react'

export const Home = (props) => {

    const[input, setInput] = useState('')

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="container mt-4 w-25">
            <div className="mb-3">
                <label className="form-label">
                    Введите значение для фильтра(число для фильтра по длине, строку для фильтра по содержимому):
                </label>
                <input value={input}
                       type="text"
                       className="form-control"
                       onChange={changeHandler}/>
            </div>
            <div className="mb-3 form-check">
                <input className="form-check-input"
                       type="checkbox"
                       checked={props.isRegister}
                       onChange={props.changeRegisterHandler}/>
                <label className="form-check-label">Учитывать регистр</label>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary"
                        onClick={() => {props.filterLengthHandler(input)}}>Фильтр по длине</button>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary"
                        onClick={() => {props.filterContainsHandler(input)}}>Фильтр по содержимому</button>
            </div>
            <div className="border border-success">
                {/*{props.filterData.join(', ')}*/}
                {props.filterData.map((elem, index) => {
                    return <p>{`${++index}.${elem}`}</p>
                })}
            </div>
        </div>
    )
}
