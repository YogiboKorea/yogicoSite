// debug-download.js
const axios = require('axios');
const fs = require('fs');
const zlib = require('zlib');

const url = process.argv[2];
if (!url) { console.error('Usage: node debug-download.js <url>'); process.exit(1); }

(async () => {
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer', validateStatus: () => true, maxContentLength: 200*1024*1024 });
    console.log('Status:', res.status);
    console.log('Headers:', res.headers);
    const buf = Buffer.from(res.data);
    fs.writeFileSync('raw_download.bin', buf);
    console.log('Saved raw_download.bin', buf.length, 'bytes');

    // try to detect gzip
    if (buf.slice(0,2).equals(Buffer.from([0x1f,0x8b]))) {
      try {
        const xml = zlib.gunzipSync(buf).toString('utf8');
        fs.writeFileSync('sitemap.xml', xml, 'utf8');
        console.log('GZIP -> sitemap.xml written, length', xml.length);
      } catch(e) { console.warn('gunzip failed:', e.message); }
    } else {
      // save as text
      fs.writeFileSync('sitemap.xml', buf.toString('utf8'), 'utf8');
      console.log('sitemap.xml written (text).');
    }
  } catch(err) {
    console.error('Error:', err.message);
  }
})();
