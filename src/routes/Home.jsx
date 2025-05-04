import Marquee from "react-fast-marquee";
import MySelf from "../resources/img/reyzalhildha.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div id="home" className="container home">
                <div className="container-home">
                    <div className="marquee-container">
                        {/* {!isHovered && (
                            <div
                                className={`fade-transition ${isHovered ? "fade-out" : "fade-in"
                                    }`}>
                                <Marquee
                                    speed={200}
                                    style={{ fontSize: "8rem" }}
                                    className="marquee"
                                    direction="left">
                                    REYZALHILDHA REYZALHILDHA REYZALHILDHA REYZALHILDHA
                                    <b style={{ color: "transparent" }}>l</b>
                                </Marquee>
                            </div>
                        )}
                        {isHovered && (
                            <div
                                className={`fade-transition ${isHovered ? "fade-in" : "fade-out"
                                    }`}>
                                <Marquee
                                    speed={200}
                                    style={{ fontSize: "8rem" }}
                                    className="marquee"
                                    direction="left">
                                    PROFILE PROFILE PROFILE PROFILE
                                    <b style={{ color: "transparent" }}>l</b>
                                </Marquee>
                            </div>
                        )} */}

                        {/* sample chatgpt */}
                        <div
                            className={`fade-transition ${isHovered ? "fade-out" : "fade-in"
                                }`}>
                            <Marquee
                                speed={200}
                                style={{ fontSize: "8rem" }}
                                className="marquee"
                                direction="left">
                                REYZALHILDHA REYZALHILDHA REYZALHILDHA REYZALHILDHA
                                <b style={{ color: "transparent" }}>l</b>
                            </Marquee>
                        </div>
                        <div
                            className={`fade-transition ${isHovered ? "fade-in" : "fade-out"
                                }`}>
                            <Marquee
                                speed={200}
                                style={{ fontSize: "8rem" }}
                                className="marquee"
                                direction="left">
                                PROFILE PROFILE PROFILE PROFILE
                                <b style={{ color: "transparent" }}>l</b>
                            </Marquee>
                        </div>
                    </div>
                    <div className="image-container">
                        <Link
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="img-myself front"
                            to={"profile"}>
                            <img src={MySelf} alt="" />
                        </Link>
                        <div className="img-myself back">
                            <img src={MySelf} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
