import React from 'react'

function Footer() {
    return (
        <div className=" max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8 my-0">
            <div className="footer overflow-hidden text-white my-10">
                <div className="left-links overflow-hidden sm:w-full lg:w-2/5">
                    <a className="" href="/"><img src="https://img.icons8.com/color/48/000000/internet--v2.png"/></a>
                    <a className="h3 text-white" style={{fontSize:"100",fontWeight:"10"}} href="/">100ms</a>
                    <br/>
                    <br/>
                    <p>Video conferencing infrastructure for a video-first world. Quick to integrate native iOS, Android & Web SDKs to add live video & audio conferencing to your applications.</p>
                </div>
                <div className="right-links justify-end sm:w-full lg:w-3/5  md:mt-0">
                    <div className="md:mr-8">
                        <div className="com-links md:mt-0 lg:w-1/3">
                            <p>Company</p>
                            <div className="mt-3 text-gray-150">
                                <p><a href="/terms-of-service">Terms &amp; Conditions</a></p>
                                <p className="mt-2">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                        <div className=" com-links md:mt-0 lg:w-1/3">
                            <p>Dev Center</p><div className="mt-3"><p>
                                <a href="https://docs.100ms.live/" target="_blank">SDK Documentation</a>
                            </p>
                            <p className="mt-2"><a href="https://github.com/100mslive/" target="_blank">Quickstart Apps</a></p>
                            <p className="mt-2"><a href="https://status.100ms.live/" target="_blank">API Status</a></p>
                            <p className="mt-2"><a href="https://join.slack.com/t/100mslive/shared_invite/zt-s0tfs8n6-GHrKz~ayL1Ma8wmSfMQOHQ" target="_blank">Community</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm-links mt-4 leading-6 text-white"><div>
            <span className=" mr-4 inline-block"><a className="footer-links" href="https://www.facebook.com/100mslive" target="_blank"><img src="data:image/png;base64,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" className="inline" alt="Facebook"/></a></span>
            <span className=" mr-4 inline-block"><a className="footer-links" href="https://www.linkedin.com/company/100mslive/about/" target="_blank"><img src="data:image/png;base64,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" className="inline" alt="LinkedIn" /></a></span>
            <span className="mr-4 inline-block"><a className="footer-links" href="https://twitter.com/100mslive" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrFrlMCUjVhWmMEIItJR39_qpKt72GnxQow&usqp=CAU" className="inline" alt="Twitter"/></a></span>
            <span className=" mr-4 inline-block"><a className="footer-links-2" href="https://join.slack.com/t/100mslive/shared_invite/zt-s0tfs8n6-GHrKz~ayL1Ma8wmSfMQOHQ" target="_blank"><img src="data:image/jpeg;base64,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" className="inline" alt="Slack" /></a></span>
        </div>
        <p className="mt-4">© 100ms, Inc. All rights reserved.</p>
    </div>
</div>
    )
}

export default Footer;