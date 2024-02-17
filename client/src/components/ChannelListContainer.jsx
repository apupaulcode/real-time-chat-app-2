// import SideBar from "../elements/Sidebar"
import React from 'react'
import {ChannelList,useChatContext} from  'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './'
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
// import ChannelSearch from './ChannelSearch';

// const SideBar = () =>{
//   <div className='channel-list__sidebar'>
//     <div className='channel-list__sidebar__icon1'>
//         <div className='icon__inner'>
//             <img src={HospitalIcon} alt="" width='30' />
//         </div>
//     </div>
//     <div className='channel-list__sidebar__icon2'>
//         <div className='icon__inner'>
//             <img src={LogoutIcon} alt="" width='30' />
//         </div>
//     </div>
//   </div>
// }


const ChannelListContainer = () => {
  return (
    <>
    {/* sidebar  starts */}
      <div className='channel-list__sidebar'>
       <div className='channel-list__sidebar__icon1'>
        <div className='icon1__inner'>
            <img src={HospitalIcon} alt="" width='30' />
        </div>
      </div>
      <div className='channel-list__sidebar__icon2'>
        <div className='icon2__inner'>
            <img src={LogoutIcon} alt="" width='30' />
        </div>
      </div>
     </div>
     {/* sidebar ends */}
     {/* company header starts */}
      <div className='channel-list__list__wrapper'>
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Medical Pager</p>
            <ChannelSearch/>
        </div>
      </div> 
     {/* company header ends  */}
     {/* channel list starts here   */}
      <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProp)=>(
          <TeamChannelList
           {...listProp}
           type='team'
          />
        )}
        Preview={(previewProps)=>(
          <TeamChannelPreview
           {...previewProps}
           type='team'
          />
        )}
      />
     {/* channel list ends here  */}
    </> 
  )
}

export default ChannelListContainer
