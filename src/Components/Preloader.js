import React, { useEffect, useState } from 'react'
import '../Styles/preloader.css'

const Preloader = () => {      

	return (
		<div id='preloader-active'>
			<div className='preloader d-flex align-items-center justify-content-center'>
				{/* <div className='blur'></div> */}
				<div className='preloader-inner position-relative'>
					{/* <div className='preloader-circle'></div>
					<div className='preloader-img pere-text'> */}
						{/* <img
							className='logo'
							alt='Logo'
							src={Logo}
							width='70px'
							height='30px'
						/> */}
					{/* </div> */}
					
					<div className="loaderr"></div>
				</div>
			</div>
		</div>
	)
}

export default Preloader
