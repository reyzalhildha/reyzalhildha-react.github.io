import Typewriter from "typewriter-effect";
import Rey from "../../src/resources/img/reyzalhildha-vector.png";

export default function Skills() {
  return (
    <>
      <div id="skills" className="container">
        <div className="container-skills">
          <div className="box-skills">
            <img src={Rey} alt="Reyzal Hildha" className="reyzalhildha" />
          </div>
          <div className="content-skills">
            <p>HELLO! I AM</p>
            <Typewriter
              options={{
                strings: ["REYZAL HILDHA HASSAN", "a Web Developer"],
                autoStart: true,
                loop: true,
                delay: 150,
              }}  
              ></Typewriter>
          </div>
        </div>
      </div>
    </>
  );
}
