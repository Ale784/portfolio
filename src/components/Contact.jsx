import { Container } from "./Container";
import { Linkedin } from "./icons/Icons";

export const Contact = () => {
  return (
    <footer id="contact">
      <Container>
        <div className="flex flex-col gap-6">
          <h2 className="max-w-4xl text-5xl font-bold text-red-500 text-center">
            Get in touch
          </h2>

          <div className="p-6 pb-16 flex flex-col justify-center items-center gap-6">

            <p className="text-center text-white text-xl">
              I am seeking my first opportunity, if my profile fits with what
              you are looking for, ¡Please do not hesitate to contact me!
            </p>

            <Linkedin />
          </div>
        </div>
      </Container>
    </footer>
  );
};
