/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BudgetAdd } from '../Slice/Budget'
import { Money } from '../Slice/Expence'

export default function MoneyManager() {
    const dispatch = useDispatch()

    // Correct selector to use the keys defined in the store
    const credit = useSelector((state) => state.BudgetKey)
    const debit = useSelector((state) => state.ExpenceKey)

    const [creditAmount, setCreditAmount] = useState('')
    const [debitAmount, setDebitAmount] = useState('')
    const [resone, setResone] = useState('')

    const handleCredit = () => {
        if (creditAmount) {
            dispatch(BudgetAdd(Number(creditAmount)))
            setCreditAmount('')
        }
    }

    const handleDebit = () => {
        if (debitAmount && resone) {
            dispatch(Money({debitAmount : Number(debitAmount), resone }))
            setDebitAmount('')
            setResone('')
        }
    }

    return (
        <div>
            <h1 >Money Manager</h1>

            <div className="main">
                <div className="inner-1">
                    <div className="cricle">

                    {
                        credit && 
                        <h1 className='moneyadd'>{credit.count}</h1> 
                    }

               

                    </div>
                    <input value={creditAmount} className='set-Money' type="text" placeholder='Set Money' onChange={(e)=>setCreditAmount(e.target.value)}/>
                    <button className='credit-btn' onClick={handleCredit} >Add Deposite</button> 
                </div>
                <div className="inner-2">
                        <div className="inputs-divs">
                            <h2>Amount History</h2>
                            <input type="text" value={debitAmount} className='amount-debit' placeholder='Enter Amount' onChange={(e) => setDebitAmount(e.target.value)}/>
                            <input type="text" value={resone} className='amount-resone' placeholder='Enter Resone' onChange={(e) => setResone(e.target.value)}/>

                            <button onClick={handleDebit} className='money-debit-btn'>Debit</button>



                            <table border={1}>
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Resone</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    debit &&
                                    debit.storeData.map((e,i)=>{
                                        return <tr key={i}>
                                            <td>{e.debitAmount}</td>
                                            <td>{e.resone}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        </div>

                        
                </div>
            </div>
        </div>
    )
}
