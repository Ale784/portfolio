import { Container } from "./Container";
import { navLinks } from "./constantes";

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
              
              {
                navLinks.map(links => {
                  return (
                    <a key={links.id} 
                      href={links.id}
                      className="hover:text-red-800"               
                      >
                        {links.name}
                    </a>
                  )
                })
              }
            
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
