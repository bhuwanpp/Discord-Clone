
export default function Footer() {
    
    const eng = './src/images/engflag.png'
  return (
    <div className="footer   bg-textBold pt-20 pb-14 px-12 ">
        <div className="top flex justify-between">

        <div className="left">
            <div className="eng flex h-12  items-center gap-1 text-sm cursor-pointer text-white  ">
                <img src={eng} alt="eng flag"  className='w-7 h-4'/>
                <p>English , USA</p>
                <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>
            <div className="social text-white flex gap-6 text-2xl pt-10">
            <i class="fa-brands fa-twitter cursor-pointer"></i>
            <i class="fa-brands fa-instagram cursor-pointer"></i>
            <i class="fa-brands fa-facebook cursor-pointer"></i>
            <i class="fa-brands fa-youtube cursor-pointer"></i>
            <i class="fa-brands fa-tiktok cursor-pointer"></i>
            </div>
        </div>
        <div className="right text-white flex text-base gap-24">
            <div className="first flex flex-col gap-2">
                <h5 className="text-buttonColor  pb-3">Product</h5>
                <p className="cursor-pointer hover:underline">Download</p>
                <p className="cursor-pointer hover:underline">Nitro</p>
                <p className="cursor-pointer hover:underline">Status</p>
                <p className="cursor-pointer hover:underline">App Directory</p>
            </div>
            <div className="second flex flex-col gap-2">
                <h5 className="text-buttonColor  pb-3">Company</h5>
                <p className="cursor-pointer hover:underline">About</p>
                <p className="cursor-pointer hover:underline">Jobs</p>
                <p className="cursor-pointer hover:underline">Brand</p>
                <p className="cursor-pointer hover:underline">News Room</p>
                <p className="cursor-pointer hover:underline">Fall Release</p>
            </div>
            <div className="first flex flex-col gap-2">
                <h5 className="text-buttonColor  pb-3">Resources</h5>
                <p className="cursor-pointer hover:underline">College</p>
                <p className="cursor-pointer hover:underline">Safety</p>
                <p className="cursor-pointer hover:underline">Blog</p>
                <p className="cursor-pointer hover:underline">Feedback</p>
                <p className="cursor-pointer hover:underline">Developers</p>
                <p className="cursor-pointer hover:underline">StreamKit</p>
                <p className="cursor-pointer hover:underline">Creators </p>
                <p className="cursor-pointer hover:underline">Community </p>
                <p className="cursor-pointer hover:underline">Official 3rd Party Merch</p>
            </div>
            <div className="first flex flex-col gap-2">
                <h5 className="text-buttonColor  pb-3">Policies</h5>
                <p className="cursor-pointer hover:underline">Terms</p>
                <p className="cursor-pointer hover:underline">Privacy</p>
                <p className="cursor-pointer hover:underline">Cookie Settings</p>
                <p className="cursor-pointer hover:underline">Guidelines</p>
                <p className="cursor-pointer hover:underline">Acknowledgements</p>
                <p className="cursor-pointer hover:underline">Licenses</p>
                <p className="cursor-pointer hover:underline">Company Information</p>
            </div>
          
        </div>
        </div>
        <div class="border-b border-buttonColor pt-10"></div>

        <div className="bottom pt-10 flex justify-between">
        <div className="left flex gap-2 items-center cursor-pointer">
        <i class="fa-brands fa-discord text-white text-2xl"></i>
        <h5 className="text-white font-black text-xl pb-1">Discord</h5>
        </div>
        
        <div className="right ">
        <button className="rounded-full bg-buttonColor hover:bg-buttonHover text-white px-4 py-2 text-sm">Sign up</button>
        </div>

        </div>

    </div>
  )
}
