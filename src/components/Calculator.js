import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [val, setVal] = useState("");
    const backspace = () => {
        try {
            setVal(val.slice(0, -1))
        } catch (error) {
            setVal("")
        }
    }
    const calculate = () => {
        try {
            setVal(eval(val))
        } catch (error) {
            setVal("Error")
        }
    }
    return (
        <div className=' theme'>
            <div className="container p-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-5 fw-bolder text-center text-light"> Calculator</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-4 bor_C pt-3">
                        <div className="card border-info mb-3  ">
                            <div className="card-body inp_c  ">
                                <input type="text" className='form-control form-control-lg mb-4 text-center 
                         bg-light fs-1 p-3 inp_c  shadow' value={val} onChange={(e) => setVal(e.target.value)} />
                                <div className="row">
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="1"
                                            onClick={(e) => setVal(val + e.target.value)} >1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="2"
                                            onClick={(e) => setVal(val + e.target.value)} >2</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="3"
                                            onClick={(e) => setVal(val + e.target.value)} >3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow px-2 py-4 fs-4' value="C"
                                            onClick={() => backspace()} >Clear</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="4"
                                            onClick={(e) => setVal(val + e.target.value)} >4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="5"
                                            onClick={(e) => setVal(val + e.target.value)} >5</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="6"
                                            onClick={(e) => setVal(val + e.target.value)} >6</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="+"
                                            onClick={(e) => setVal(val + e.target.value)} >+</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="7"
                                            onClick={(e) => setVal(val + e.target.value)} >7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="8"
                                            onClick={(e) => setVal(val + e.target.value)} >8</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="9"
                                            onClick={(e) => setVal(val + e.target.value)} >9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="*"
                                            onClick={(e) => setVal(val + e.target.value)} >X</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="."
                                            onClick={(e) => setVal(val + e.target.value)} >.</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="0"
                                            onClick={(e) => setVal(val + e.target.value)} >0</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="="
                                            onClick={() => calculate()} >=</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-dark shadow p-4 fs-4' value="/"
                                            onClick={(e) => setVal(val + e.target.value)} >/</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
