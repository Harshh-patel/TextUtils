import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

   
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}` }style={{
      border:'5px solid red',
     
    }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>

          {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
 </li> */}
         <b>
         <div className="container-fluid" style={{marginInline:'100%'}}>
    <span className="navbar-text">

      TUVOC TECHNOLOGIES
    </span>
  </div></b>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        
        <div className={`form-check form-switch text-${props.mod}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ENABLE DARK MODE</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string,
aboutText:PropTypes.string}

Navbar.defaultProps = {
    title: "defaultTitle", 
    aboutText: "About text here"
}



  
