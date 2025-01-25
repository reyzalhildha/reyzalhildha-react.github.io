import Typewriter from "typewriter-effect";

export default function Skills() {
  return (
    <>
      <div id="skills" className="container">
        <Typewriter
          onInit={typewriter => {
            typewriter.typeString("SKILLS").pauseFor(2500).start();
          }}
        />
      </div>
    </>
  );
}
