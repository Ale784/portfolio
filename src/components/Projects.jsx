import { Container } from "./Container";

export function Projects({ name, description, image, Link }) {
  return (
    <Container className="relative pt-20 pb-16 text-center lg:pt-32">
      <div
        className="relative flex flex-col rounded-xl shadow-lg p-3  border
  border-white bg-white" id="projects"
      >
        <div
          className="w-full bg-white grid place-items-center hover:bg-gray-500 hover:blur-sm
          transition-all duration-300 relative"
        >
          <a
            href={Link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image} alt={name} width={1000} />
          </a>
        </div>

          <div className="py-2">
            <h2 className="text-black text-2xl">{name}</h2>
            <p className="md:text-lg text-gray-500 text-base mt-2">
              <span>Stack: </span>
              {description}
            </p>
          </div>
        </div>
    </Container>
  );
}
