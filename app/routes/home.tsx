export default function HomePage() {
  return (
    <div className="w-full max-w-4xl">
        {/* Profile Section */}
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 flex justify-center">
            <img 
              src="/images/perfil.jpg" 
              alt="Beatriz Rosa" 
              className="w-40 h-40 rounded-full border-4 border-rose-300 shadow-lg object-cover" 
            />
          </div>
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl font-extrabold text-rose-900 mb-4">
              Beatriz Rosa de Almeida
            </h1>
            <div className="space-y-2 mb-4">
              <p className="text-pink-500 font-semibold">
                🎓 Engenharia da Computação - Senai Cimatec
              </p>
              <p className="text-pink-500 font-semibold">
                🎓 Ciência da Computação - UFBA
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-rose-700 flex items-center justify-center md:justify-start gap-2">
                <span>📧</span> rosabeatriz438@yahoo.com.br
              </p>
              <p className="text-rose-700 flex items-center justify-center md:justify-start gap-2">
                <span>📱</span> (71) 98898-8992
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-6 text-center">
            É um prazer recebê-lo ao meu site!
          </h2>
          <h3 className="text-xl font-semibold text-rose-900 mb-4 text-center">
            Explore à vontade e conheça minha trajetória.
          </h3>
          
          <div className="space-y-4 text-rose-700 leading-relaxed">
            <p>
              Me chamo Beatriz Rosa e atualmente estou cursando Engenharia da Computação no Senai Cimatec e Ciência da Computação na UFBA – Este é um site desenvolvido por mim afim de compartilhar através dessa metalinguagem tudo que já aprendi.
            </p>
            
            <p>
              Meu curso me instiga a cada dia que passa, me vi imersa nas questões de sustentabilidade, e muito curiosa em como associar à tecnologia.
            </p>
            
            <p>
              Atualmente faço parte da Info Jr, empresa de juniores da UFBA, onde atuo no setor de Gestão de Pessoas e estou desenvolvendo minhas habilidades no Núcleo de Web. Nesse processo, desenvolvi habilidades com algumas ferramentas e frameworks: <span className="font-semibold text-pink-500">Node JS, Next.JS, HTML, CSS, TypeScript, Insomnia, Beekeeper, React, SQLite, Prisma, Prismic</span>. Além das linguagens que desenvolvi no meio acadêmico: <span className="font-semibold text-pink-500">Java, C, C++ e Python</span>.
            </p>
            
            <p>
              Extrapolando minha vida universitária, sou uma entusiasta das artes e dos esportes. Participo anualmente de eventos de dança para promover a cultura em Salvador, fortalecendo minha conexão com a comunidade.
            </p>
          </div>

          {/* <div className="bg-rose-200 rounded-lg p-4 mt-6 flex items-center gap-4">
            <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.9C3.71 7 1 9.71 1 12.9v.2C1 16.29 3.71 19 6.9 19H11v-1.9H6.9c-1.71 0-3.1-1.39-3.1-3.1v-.2zM8 13h8v-2H8v2zm9.1-6H13v1.9h4.1c1.71 0 3.1 1.39 3.1 3.1v.2c0 1.71-1.39 3.1-3.1 3.1H13V17h4.1c3.19 0 5.9-2.71 5.9-5.9v-.2C23 7.71 20.29 5 17.1 5z"/>
            </svg>
            <div>
              <a 
                href="https://beatrizrosaa.github.io/beatrizrosaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 font-semibold hover:underline"
              >
                Link do site: https://beatrizrosaa.github.io/beatrizrosaa/
              </a>
            </div>
          </div> */}
        </section>

        {/* Engagements Section */}
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">
            Engajamento e Colaborações
          </h2>
          <p className="text-rose-700 mb-6">
            Veja um pouco mais dos projetos que participo e lidero efetivamente.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-200 rounded-lg p-6">
              <img 
                src="/images/gincana1.jpg" 
                alt="Atividades Colaborativas" 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-lg font-bold text-pink-500 mb-2">
                Atividades Colaborativas
              </h4>
              <p className="text-rose-800">
                Desde a gestão financeira até a recreação infantil, nós, ex-alunos, nos reunimos anualmente para promover essa atividade aos estudantes. Ao longo de um mês, organizamos diversas ações que incentivam o engajamento social.
              </p>
            </div>
            
            <div className="bg-rose-200 rounded-lg p-6">
              <img 
                src="/images/infojr.jpg" 
                alt="Info Jr" 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-lg font-bold text-pink-500 mb-2">
                Info Jr
              </h4>
              <p className="text-rose-800">
                A INFO JR é a empresa júnior do curso de Ciência da Computação da UFBA. Organização sem fins lucrativos que oferece serviços de tecnologia e consultoria em desenvolvimento web, design de interfaces e soluções de TI.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}