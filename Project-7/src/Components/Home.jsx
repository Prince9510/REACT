    import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Home({data}) {
    return ( 
    <div className="main"> 
    <nav className="inner-div"> 
        <Link to={"/"} className="text">Home</Link>
        <Link to={"/Create"} className="text">Add Data</Link>
        <Link to={"/Edit"} className="text">Edit Data</Link>
        <Link to={"/Delete"} className="text">Delete Data</Link>
    </nav> 
    <h1 className="h1">Student Data</h1> 
    <table className="data-table"> 
        <thead> 
        <tr> 
            <th>Roll No</th>
            <th>Name</th> 
            <th>City</th> 
            <th>marks</th> 
        </tr> 
        </thead> 

        <tbody>
            {
                data && 
                data.map((e,i)=>{
                    return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.marks}/100</td>
                </tr>
                })
            }
        </tbody>
    </table>    
    </div>
    )
    }
