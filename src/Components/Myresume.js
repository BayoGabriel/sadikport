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
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Degree</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Bachelor's Degree</p>
                  <p className='mrp2'>Federal University of Technology, Minna</p>
                  <p className='mrp3'>Completed a Bachelor's degree, building a strong academic foundation that supports a career in product design, strategy, and technology.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Certification</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>UI/UX Design Certification</p>
                  <p className='mrp2'>AptLearn</p>
                  <p className='mrp3'>Earned a professional certification in UI/UX Design, covering user research, interaction design, wireframing, prototyping, and usability best practices.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Certification</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>HTML5 & CSS Certification</p>
                  <p className='mrp2'>AptLearn</p>
                  <p className='mrp3'>Earned a certification in HTML5 and CSS, strengthening the ability to collaborate closely with engineering teams and design technically feasible interfaces.</p>
                </div>
              </div>
            </div>
            <div className='col-md mrrrrr'>
              <div className='d-flex justify-content-start' data-aos="fade-up" data-aos-duration="1000">
                <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9v1.528c-.476.69-3.815 1.971-9.77 1.971-6.239 0-9.736-1.358-10.23-2.088v-1.411h20zm2-2h-24v3.491c0 2.657 6.154 4.009 12.23 4.009 5.922 0 11.77-1.284 11.77-3.895v-3.605zm-2 8.074v4.926h-20v-5.001c-.823-.337-1.478-.711-2-1.096v8.097h24v-7.949c-.583.402-1.262.741-2 1.023zm-8 1.958c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-5-15.032c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                <p className='text-white mreq'>Working Experience</p>
              </div>
              <div className='d-flex justify-content-start mrmov' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Feb 2022 - Aug 2025</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Lead Product Designer</p>
                  <p className='mrp2'>CribInn</p>
                  <p className='mrp3'>Led end-to-end product strategy and UX for a property marketplace connecting landlords, tenants, and property seekers across Nigeria, scaling the platform to 40,000+ listings. Progressed from Product Designer to Lead Product Designer, owning product discovery, roadmap planning, feature prioritization, the company design system, and design QA.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Feb 2024 - Aug 2025</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Senior Product Designer</p>
                  <p className='mrp2'>BoldSwitch</p>
                  <p className='mrp3'>Partnered directly with the CEO to design digital financial products serving 100,000+ users across consumer banking, business banking, Scan & Pay, QR payments, virtual cards, bill payments, transfers, and international remittance — including Bravoo, a UK fintech platform enabling remittances to Nigeria while helping users build their UK credit profile.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Apr 2023 - Present</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Senior Product Designer (Contract)</p>
                  <p className='mrp2'>Amabills Technology</p>
                  <p className='mrp3'>Lead product design across enterprise SaaS, logistics, mobility, construction, HR technology, operational platforms, and digital commerce — including THE LODA multi-service platform, Fuel Management, Construction Management, Staff Management, Logistics Management, Website Monitoring, MAAB Luxury, UK Honey Marketplace, and an EdTech platform.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Nov 2023 - Dec 2024</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Senior Product Designer</p>
                  <p className='mrp2'>JLD Aveo+</p>
                  <p className='mrp3'>Led product strategy across multiple client engagements while managing a team of three Product Designers. Mentored designers through coaching and design critiques, conducted product design interviews, led discovery workshops and UX strategy, and delivered e-commerce, gaming, and travel products.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Aug 2024 - Nov 2024</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Senior Product Designer (Contract)</p>
                  <p className='mrp2'>Mustard Stone Technologies</p>
                  <p className='mrp3'>Led UX strategy for the Nigeria Police Crime & Investigation Management Platform — delivering Case Management, Investigation, Officer Assignment, Registry, Evidence Management, Live Interviews, Reporting & Analytics, and Document Tracking modules — partnering with stakeholders and engineering to digitize investigative workflows and improve operational transparency.</p>
                </div>
              </div>
              <div className='d-flex justify-content-start mrmo' data-aos="fade-up" data-aos-duration="1000">
                <div className='mrdur' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}><p>Jan 2022 - May 2024</p></div>
                <hr className='hrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='hrd'>
                  <hr className='hrr' style={{width: "4px", height: "20px"}}></hr>
                  <img src={circle} className="mrcir"/>
                  <hr className='hrr2' style={{width: "4px", height: "130px"}}></hr>
                </div>
                <hr className='hrrrr' style={{width: "30px", height: "4px"}}></hr>
                <div className='mrbox'>
                  <p className='mrp1' style={{color:prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>Product Designer</p>
                  <p className='mrp2'>Cuddle Realty</p>
                  <p className='mrp3'>Designed the mobile experience for a PropTech investment platform serving 3,000+ users — including investment journeys, onboarding experiences, and portfolio dashboards with ROI analytics — collaborating with founders and engineering through implementation.</p>
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
