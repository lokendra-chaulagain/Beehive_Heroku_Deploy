import React from 'react'
import "./hobby.scss"
import LaptopIcon from '@mui/icons-material/Laptop';


function Hobby() {
    return (
        <div className="hobbyContainer">
            <div className="hcList">
                <LaptopIcon className='hcIcon' />
                <span className='hcTxt'>Coding</span>
            </div>
        </div>
    )
}

export default Hobby