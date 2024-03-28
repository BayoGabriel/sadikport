import React, { useEffect, useState } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myresume.css"
import education from "../Assets/Images/education.svg"
import circle from "../Assets/Images/circle.svg"
import bag from "../Assets/Images/bag.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Myresume = (props) => {
  const { prop1, prop2, prop3 } = props;

  const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
      const [hcolor, hsetColor] = useState("")
      const [hcolor2, hsetColor2] = useState("")
      const [hrad, hsetRad] = useState(0)
      useEffect(() => {
        const handleStorageChange = () => {
          const savedState = JSON.parse(localStorage.getItem('myColorState'));
          const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
          const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
          if(typeof savedState3 === "number"){
              hsetRad(savedState3)
          }
          if(typeof savedState === "string"){
              hsetColor(savedState)
          }
          if(typeof savedState2 === "string"){
              hsetColor2(savedState2)
          }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);
      useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myColorState'));
        const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
        const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
        if(typeof savedState3 === "number"){
            hsetRad(savedState3)
        }
        if(typeof savedState === "string"){
            hsetColor(savedState)
        }
        if(typeof savedState2 === "string"){
            hsetColor2(savedState2)
        }
      },[])
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <>
      <div className='container-fluid p-0 aboutme'>
        <div className='about'><p>RESUME</p></div>
        <div className='container-fluid above'>
          <p className='am'>MY RESUME</p>
          <div className='anime' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
            <div className='move' style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
          </div>
        </div>
        <div className='container-fluid mt-5 mrcon mb-5'>
          <div className='row'>
            <div className='col-md'>
              <div className='d-flex justify-content-start' data-aos="fade-up" data-aos-duration="1000">
                {/* <img src={education}/> */}
                <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>
                <p className='text-white mreq'>Educational Qualification</p>
              </div>
              <div className='d-flex justify-content-start mrmov' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2006 - 2010</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Primary School Education</p>
                  <p className='mrp2'>Baptist Primary School</p>
                  <p className='mrp3'>Received standard primary education and developed strong foundation in academics and personal development.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2011 - 2017</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Secondary School Education</p>
                  <p className='mrp2'>St. Alphonsus Secondary School</p>
                  <p className='mrp3'>Received comprehensive education with focus on academics and extracurriculars, developed strong critical thinking and problem-solving skills</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2018 - 2023</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Bachelor Of Engineering</p>
                  <p className='mrp2'>Olusegun Agagu University Of Science And Technology</p>
                  <p className='mrp3'>Successfully completed a rigorous Bachelor of Engineering in Electrical Engineering program, gaining a strong foundation in the principles, theories, and practical applications of Electrical engineering.</p>
                </div>
              </div>
            </div>
            <div className='col-md mrrrrr'>
              <div className='d-flex justify-content-start' data-aos="fade-up" data-aos-duration="1000">
                <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9v1.528c-.476.69-3.815 1.971-9.77 1.971-6.239 0-9.736-1.358-10.23-2.088v-1.411h20zm2-2h-24v3.491c0 2.657 6.154 4.009 12.23 4.009 5.922 0 11.77-1.284 11.77-3.895v-3.605zm-2 8.074v4.926h-20v-5.001c-.823-.337-1.478-.711-2-1.096v8.097h24v-7.949c-.583.402-1.262.741-2 1.023zm-8 1.958c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-5-15.032c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                <p className='text-white mreq'>Working Experience</p>
              </div>
              <div className='d-flex justify-content-start mrmov' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2021 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Frontend and Backend Instructor</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Since 2021, I have been actively engaged in instructing both frontend and backend technologies as part of the Soair Africa Bootcamp. In this role, I conduct comprehensive sessions within the six-month program, facilitating learning for cohorts ranging from 50 to 300 students per session. I provide hands-on guidance to ensure that students not only acquire but also master the skills necessary for success in the dynamic field of web development.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2021 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Back-end Developer</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Accomplished Back-end Developer at Soair Africa, where I leveraged my expertise in Node.js to design and develop high-performance, scalable and secure server-side systems. Collaborated with cross-functional teams to deliver innovative solutions, and ensured seamless data integration for clients resulting in outstanding results.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2021 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Front-end Developer</p>
                  <p className='mrp2'>SOAIRAfrica</p>
                  <p className='mrp3'>Expert Front-end Developer at Soair Africa, where I brought designs to life with my proficiency in HTML, CSS, JavaScript and React.js. Collaborated with cross-functional teams to develop and maintain user-friendly websites, and delivered visually stunning and high-performing web experiences for clients.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>2021 - present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>CoFounder & Full-Stack Developer</p>
                  <p className='mrp2'>ITB Technoly</p>
                  <p className='mrp3'>Co founder and fullstack Developer at Itb Technology, where I brought designs to life with my proficiency in HTML, CSS, JavaScript and React.js. Collaborated with cross-functional teams to develop and maintain user-friendly websites, and delivered visually stunning and high-performing web experiences for clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myresume
