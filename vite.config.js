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
          }
        </style></head>`
      );
  },
};

export default defineConfig({
  plugins: [react(), portfolioCleanup],
  base: '/susina-com/',
});
