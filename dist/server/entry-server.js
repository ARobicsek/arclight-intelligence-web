import { jsxs, jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", style: { backgroundColor: "#F5F0E8" }, children: [
    /* @__PURE__ */ jsx("header", { className: "w-full px-8 lg:px-15", style: { paddingTop: "40px", paddingBottom: "40px" }, children: /* @__PURE__ */ jsxs("nav", { className: "flex justify-between items-center max-w-[1440px] mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo.png",
          alt: "Arclight Intelligence",
          className: "h-12 w-auto",
          style: {
            width: "96px"
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "mailto:contact@arclightint.com?subject=Inquiry from Website",
          className: "contact-button hover:opacity-80 transition-opacity duration-300",
          style: {
            backgroundColor: "#000000",
            color: "#F5F0E8",
            fontWeight: "600",
            fontSize: "14px",
            letterSpacing: "0.05em",
            padding: "12px 24px",
            border: "none",
            borderRadius: "4px"
          },
          children: "CONTACT"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto text-center", children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "text-black mb-5 leading-tight hero-title hero-title-desktop",
          style: {
            fontSize: "50px",
            fontWeight: "600",
            letterSpacing: "-0.02em"
          },
          children: "ILLUMINATE THE PATH FORWARD"
        }
      ),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "text-black mb-5 leading-tight hero-title hero-title-mobile",
          style: {
            fontSize: "50px",
            fontWeight: "600",
            letterSpacing: "-0.02em"
          },
          children: [
            "ILLUMINATE",
            /* @__PURE__ */ jsx("br", {}),
            "THE PATH FORWARD"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mb-10 max-w-3xl mx-auto leading-relaxed hero-subtitle",
          style: {
            fontSize: "19px",
            fontWeight: "400",
            color: "#444"
          },
          children: "Bespoke Consulting for Healthcare Innovation"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-8 section-spacing", style: { marginTop: "80px" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-[1100px] mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center hover:shadow-lg transition-shadow duration-300 expertise-card",
              style: {
                border: "1px solid #D4C5B9",
                borderRadius: "8px",
                padding: "40px 30px",
                minHeight: "220px",
                backgroundColor: "transparent",
                flex: "1",
                minWidth: "300px"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-15 h-15 mx-auto mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: "/match.png", alt: "Startup Strategy", style: { width: "120px", height: "120px" } }) }),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-black mb-3",
                    style: {
                      fontSize: "16px",
                      fontWeight: "700",
                      margin: "20px 0 10px"
                    },
                    children: "STARTUP STRATEGY"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "leading-relaxed",
                    style: {
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#666"
                    },
                    children: "We help healthtech startups navigate technically and politically complex healthcare ecosystems, RFP processes, and enterprise sales cycles. We have extensive inside knowledge of these human and technological ecosystems, and can help you figure out how to get them to work for you."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center hover:shadow-lg transition-shadow duration-300 expertise-card",
              style: {
                border: "1px solid #D4C5B9",
                borderRadius: "8px",
                padding: "40px 30px",
                minHeight: "220px",
                backgroundColor: "transparent",
                flex: "1",
                minWidth: "300px"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-15 h-15 mx-auto mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: "/torch.png", alt: "PE/VC Advisory", style: { width: "120px", height: "120px" } }) }),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-black mb-3",
                    style: {
                      fontSize: "16px",
                      fontWeight: "700",
                      margin: "20px 0 10px"
                    },
                    children: "PE & VC ADVISORY"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "leading-relaxed",
                    style: {
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#666"
                    },
                    children: "We provide deep operational insights, due diligence expertise, and strategic assessment of healthcare technology companies, leveraging 20+ years of experience leading analytics, informatics and innovation at large and mid-sized healthsystems. We've seen it all, and we know what works in real life."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center hover:shadow-lg transition-shadow duration-300 expertise-card",
              style: {
                border: "1px solid #D4C5B9",
                borderRadius: "8px",
                padding: "40px 30px",
                minHeight: "220px",
                backgroundColor: "transparent",
                flex: "1",
                minWidth: "300px"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-15 h-15 mx-auto mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: "/fluro_bulb.png", alt: "Healthcare AI/Data", style: { width: "120px", height: "120px" } }) }),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-black mb-3",
                    style: {
                      fontSize: "16px",
                      fontWeight: "700",
                      margin: "20px 0 10px"
                    },
                    children: "HEALTHCARE AI & DATA"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "leading-relaxed",
                    style: {
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#666"
                    },
                    children: "We guide healthcare organizations through AI adoption, analytics transformation, and data strategy development—from building centers of excellence to deploying production-ready ML models. We see past the fluff and know how to make analytics and AI actually further your strategy."
                  }
                )
              ]
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-8 section-spacing", style: { marginTop: "80px" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-[1440px] mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-8 w-full px-8 about-container", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/lighthouse.png", alt: "About Us", style: { width: "120px", height: "120px" } }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-black mb-5",
            style: {
              fontSize: "24px",
              fontWeight: "700",
              margin: "0 0 20px 0"
            },
            children: "ABOUT US"
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "leading-relaxed",
            style: {
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#666"
            },
            children: [
              "Arclight Intelligence brings clarity to healthcare's most complex challenges. We're founded by ",
              /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/ari-robicsek-a408bba2/", target: "_blank", rel: "noopener noreferrer", style: { color: "#666", textDecoration: "underline" }, children: "Dr. Ari Robicsek" }),
              ", a physician-healthcare executive who has led both analytics and research operations at healthcare organizations of different sizes, including one of America's largest providers. His experience includes building high-performing analytics teams, securing tens of millions in research funding for innovation projects and generating tens of millions in operational savings through practical deployment of analytics and AI. He has published in Nature and JAMA, built products used by thousands of clinicians and innovated some of the earliest forms of ML-based clinical decision support.",
              /* @__PURE__ */ jsx("br", {}),
              "At Arclight Intelligence we understand the challenging journey from an exciting idea to a product that has measurable impact in the healthcare environment. We've been there: at the bedside, in the boardroom and in the back offices with the IT professionals; we know what fails and what works. And we can help you see your path forward."
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1440px] mx-auto", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.location.href = "mailto:contact@arclightint.com?subject=Inquiry from Website",
        className: "mobile-contact-button hover:opacity-80 transition-opacity duration-300",
        style: {
          backgroundColor: "#000000",
          color: "#F5F0E8",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "0.05em",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px"
        },
        children: "CONTACT"
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      "footer",
      {
        className: "w-full px-8 lg:px-15",
        style: {
          marginTop: "100px",
          padding: "40px 60px"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end max-w-[1440px] mx-auto footer-container", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col copyright-container", style: { paddingLeft: "8px" }, children: /* @__PURE__ */ jsxs(
            "p",
            {
              style: {
                fontSize: "12px",
                color: "#666"
              },
              children: [
                "© ",
                (/* @__PURE__ */ new Date()).getFullYear(),
                " Arclight Intelligence. All rights reserved."
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-5 footer-social", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-black hover:text-gray-600 transition-colors duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-black hover:text-gray-600 transition-colors duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function render() {
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return html;
}
function renderPage() {
  const appHtml = render();
  const isProduction = process.env.NODE_ENV === "production";
  const headContent = isProduction ? `<script type="module" crossorigin src="/assets/main-DKTLX5q4.js"><\/script>
    <link rel="stylesheet" crossorigin href="/assets/main-D9ziHzso.css">` : `<script type="module" src="/@vite/client"><\/script>
    <script type="module" src="/src/main.tsx"><\/script>`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arclight Intelligence - Healthcare Innovation Consulting</title>
    <meta name="description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology. PE/VC Advisory, Startup Strategy, and Healthcare AI/Data Implementation." />
    <meta name="keywords" content="healthcare consulting, healthcare AI, healthcare data analytics, PE VC advisory, healthcare startups, healthcare innovation, Dr. Ari Robicsek" />
    <meta name="author" content="Arclight Intelligence, LLC" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://arclightintelligence.com" />
    <meta property="og:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="og:description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology." />
    <meta property="og:image" content="https://arclightintelligence.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://arclightintelligence.com" />
    <meta property="twitter:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="twitter:description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology." />
    <meta property="twitter:image" content="https://arclightintelligence.com/logo.png" />
    
    ${headContent}
  </head>
  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>`;
}
export {
  render,
  renderPage
};
