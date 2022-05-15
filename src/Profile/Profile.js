import React from 'react'
import PropTypes from 'prop-types'


function Profile ({fullName,bio,profession, Children,handleName}) {
  return (
    <div >
      <div className='prof'>
        
        <h1 style={{color:"#008B8B",fontSize:"35px",fontFamily:"Arial, Helvetica, sans-serif"}}> <span style={{color:"blue",fontSize:"45px" }}>FullName :</span>{fullName} </h1>
        <h2 style={{color:"#008B8B",fontSize:"35px",fontFamily:"Arial, Helvetica, sans-serif"}}> <span style={{color:"blue",fontSize:"45px"}}>Bio :  </span>{bio} </h2>
      <h2 style={{color:"#008B8B",fontSize:"35px",fontFamily:"Arial, Helvetica, sans-serif"}}> <span style={{color:"blue",fontSize:"45px"}}>Profession :   </span>{profession}</h2>
      </div>
      {Children}

        <button className='butt' onClick={()=>handleName(fullName)} style={{fontFamily:"aria"}}> Click me</button>
    </div>
  )
}

Profile.defaultProps={
    profession:"default_prof",
    fullName: "default_name",
    bio: "default_bio",
    Children: " ",
    handleName:()=>alert("")

}

Profile.prototype={
  profession:PropTypes.string,
  fullName:PropTypes.string,
  bio:PropTypes.string,
  Children:PropTypes.element,
  handleName:PropTypes.func
}

export default Profile;