import React from 'react';

import more from '../assets/img/more.svg'
export const EmployeeCard: React.FC<{ imageSrc: string, name: string, specialization: string,bool?: boolean }> = ({ imageSrc, name, specialization ,bool=true }) =>{

    return(
        <div className='empCard'>
            <div><img src={imageSrc} alt={`emp+${name}`}/></div>
            <div className='empName'>{name}</div>
            <div className='empProf'>{specialization}</div>
            {bool ? <button style={{background: 'transparent', border: 'none'}}><img src={more} alt='moreButton'/></button>:<></>}
        </div>
    )
}