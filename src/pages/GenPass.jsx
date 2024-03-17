import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import '../App.css';

export default function GenPass(prop){
    
  return (
    <div>
        <Navbar title="Textutils"  mode={prop.mode} togglemode={prop.togglemode} />
        <Alert  alert={prop.alert}/>
        <br /><br /><br /><br />
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link href="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};


