import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myskills.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Myskills = (props) => {
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

  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();
  
  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter === 95) {
        clearInterval(intervalId);
      } else {
        counter += 1;
        number1.current.innerHTML = counter + "%";
        number2.current.innerHTML = counter + "%";
        number3.current.innerHTML = counter + "%";
        number4.current.innerHTML = counter + "%";
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(95);
  }, []);

  return (
    <>
        <div className='container-fluid p-0 aboutme'>
          <div className='about'><p>SKILLS</p></div>
          <div className='container-fluid above'>
              <p className='am'>MY SKILLS</p>
              <div className='anime' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                  <div className='move' style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
              </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1000">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number1}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}/>
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}/>
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Product Design (UI/UX)</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1500">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number2}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>UX Research</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="2000">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number3}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Design Systems</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2500" className='col-md text-center'>
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number4}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Product Strategy</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Figma - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>FigJam - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Adobe XD - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Photoshop - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                {/* <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={ts}/> Typescript - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div> */}
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Illustrator - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>UX Research - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Prototyping - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p>Design Systems - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
              </div>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Product Strategy - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Wireframing - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Jira - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Notion - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Miro - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Slack - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p>Figma AI - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Myskills