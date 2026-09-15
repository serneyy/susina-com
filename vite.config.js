import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const portfolioCleanup = {
  name: 'portfolio-cleanup',
  transformIndexHtml(html) {
    return html
      .replace(/<article class="work-card work-card-simple matchly">[\s\S]*?<\/article>/, '')
      .replace(
        '</head>',
        `<style id="desktop-spacing-fix">
          @media (min-width: 901px) {
            #about { padding-bottom: 70px !important; }
            .projects-intro { padding-top: 24px !important; }

            .hero {
              background-position: center 24% !important;
            }

            .hero-meta {
              flex-direction: row !important;
              align-items: center !important;
              justify-content: flex-end !important;
              gap: 10px !important;
              padding-bottom: 6px !important;
            }

            .hero-socials {
              display: flex !important;
              align-items: center !important;
              gap: 10px !important;
            }

            .hero-linkedin,
            .hero-email,
            .hero-scroll {
              width: 56px !important;
              height: 56px !important;
              border-radius: 50% !important;
              display: grid !important;
              place-items: center !important;
              border: 1px solid rgba(255,255,255,.58) !important;
              box-shadow: 0 12px 30px rgba(0,0,0,.18) !important;
              backdrop-filter: blur(10px) !important;
              -webkit-backdrop-filter: blur(10px) !important;
              transition: transform .25s ease, background .25s ease, color .25s ease, border-color .25s ease !important;
            }

            .hero-linkedin,
            .hero-email {
              color: #fff !important;
              background: rgba(20,20,20,.18) !important;
            }

            .hero-linkedin:hover,
            .hero-email:hover {
              background: rgba(255,255,255,.16) !important;
              border-color: rgba(255,255,255,.9) !important;
              transform: translateY(-3px) !important;
            }

            .hero-scroll {
              margin: 0 0 0 4px !important;
              background: var(--accent) !important;
              color: var(--ink) !important;
              border-color: var(--accent) !important;
            }

            .hero-scroll:hover {
              background: #fff !important;
              border-color: #fff !important;
              color: var(--ink) !important;
              transform: translateY(3px) !important;
            }

            .hero-linkedin svg,
            .hero-email svg,
            .hero-scroll svg {
              width: 20px !important;
              height: 20px !important;
            }
          }
        </style></head>`
      );
  },
};

export default defineConfig({
  plugins: [react(), portfolioCleanup],
  base: '/susina-com/',
});
