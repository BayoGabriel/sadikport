import React, { useCallback, useEffect, useState } from 'react'
import "../Styles/AWorks.css"
import "../Styles/Aboutme.css"
import canv from "../Assets/Images/block.jpg"
import canv2 from "../Assets/Images/renarc.jpg"
import canv1 from "../Assets/Images/lake.jpg"
import canv3 from "../Assets/Images/meme.jpg"
import canv4 from "../Assets/Images/ecom.jpg"
import canv5 from "../Assets/Images/dash.jpg"
import canv6 from "../Assets/Images/we.jpg"

const Myworks = (props) => {
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
  const availableArray = [
    {
      img: canv5,
      title: "CribInn",
      body: "Property marketplace connecting landlords, tenants & seekers — 40,000+ listings",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "marketplacewebmobile"
    },
    {
      img: canv4,
      title: "BoldSwitch",
      body: "Fintech suite: consumer & business banking, Scan & Pay, QR payments, virtual cards",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "fintechmobileweb"
    },
    {
      img: canv2,
      title: "Bravoo",
      body: "UK fintech for remittances to Nigeria & building UK credit profile",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "fintechweb"
    },
    {
      img: canv3,
      title: "THE LODA",
      body: "Multi-service platform: ride-hailing, truck-hailing, tricycles & logistics",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "mobilesaas"
    },
    {
      img: canv1,
      title: "Police Crime & Investigation Platform",
      body: "GovTech platform digitizing case management & investigative workflows",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "saasweb"
    },
    {
      img: canv,
      title: "Cuddle Realty",
      body: "PropTech investment mobile app with ROI portfolio dashboards",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "mobilemarketplace"
    },
    {
      img: canv6,
      title: "Enterprise SaaS Suite",
      body: "Fuel, Construction, Staff & Logistics Management, MAAB Luxury & UK Honey",
      preview: "https://www.desynexia.com",
      github: "",
      stack: "saasweb"
    }
  ]
  const [works, setWorks] = useState(availableArray)
  const [bg, setBg] = useState("all")
  const filterer = useCallback((e) => {
    const filteredArray = availableArray.filter(item => item.stack && item.stack.includes(e));
    setWorks(filteredArray);
    setBg(e)
  }, [availableArray]);
  const filterer2 = useCallback(() => {
    setWorks(availableArray);
    setBg("all")
  }, [availableArray]);
  return (
    <>
        <div className='container-fluid p-0 aboutme mw'>
            <div className='about'><p>WORKS</p></div>
            <div className='container-fluid above'>
                <p className='am'>MY WORKS</p>
                <div className='anime' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='move' style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
                </div>
            </div>
            <div className='workType'>
              <button style={{backgroundColor: `${hcolor && bg === "all" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer2()}><span style={{color: `${bg === "all" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>ALL</span></button>
              <button style={{backgroundColor: `${hcolor && bg === "fintech" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer("fintech")}><span style={{color: `${bg === "fintech" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>FINTECH</span></button>
              <button style={{backgroundColor: `${hcolor && bg === "saas" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer("saas")}><span style={{color: `${bg === "saas" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>ENTERPRISE SAAS</span></button>
              <button style={{backgroundColor: `${hcolor && bg === "mobile" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer("mobile")}><span style={{color: `${bg === "mobile" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>MOBILE</span></button>
              <button style={{backgroundColor: `${hcolor && bg === "web" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer("web")}><span style={{color: `${bg === "web" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>WEB</span></button>
              <button style={{backgroundColor: `${hcolor && bg === "marketplace" ? prop1 && prop1.length > 0 ? prop1 : hcolor : prop2 && prop2.length > 0 ? prop2 : hcolor2}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}} className='drewo' onClick={() => filterer("marketplace")}><span style={{color: `${bg === "marketplace" ? "black" : prop1 && prop1.length > 0 ? prop1 : hcolor}`}}>MARKETPLACE</span></button>
            </div>
            <div className='row workCanvas pt-3'>
              {works.map((e)=>
              <div className='col-xl-4 col-md-6'>
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "8px"}} className='bgCanvas p-3'>
                  <div className='canvasImgContainer'>
                    <div className='canvasImgCover'>
                      {e.github.length > 1 &&
                      <a target='_blank' href={e.github}><button className="btngit" style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"}`}}>
                        <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="black" height="40" width="40">
                          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                        </svg>
                      </button></a>}
                      {e.preview.length > 1 &&
                      <a target='_blank' href={e.preview}><button className="btngit" style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"}`}}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 11L21.2 2.80005" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 6.8V2H17.2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                      </button></a>}
                    </div>
                    <img className='canvasImg' src={e.img}/>
                  </div>
                  <h4>{e.title}</h4>
                  <h6>{e.body}</h6>
                </div>
              </div>)}
            </div>
            {/* <div className='loadWrapper pb-5'><button className='drewo mb-5'><span>LOAD MORE</span></button></div> */}
        </div>
    </>
  )
}

export default Myworks