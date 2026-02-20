import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black font-body texture-grid relative selection:bg-black selection:text-white pb-32">
      {/* Header */}
      <header className="w-full px-6 md:px-8 lg:px-12 py-8 border-b-4 border-black">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            {/* The image is a placeholder, since they asked to keep it - but the text logo gives the vibe better in monochrome. Keeping original image per request, but in a structured container */}
            <div className="font-display font-bold text-2xl tracking-tight uppercase flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Logo Icon"
                className="h-14 w-auto grayscale"
              />
              <span className="hidden sm:inline">Arclight Intelligence</span>
            </div>
          </div>
          <div>
            <button
              onClick={() => window.location.href = 'mailto:contact@arclightint.com?subject=Inquiry from Website'}
              className="hidden md:inline-block bg-black text-white font-mono uppercase tracking-widest text-sm py-4 px-8 border-2 border-black hover:bg-white hover:text-black transition-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 border-b-[8px] border-black relative">
        <div className="absolute inset-0 texture-grid -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex items-center gap-6 animate-fade-in">
            <div className="w-4 h-4 bg-black border border-black"></div>
            <div className="h-1 w-24 bg-black"></div>
            <span className="font-mono text-sm uppercase tracking-widest text-[#525252]">Bespoke Consulting</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] text-black mb-12 max-w-5xl hero-title-desktop animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            Illuminate<br />The Path<br />Forward.
          </h1>

          <h1 className="font-display text-5xl tracking-tighter uppercase leading-[0.95] text-black mb-8 hero-title-mobile animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            Illuminate<br />The Path<br />Forward.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="lg:col-span-8">
              <p className="font-body text-xl md:text-2xl text-black leading-relaxed max-w-3xl">
                We navigate technically and politically complex healthcare ecosystems to deliver actionable innovation strategy, AI infrastructure, and executable implementation models.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <button
                onClick={() => window.location.href = '#expertise'}
                className="group bg-transparent text-black font-mono uppercase tracking-widest text-sm flex items-center gap-4 hover:gap-6 border-none hover:underline underline-offset-8 transition-all duration-100 p-0"
              >
                Explore Expertise
                <span className="text-xl leading-none">↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="expertise" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 border-b-4 border-black border-t-[1px] border-t-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter">Areas of<br />Expertise.</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-[#525252] max-w-sm">Strategic advisory backed by 20+ years of clinical and operational leadership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black expertise-grid">

            {/* Startup Strategy */}
            <div className="group border-r border-b border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-colors duration-100 flex flex-col h-full expertise-card">
              <div className="mb-12 border-2 border-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white group-hover:border-white transition-colors duration-100">
                <img src="/match.png" alt="Startup Strategy" className="w-16 h-16 md:w-20 md:h-20 grayscale object-contain" />
              </div>
              <h3 className="font-display text-3xl mb-6 uppercase tracking-tight">Startup Strategy</h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-colors duration-100 flex-grow">
                Navigate healthcare ecosystems, RFP processes, and enterprise sales cycles. We leverage inside knowledge of human and technological networks to position your solution securely.
              </p>
            </div>

            {/* PE / VC Advisory */}
            <div className="group border-r border-b border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-colors duration-100 flex flex-col h-full expertise-card">
              <div className="mb-12 border-2 border-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white group-hover:border-white transition-colors duration-100">
                <img src="/torch.png" alt="PE/VC Advisory" className="w-16 h-16 md:w-20 md:h-20 grayscale object-contain" />
              </div>
              <h3 className="font-display text-3xl mb-6 uppercase tracking-tight">PE & VC Advisory</h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-colors duration-100 flex-grow">
                Deep operational insights and due diligence expertise tailored for healthcare tech. Real-world assessments derived from decades of steering informatics networks.
              </p>
            </div>

            {/* Healthcare Data & AI */}
            <div className="group border-r border-b border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-colors duration-100 flex flex-col h-full expertise-card">
              <div className="mb-12 border-2 border-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white group-hover:border-white transition-colors duration-100">
                <img src="/fluro_bulb.png" alt="Healthcare AI/Data" className="w-16 h-16 md:w-20 md:h-20 grayscale object-contain" />
              </div>
              <h3 className="font-display text-3xl mb-6 uppercase tracking-tight">Healthcare Data & AI</h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-colors duration-100 flex-grow">
                Guide organizations through AI adoption and data strategy. From center of excellence creation to production ML deployments, separating hype from strategic capability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 border-b-8 border-black bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 texture-inverted-lines opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 about-container">
            <div className="lg:w-1/3 flex flex-col gap-12">
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter">About Us.</h2>
              <div className="p-8 border-2 border-white bg-black">
                <img src="/lighthouse.png" alt="About Us" className="w-24 h-24 mb-6 grayscale invert" />
                <p className="font-mono text-sm tracking-widest uppercase leading-loose">Clarity in<br />healthcare's<br />most complex<br />challenges.</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <p className="font-body text-xl md:text-2xl leading-relaxed mb-8">
                Arclight Intelligence brings clarity to healthcare's most complex challenges. We're founded by <a href="https://www.linkedin.com/in/ari-robicsek-a408bba2/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:border-b-4 hover:border-white transition-all">Dr. Ari Robicsek</a>, a physician-executive who has led data, analytics and research operations at healthcare organizations of different sizes, including one of America's largest providers. His experience includes building innovation and product teams, high-performing analytics groups, and research centers. His work has demonstrated how technology can catalyze large-scale clinical improvements and operational savings. He has published in <em>Nature</em> and <em>JAMA</em>, built products used by thousands of clinicians and innovated some of the earliest forms of ML-based clinical decision support.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed mb-8 text-gray-300">
                At Arclight Intelligence we understand the challenging journey from an exciting idea to a product that people will use, love, and pay for. We've been there: at the bedside, in the boardroom and in the back offices with the IT professionals; we know what fails and what works.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-gray-400">
                And we can help you see your path forward.
              </p>

              <div className="mt-16 pt-8 border-t border-white inline-block">
                <button
                  onClick={() => window.location.href = 'mailto:contact@arclightint.com?subject=Inquiry from Website'}
                  className="bg-white text-black font-mono uppercase tracking-widest text-sm py-5 px-10 border-2 border-white hover:bg-black hover:text-white transition-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-8 lg:px-12 py-16 bg-white border-t border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end max-w-6xl mx-auto footer-container gap-8 md:gap-0">

          <div className="flex flex-col gap-4">
            <div className="font-display font-bold text-xl tracking-tight uppercase flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Icon"
                className="h-8 w-auto grayscale"
              />
              <span>Arclight Intelligence</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#525252]">
              © {new Date().getFullYear()} Arclight Intelligence, LLC.
            </p>
          </div>

          <div className="flex space-x-6 footer-social items-center">
            <span className="font-mono text-xs uppercase tracking-widest mr-4 hidden md:inline-block">Connect</span>
            <div className="w-8 border-t border-black hidden md:block mr-2"></div>
            {/* Placeholder links for social, adapt as needed */}
            <a href="#" className="border rounded-none p-3 border-transparent hover:border-black text-black transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="border rounded-none p-3 border-transparent hover:border-black text-black transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App