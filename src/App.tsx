import './App.css'

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F0E8'}}>
      {/* Header */}
      <header className="w-full px-8 lg:px-15" style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <nav className="flex justify-between items-center max-w-[1440px] mx-auto">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Arclight Intelligence" 
              className="h-12 w-auto"
              style={{
                width: '96px'
              }}
            />
          </div>
          <div>
            <button
              onClick={() => window.location.href = 'mailto:contact@arclightintelligence.com?subject=Inquiry from Website'}
              className="hover:opacity-80 transition-opacity duration-300"
              style={{
                backgroundColor: '#000000',
                color: '#F5F0E8',
                fontWeight: '600', 
                fontSize: '14px', 
                letterSpacing: '0.05em',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              CONTACT
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 
            className="text-black mb-5 leading-tight hero-title"
            style={{
              fontSize: '50px',
              fontWeight: '900',
              letterSpacing: '-0.02em'
            }}
          >
            ILLUMINATE YOUR PATH TO HEALTHCARE INNOVATION
          </h1>
          <p 
            className="mb-10 max-w-3xl mx-auto leading-relaxed hero-subtitle"
            style={{
              fontSize: '19px',
              fontWeight: '400',
              color: '#444'
            }}
          >
            Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 section-spacing" style={{marginTop: '80px'}}>
        <div className="max-w-[1100px] mx-auto">
          <h2 
            className="text-center text-black mb-12"
            style={{
              fontSize: '34px',
              fontWeight: '700',
              marginBottom: '50px'
            }}
          >
            OUR EXPERTISE
          </h2>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            {/* PE/VC Advisory */}
            <div 
              className="text-center hover:shadow-lg transition-shadow duration-300 expertise-card" 
              style={{
                border: '1px solid #D4C5B9',
                borderRadius: '8px',
                padding: '40px 30px',
                minHeight: '220px',
                backgroundColor: 'transparent',
                flex: '1',
                minWidth: '300px'
              }}
            >
              <div className="w-15 h-15 mx-auto mb-6 flex items-center justify-center">
                <img src="/torch.png" alt="PE/VC Advisory" style={{width: '120px', height: '120px'}} />
              </div>
              <h3 
                className="text-black mb-3"
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  margin: '20px 0 10px'
                }}
              >
                PE/VC ADVISORY
              </h3>
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Navigate healthcare investments with confidence. We provide deep operational insights, due diligence expertise, and strategic assessment of healthcare technology companies, leveraging 20+ years of experience leading analytics and innovation at Fortune 100 health systems.
              </p>
            </div>

            {/* Startup Strategy */}
            <div 
              className="text-center hover:shadow-lg transition-shadow duration-300 expertise-card" 
              style={{
                border: '1px solid #D4C5B9',
                borderRadius: '8px',
                padding: '40px 30px',
                minHeight: '220px',
                backgroundColor: 'transparent',
                flex: '1',
                minWidth: '300px'
              }}
            >
              <div className="w-15 h-15 mx-auto mb-6 flex items-center justify-center">
                <img src="/match.png" alt="Startup Strategy" style={{width: '120px', height: '120px'}} />
              </div>
              <h3 
                className="text-black mb-3"
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  margin: '20px 0 10px'
                }}
              >
                STARTUP STRATEGY
              </h3>
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Transform your vision into market reality. From product-market fit to go-to-market strategy, we help healthtech startups navigate complex healthcare ecosystems, RFP processes, and enterprise sales cycles with proven frameworks that have driven $100M+ implementations.
              </p>
            </div>

            {/* Healthcare Data & AI */}
            <div 
              className="text-center hover:shadow-lg transition-shadow duration-300 expertise-card" 
              style={{
                border: '1px solid #D4C5B9',
                borderRadius: '8px',
                padding: '40px 30px',
                minHeight: '220px',
                backgroundColor: 'transparent',
                flex: '1',
                minWidth: '300px'
              }}
            >
              <div className="w-15 h-15 mx-auto mb-6 flex items-center justify-center">
                <img src="/fluro_bulb.png" alt="Healthcare AI/Data" style={{width: '120px', height: '120px'}} />
              </div>
              <h3 
                className="text-black mb-3"
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  margin: '20px 0 10px'
                }}
              >
                HEALTHCARE AI/DATA
              </h3>
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Turn data into competitive advantage. We guide healthcare organizations through AI adoption, analytics transformation, and data strategy development—from building centers of excellence to deploying production-ready ML models that improve outcomes and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 section-spacing" style={{marginTop: '80px'}}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-start gap-8 w-full px-8">
            <div className="flex-shrink-0">
              <img src="/lighthouse.png" alt="About Us" style={{width: '120px', height: '120px'}} />
            </div>
            <div className="flex-1">
              <h2 
                className="text-black mb-5"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  margin: '0 0 20px 0'
                }}
              >
                ABOUT US
              </h2>
              <div 
                className="leading-relaxed"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                <p className="mb-4">Arclight Intelligence brings clarity to healthcare's most complex challenges.</p>
                <p className="mb-4">Founded by Dr. Ari Robicsek, a healthcare executive who has led analytics and research operations at one of America's largest health systems, Arclight Intelligence bridges the gap between innovation and implementation.</p>
                <p className="mb-4">With a track record of building high-performing analytics teams, developing FDA-cleared AI products, securing $35M+ in research funding, and generating $50M+ in operational savings, we understand what it takes to create lasting value in healthcare.</p>
                <p className="mb-4">Our expertise spans the entire healthcare innovation lifecycle—from evaluating early-stage technologies to scaling enterprise-wide implementations. We've published in Nature and JAMA, built products used by thousands of clinicians, and helped shape the future of healthcare AI.</p>
                <p>Whether you're investing in, building, or deploying healthcare technology, we illuminate the path forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="w-full px-8 lg:px-15" 
        style={{
          marginTop: '100px',
          padding: '40px 60px'
        }}
      >
        <div className="flex justify-between items-end max-w-[1440px] mx-auto footer-container">
          <div className="flex flex-col">
            <div 
              className="text-left"
              style={{
                fontSize: '12px',
                color: '#666'
              }}
            >
              <p>© {new Date().getFullYear()} Arclight Intelligence, LLC. All rights reserved.</p>
              <p>Seattle, WA | contact@arclightintelligence.com</p>
            </div>
          </div>
          <div className="flex space-x-5 footer-social">
            <a href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App