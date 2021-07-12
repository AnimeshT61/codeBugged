import React,{useState} from 'react'

function Plans() {
    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return (
        <div className="plan-wrap">
            <div>
                <h2 align="center" className="text-white display-4">Pick a plan and get 10,000 free conferencing minutes</h2>
            </div>
            <div>
                <p align="center" className="lead h4">After the first 10,000 free minutes, you pay only for what you use. No lock-in.</p>
            </div>
            <div className="Plans row ">
                    <div className="video-plan-1 col-12 col-lg-5">
                        <div className="icon"><img src="https://img.icons8.com/plasticine/144/000000/camera--v1.png"/></div>
                        <h2 align="center" className="text-white">Video</h2>
                        <h3 align="center" className="text-white">Do everything from online education to events and video conferencing</h3>
                        <div align="center" className=" flex justify-center items-center mt-4 mb-2 pb-1">
                            <button className={toggleState==1 ? "tabs active-tabs rounded-full text-white focus:outline-none py-2 px-3.5 text-sm leading-6 font-normal text-white bg-black bg-opacity-25 " : "tabs rounded-full text-white focus:outline-none py-2 px-3.5 text-sm leading-6 font-normal text-white bg-black bg-opacity-25 "} onClick={()=>toggleTab(1)}>HD plan</button>
                            <button className={toggleState==2 ? "tabs active-tabs rounded-full text-white focus:outline-none py-2 px-3.5 text-sm leading-6 font-normal text-white bg-black bg-opacity-25 " : "tabs rounded-full text-white focus:outline-none py-2 px-3.5 text-sm leading-6 font-normal text-white bg-black bg-opacity-25 "} onClick={()=>toggleTab(2)}>SD plan</button>
                        </div>
    
                        <div className={toggleState==1 ? "contents active-contents" : "contents"}>
                        <div className="details mt-7 flex justify-between w-full items-center">
                            <div className="text-white">10,000 conferencing minutes</div>
                            <div  className="text-white">Free</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div className="text-white">Conferencing</div>
                            <div className="flex">
                                <div className=" prev-price">$8</div>
                                <div  className="new-price text-white">$4</div>
                            </div>
                        </div>
                        
                            <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                                <div  className="mini-details">After the first 10,000 free<br/> conferencing minutes</div>
                                <div  className="mini-details">per participant <br/>per 1000 minutes</div>
                            </div>
                       
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">Recording</div>
                            <div className="flex">
                                <div className=" prev-price">$20</div>
                                <div  className="new-price text-white">$10</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Record entire calls</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">RTMP Out</div>
                            <div className="flex">
                                <div className="prev-price">$24</div>
                                <div  className="new-price text-white">$12</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Live stream it to facebook live, twitch <br/> and other destinations</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>

                    </div>
                    <div className={toggleState==2 ? "contents active-contents" : "contents"}>
                        <div className="details mt-7 flex justify-between w-full items-center">
                            <div className="text-white">10,000 conferencing minutes</div>
                            <div  className="text-white">Free</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div className="text-white">Conferencing</div>
                            <div className="flex">
                                <div className=" prev-price">$4</div>
                                <div  className="new-price text-white">$2.4</div>
                            </div>
                        </div>
                        
                            <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                                <div  className="mini-details">After the first 10,000 free<br/> conferencing minutes</div>
                                <div  className="mini-details">per participant <br/>per 1000 minutes</div>
                            </div>
                       
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">Recording</div>
                            <div className="flex">
                                <div className=" prev-price">$10</div>
                                <div  className="new-price text-white">$6</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Record entire calls</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">RTMP Out</div>
                            <div className="flex">
                                <div className="prev-price">$12</div>
                                <div  className="new-price text-white">$7.2</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Live stream it to facebook live, twitch <br/> and other destinations</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>

                    </div>
                </div>
                <div className="video-plan-2 col-12 col-lg-5">
                    <div className="icon"><img src="https://img.icons8.com/nolan/144/headphones.png"/></div>
                        <h2 align="center" className="text-white">Audio Only</h2>
                        <h3 align="center" className="text-white">Planning a Clubhouse style audio chatroom? This is the plan for you</h3>
                        <br/>
                        <br/>
                        <br/>
                        <div className="plan description">
                        <div className="details mt-7 flex justify-between w-full items-center">
                            <div  className="text-white">10,000 conferencing minutes</div>
                            <div  className="text-white">Free</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">Conferencing</div>
                            <div className="flex">
                                <div className=" prev-price">$1</div>
                                <div  className="new-price text-white">$0.6</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">After the first 10,000 free<br/> conferencing minutes</div>
                            <div  className="mini-details">per participant <br/>per 1000 minutes</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">Recording</div>
                            <div className="flex">
                                <div className="prev-price">$3</div>
                                <div  className="new-price text-white">$1.5</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Record entire calls</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>
                        <div className="h-px w-full bg-white bg-opacity-25 mt-5"><hr/></div>
                        <div className="details mt-5 flex justify-between w-full items-center">
                            <div  className="text-white">RTMP Out</div>
                            <div className="flex">
                                <div className="prev-price">$4</div>
                                <div  className="new-price text-white">$2.5</div>
                            </div>
                        </div>
                        <div className="details flex justify-between w-full items-start text-orange-750 text-xs leading-5">
                            <div  className="mini-details">Live stream it to facebook live, twitch <br/> and other destinations</div>
                            <div  className="mini-details">per 1000 minutes</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans;
