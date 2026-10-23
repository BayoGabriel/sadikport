import React from 'react'
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/mail.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import "../Styles/Blogf.css"

const Blogfooter = () => {
  return (
    <>
        <div className='bfoot d-flex justify-content-between border-top'>
            <nav className='fnav'>
            <a href='mailto:abubakarsadiqabdulazeez388@gmail.com'><button><img src={facebook}/></button></a>
            <a target="_blank" href='https://x.com/'><button ><img src={twitter}/></button></a>
            <a target="_blank" href="https://www.desynexia.com"><button ><img src={github}/></button></a>
            <a target="_blank" href="https://www.linkedin.com/"><button><img src={Linkedin}/></button></a>
            </nav>
            <p>© Abdulazeez Sadiq</p>
        </div>
    </>
  )
}

export default Blogfooter