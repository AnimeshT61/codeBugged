import React from 'react'

function Help() {
    return (
        <>
            <div className=" help">
                <h2 className="text-white">Didn't find what you are looking for? </h2>
                <a href="#" className="h3">Talk To Us.</a>
            </div>
           
            <div className="help2 px-6 max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between  lg:text-left">
                <div>
                    <h2 className="text-3xl leading-none py-2 font-bold tracking-tight text-white sm:text-4xl">Ready to dive in?</h2>
                    <p className="text-white opacity-50 leading-normal mt-2 text-lg">Transform your business today</p>
                </div>
                <div className="inline-block mt-8 lg:mt-2">
                    <div className="btn btn-primary rounded">Register Now</div>
                    <div className="text-white mt-4">Free 10000 minutes</div>
                </div>
            </div>
            
        </>
    )
}

export default Help;
