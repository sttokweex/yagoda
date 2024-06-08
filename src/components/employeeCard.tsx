import React from 'react';

import more from '../assets/img/more.svg'
export const EmployeeCard: React.FC<{ svg: string, name: string, prof: string,bool?: boolean }> = ({ svg, name, prof,bool=true }) =>{

    return(
        <div className='empCard'>
            <div><img src={svg}/></div>
            <div className='empName'>{name}</div>
            <div className='empProf'>{prof}</div>
            {bool ? <button style={{background: 'transparent', border: 'none'}}><img src={more} alt='moreButton'/></button>:<></>}
        </div>
    )
}