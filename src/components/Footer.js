const Footer = () => {
    return(
        <div className="footer flex justify-between bg-pink-50">
            <div className=" flex m-4">
                <img className="w-5 h-5 mr-2" alt="copyright logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png"/>
                <h4 className="font-bold"> All Rights are Reserved by QuickBite</h4>
            </div>
            <div className="contact mx-20 my-4">
                <h4 className="font-bold">Please Reach Out!</h4>
                <ul>
                    <li className="flex ">Instagram <img className="w-6 h-6 mx-2 mb-2" src="https://i.pinimg.com/474x/1e/d6/e0/1ed6e0a9e69176a5fdb7e090a1046b86.jpg"/></li>
                    <li className="flex ">Youtube <img className="w-9 h-9 mx-3" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small/youtube-logo-youtube-icon-transparent-free-png.png"/></li>
                    <li className="flex mt-0">Twitter <img className="w-8 h-8 mx-6 " src="https://w7.pngwing.com/pngs/22/899/png-transparent-twitter-x-twitter-social-media-social-media-logo-logo-social-3d-icon-thumbnail.png"/></li>
                    
                </ul>
            </div>
        </div>

    );

};

export default Footer;
