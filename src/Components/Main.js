import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css'

function Main({selectedPunk, punklistData}) {

    const [activePunk, setActivePunk] = useState(punklistData[1])

    useEffect(()=>{
        setActivePunk(punklistData[selectedPunk])
    },[punklistData,selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' 
                        src={activePunk.image_original_url} alt='' />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'>{activePunk.name}
                    <span className='itemNumber'>·#{activePunk.token_id}</span>

                    </div>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@tahaimran</div>
                        </div>
        
                        <div className='ownerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
