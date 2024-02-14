import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer bg-dark">
        <div className="bg-success">
            <div className="container">
                <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-12 text-center">
                        <a href="/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                        <a href="/"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                        <a href="/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                        <a href="/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
