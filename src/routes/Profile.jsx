import Typewriter from "typewriter-effect";
import Rey from "../../src/resources/img/reyzalhildha-vector.png";

export default function Profile() {
  return (
    <>
      <div id="profile" className="container">
        <section>
          <div className="container-profile">
            <div className="box-profile">
              <img src={Rey} alt="Reyzal Hildha" className="reyzalhildha" />
            </div>
            <div className="content-profile">
              <p>HELLO! I AM</p>
              <Typewriter
                options={{
                  strings: ["REYZAL HILDHA HASSAN", "a Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }} />
            </div>
          </div>
        </section>
        <section>
          
        </section>
      </div>
    </>
  );
}
