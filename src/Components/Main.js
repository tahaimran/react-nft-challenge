import React from 'react'
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css'
function Main() {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src='https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4' alt='' />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                     <div className='title'>Bandana Punk</div>
                    <span className='itemNumber'>·#3</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src='https://pbs.twimg.com/profile_images/1468854174871863303/2ZcYygsM_400x400.jpg' />
                    </div>
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x3311C4f764193414c035774fb4f8221ac870208A</div>
                        <div className='ownerHandle'>@tahaimran</div>
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
