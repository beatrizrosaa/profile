export default function ProjetosPage() {
  return (
    <div className="w-full max-w-4xl">
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10">
          <h1 className="text-3xl font-bold text-rose-900 mb-4 text-center">
            Descubra minha criatividade em ação!
          </h1>
          <p className="text-rose-700 mb-8 text-center">
            Aqui compartilho projetos que refletem minha paixão pela arte, dança e iniciativas sociais e colaborativas. 
            Cada trabalho é uma expressão do meu desejo de conectar pessoas, criar impacto e explorar diferentes formas de expressão.
          </p>
          
          {/* Projetos Sociais e Artísticos */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">



            
            <div className="bg-rose-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-pink-500 mb-4">
                Compartilhando a Cultura da Dança
              </h4>
              <img 
                src="/images/danca1.jpg" 
                alt="Dança" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-sm">
                Durante o mês da dança, a escola de dança à qual faço parte é convidada anualmente para apresentar 
                coreografias de sala e performances de festivais passados em um shopping de grande fluxo em Salvador.
              </p>
            </div>
            
            <div className="bg-rose-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-pink-500 mb-4">
                Doações e Diversão: Pelas Crianças
              </h4>
              <img 
                src="/images/social1.jpg" 
                alt="Projeto Social" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-sm">
                O projeto envolve a arrecadação de doações de alimentos e itens de higiene, seguidas de pequenas 
                reformas em creches para melhorar o ambiente das crianças.
              </p>
            </div>
            
            <div className="bg-rose-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-pink-500 mb-4">
                Liderança e Criatividade na Dança
              </h4>
              <img 
                src="/images/coreografa1.jpg" 
                alt="Coreografia" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-sm">
                Passei a coreografar performances com mais de 100 adolescentes, coordenando desde roteiro e 
                coreografias até dinâmicas, áudio, iluminação e figurino.
              </p>
            </div>
          </div>

          {/* Projetos Técnicos */}
          <h3 className="text-2xl font-bold text-rose-900 mb-6">Projetos Técnicos</h3>
          <div className="grid md:grid-cols-2 gap-6">

          
            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/porti.png" 
                alt="Meu Portfólio" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-rose-800 text-center mb-4">
                Meu Portifólio
              </p>
              <a 
                href="https://beatrizrosa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Acesse a Página
              </a>
            </div>


            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/gerador.png" 
                alt="Gerador de Tickets" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-center mb-4">
                Página Geradora de Tickets
              </p>
              <a 
                href="https://avaliativa1.beatrizrosa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Acesse a Página
              </a>
            </div>

            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/calculadora.png" 
                alt="Calculadora Idade" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-center mb-4">
                Calculadora Idade
              </p>
              <a 
                href="https://calculadora.beatrizrosa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Acesse a Página
              </a>
            </div>

            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/certificadoMFP.jpg" 
                alt="Maratona Femina" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-center mb-4">
                Participei das duas edições da Maratona Femina de Programação da Unicamp na modalidade remota em 2023 e 2024.
              </p>
              
            </div>
            

            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/foruflix.png" 
                alt="ForuFlix" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-center mb-4">
                Desenvolvi durante um curso de Javascript uma página de streaming onde é possível assistir ao 
                trailer dos filmes e séries e avaliá-los também.
              </p>
              <a 
                href="https://github.com/beatrizrosaa/ProjetoStreaming" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver no GitHub
              </a>
            </div>
            
          
            
            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <img 
                src="/images/forca2.png" 
                alt="Jogo da Forca" 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <p className="text-rose-800 text-center mb-4">
                Jogo da Forca com lista de animais com lógica e interface gráfica em TypeScript.
              </p>
              <a 
                href="https://github.com/beatrizrosaa/Jogo-da-Forca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver no GitHub
              </a>
            </div>
            
          
            
            <div className="bg-rose-200 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-rose-800 text-center mb-4">
                Projetos futuros em desenvolvimento! Acompanhe meu GitHub para ver as próximas criações em tecnologia.
              </p>
              <a 
                href="https://github.com/beatrizrosaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Perfil GitHub
              </a>
            </div>

          </div>
        </section>
      </div>
  );
}