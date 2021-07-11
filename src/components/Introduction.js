import React from 'react'
function Introduction() {
    return (
        <div>
            <section id="first" className="container px-2 ">
                <div className="row  justify-content-center align-items-center mb-5">
                    <div className=" col-12 col-lg-6  pl-0 mb-5 " >
                        <h2 align="left" className="display-2 text-white">Add video conferencing to your app.Without the tears</h2>
                        <p align="left" className="h4 intro-desc">100ms’ powerful SDKs wrap the world’s leading live video experts’ experience into a few lines of code</p>
                        <br/>
                        <a align="left" className="btn btn-primary btn-large" href="#">Get Started</a>
                    </div>
                    <div className="col-12 col-lg-6 pr-0">
                        <figure>
                            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                                <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/original-dimension/Hero.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    </div>
                </div>
                <div className="p2 row text-center align-items-center mb-5">
                    <div className="col-12 col-lg-6 pr-0 order-2 order-lg-1">
                        <figure>
                            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                                <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/website-dimension/autoTune-v2.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6 pl-0 order-1 order-lg-2">
                        <div className=" row">
                            <div className=" pr-20 mb-5">
                                <h3 align="left" className="display-2 text-white">Gold-standard experience with less code</h3>
                                <br/>
                                <p align="left" className="h4 intro-desc">100ms comes with <span className="code-block rounded text-white px-2">autoTune</span>, a set of battle-tested adjustments to video parameters basis network, device and participant count.<br/> <br/>This means you spend less time handling hundreds of video edge cases and more time building your next big thing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center align-items-center mb-5">
                    <div className="col-12 col-lg-6 pl-0">
                        <div className="row justify-content-center">
                            <div className="pr-20 mb-5">
                                <h3 align="left" className="display-3 text-white">Go beyond video with our built-in realtime database<span className="align-middle new rounded ml-5 text-base h5 font-medium text-black bg-brand-400 opacity-100 mx-1 px-3 py-1 rounded-md">Coming Soon</span></h3>
                                <br/>
                                <p align="left" className="h4 intro-desc">Stop spending time building parallel systems for maintaining participant roles, in-video games, shared shopping cart states.<br/><br/>Use <span className="code-block rounded text-white px-2">roomSync</span>, 100ms' embedded realtime database, to build powerful applications in sync with video.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 pr-0">
                        <figure>
                            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                                <source src="https://bc-public-static-assets.s3.ap-south-1.amazonaws.com/website-videos/original-dimension/RoomSync.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Introduction;
