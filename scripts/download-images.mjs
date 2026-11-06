import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-main.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/hero/hero-sub.webp'
  },

  // About
  {
    url: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/about/craftsmanship-process.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/about/about-hero.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/about/material-selection.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/about/finishing.webp'
  },

  // Categories & Banners
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/stone-wall-decorations.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/stone-wall-decorations-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/stone-idols-sculptures.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/stone-idols-sculptures-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/architectural-stone-designs.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/architectural-stone-designs-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/custom-stone-work.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/custom-stone-work-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/stone-pillars.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/stone-pillars-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/categories/temple-stone-carvings.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=1800&q=80',
    dest: 'public/images/categories/temple-stone-carvings-banner.webp'
  },

  // Products
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-panel-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-panel-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-panel-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/jali-screen-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/jali-screen-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/sunburst-mural-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/sunburst-mural-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/ganesha-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/ganesha-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/ganesha-sculpture-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/buddha-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/buddha-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/nandi-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/nandi-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/archway-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/archway-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/balustrade-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/balustrade-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/bracket-cornice-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/bracket-cornice-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-fountain-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-fountain-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/lotus-fountain-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/estate-planter-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/estate-planter-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/fluted-pillar-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/fluted-pillar-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/temple-pillar-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/temple-pillar-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/ceiling-mandala-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/ceiling-mandala-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/doorframe-shakha-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=900&q=80',
    dest: 'public/images/products/doorframe-shakha-02.webp'
  },

  // Projects
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-alibaug-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-alibaug-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1590059390046-608a2872323a?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-temple-pune-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-temple-pune-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-courtyard-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-courtyard-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-atrium-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-atrium-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-estate-nashik-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-estate-nashik-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-portico-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-portico-02.webp'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} high-resolution stone craftsmanship images...`);
  for (let i = 0; i < images.length; i++) {
    const item = images[i];
    const fullDest = path.resolve(item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    try {
      await download(item.url, fullDest);
      console.log(`[${i + 1}/${images.length}] Downloaded ${item.dest}`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('Finished downloading all images.');
}

run();
