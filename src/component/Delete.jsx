import React from 'react'
import Navigation from './Navigation'

const Delete = () => {
  return (
    <div>
         <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}>Delete a Student</h1>
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-control">Reg no</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark">Delete</button>
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

export default Delete