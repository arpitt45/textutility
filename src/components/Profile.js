import React from 'react'

export default function Profile() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-1">
            <div className="card text-center side">
                <div className="card-body">
                    <img src="logo192.png" alt="" className='rounded-circle' width={150}/>
                    <div className="mt-3">
                        <h3>arpit kashyap</h3>
                        <a href="">home</a>
                        <a href="">work</a>
                        <a href="">setting</a>
                        <a href="">signout</a>
                    </div>
                </div>
            </div>
         </div>
         <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
                <h1 className='m-3 pt-3'>About</h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>full name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            arpit kashyap
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Email</h5>
                        </div>
                        <div className="col-md-9 text-secondary">abc@gmail.com</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Phone</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            76689388555
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Address</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            xyz area51
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 content">
                <h1 className='m-3'>Recent project </h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>project Name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            project description
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}
