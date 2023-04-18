import { Container } from "./Container";

export function NavBar() {
  return (
    <header className="text-white py-10 text-lg">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex text-red-400">
            <a href="/">ALE</a>
          </div>
          <div className="flex items-center md:gap-x-12">
            <div className="hidden md:flex md:gap-x-6">
              
              <a href="#projects">projects</a>

              <a href="#skills">skills</a>

              <a href="#contact">contact</a>
            
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
