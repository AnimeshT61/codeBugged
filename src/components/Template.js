import React,{useState} from 'react'

function Template() {
    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }

    return (

        <div className="Packs">
                <div className="p4 conatiner">
                        <h2 align="center" className="text-white display-4">Battery-packs included: Pre-built templates.</h2>
                        <p align="center" className="text-white lead h4">Reduce development time to days instead of months by starting with one of our fully-customizable templates.</p>
                </div>
                <div class="bloc-tabs d-flex justify-content-evenly m-5 0">
                        <button className={toggleState==1 ? "tabs active-tabs btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(1)}>Edtech</button>
                        <button className={toggleState==2 ? "tabs active-tabs  btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(2)}>Video Conferencing</button>
                        <button className={toggleState==3 ? "tabs active-tabs  btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(3)}>Social Audio Rooms</button>
                </div>

                 <div className="content-tabs">
                <figure className={toggleState==1 ? "content active-content" : "content"}>
                    
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline  className="Template_template-video__3DZ3I">
                        <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/website-dimension/edtech.mp4" type="video/mp4"/>
                    </video>
                </figure>
                <figure  className={toggleState==2 ? "content active-content" : "content"}>
                
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline className="Template_template-video__3DZ3I">
                        <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/website-dimension/conf-call.mp4" type="video/mp4"/>
                    </video>
                </figure>
                <figure  className={toggleState==3 ? "content active-content" : "content"}>
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline className="Template_template-video__3DZ3I ">
                        <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/Landscape_Final.mp4" type="video/mp4"/>
                    </video>
                </figure>
                </div>
        </div>
    )
}

export default Template;


