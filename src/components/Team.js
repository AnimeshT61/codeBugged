import React, { Component } from 'react'

import CarouselTeam from './CarouselTeam.js'
class P5 extends Component {
    render() {
        return (
            <div className="TeamMember">
                <div className="p5">
                        <h2 align="center" className="text-white display-4">Built by Experts</h2>
                        <p align="center" className="text-white lead h4">The team of ex-Hotstar & Facebook engineers who built Hotstar’s 25.3M video concurrency platform with 99.5%+ playback success rate powers your video experiences through 100ms SDKs.</p>
                </div>
                
                <CarouselTeam/>
                <div class="breakpoint mt-5"><hr/></div>
            </div>
        )
    }
}

export default P5;