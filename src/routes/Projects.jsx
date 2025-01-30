import Typewriter from "typewriter-effect";

export default function Projects() {
  return (
    <>
      <div id="projects" className="container">
        <Typewriter
          onInit={typewriter => {
            typewriter.typeString("Soon...").pauseFor(2500).start();
          }}
        />
      </div>
    </>
  );
}
