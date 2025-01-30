import Marquee from "react-fast-marquee";
import MySelf from "../resources/img/reyzalhildha.jpg";

export default function Profile() {
    return (
        <>
            <div id="profile" className="container">
                <Marquee speed={200} style={{ fontSize: "8rem" }} className="marquee" direction="left">
                    PROFILE PROFILE PROFILE PROFILE <b style={{ color: 'transparent' }}>l</b>
                </Marquee>
                <div className="img-myself front">
                    <img src={MySelf} alt=""/>
                </div>
                <div className="img-myself back">
                    <img src={MySelf} alt=""/>
                </div>
            </div>
            
        </>
    );
}
