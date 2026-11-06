import fs from 'fs';
import path from 'path';
import https from 'https';

const downloads = [
  // 1. Home Temple Mandirs
  {
    url: 'https://images.unsplash.com/photo-1650342518618-fdeaae0ef4f0?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/home-temple-mandir-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1789606563089-21231fca6409?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/home-temple-mandir-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1777816267962-18a864cd6ca3?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/home-temple-mandir-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/compact-pooja-mandir-01.webp'
  },

  // 2. Stone Idols & Sacred Sculptures
  {
    url: 'https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/ganesha-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1567878673942-be055fed5d30?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/ganesha-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1549083449-aa6e43965934?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/shiva-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1743755952740-2ed18943bd51?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/shiva-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1632330069744-8f0651668343?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/buddha-sculpture-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1715500525335-5bc9329cfda2?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/buddha-sculpture-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/ganesha-sculpture-03.webp'
  },

  // 3. Wall Stone Carvings & 3D Murals
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/lotus-panel-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1793264576613-bcaaa4ea189d?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/lotus-panel-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1780303387274-2564e383a4f2?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/lotus-panel-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/jali-screen-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1638450097491-f35fbd07c9e8?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/jali-screen-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/products/sunburst-mural-01.webp'
  },

  // 4. Categories & Banners
  {
    url: 'https://images.unsplash.com/photo-1793264576613-bcaaa4ea189d?auto=format&fit=crop&w=1000&q=85',
    dest: 'public/images/categories/stone-wall-decorations.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1780303387274-2564e383a4f2?auto=format&fit=crop&w=1800&q=85',
    dest: 'public/images/categories/stone-wall-decorations-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?auto=format&fit=crop&w=1000&q=85',
    dest: 'public/images/categories/stone-idols-sculptures.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1549083449-aa6e43965934?auto=format&fit=crop&w=1800&q=85',
    dest: 'public/images/categories/stone-idols-sculptures-banner.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1650342518618-fdeaae0ef4f0?auto=format&fit=crop&w=1000&q=85',
    dest: 'public/images/categories/temple-stone-carvings.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1789606563089-21231fca6409?auto=format&fit=crop&w=1800&q=85',
    dest: 'public/images/categories/temple-stone-carvings-banner.webp'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const file = path.join(process.cwd(), item.dest);
    fs.mkdirSync(path.dirname(file), { recursive: true });

    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          if (redirectRes.statusCode === 200) {
            const stream = fs.createWriteStream(file);
            redirectRes.pipe(stream);
            stream.on('finish', () => {
              stream.close();
              console.log(`[OK] ${item.dest} (${fs.statSync(file).size} bytes)`);
              resolve(true);
            });
          } else {
            console.error(`[FAIL redirect] ${item.dest} HTTP ${redirectRes.statusCode}`);
            resolve(false);
          }
        });
        return;
      }

      if (response.statusCode === 200) {
        const stream = fs.createWriteStream(file);
        response.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          console.log(`[OK] ${item.dest} (${fs.statSync(file).size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`[FAIL] ${item.dest} HTTP ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`[ERR] ${item.dest}: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log(`Starting download of ${downloads.length} stone assets...`);
  for (const item of downloads) {
    await download(item);
  }
  console.log('All downloads processed!');
}

main();
