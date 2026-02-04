const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Create qrcodes directory if it doesn't exist
const qrDir = path.join(__dirname, 'assets', 'qrcodes');
if (!fs.existsSync(qrDir)) {
  fs.mkdirSync(qrDir, { recursive: true });
}

// Base URL for the deployed site
const baseUrl = 'https://kayton-project.vercel.app';

// QR code configurations
const qrCodes = [
  {
    name: 'landing-page',
    url: baseUrl,
    description: 'Main landing page'
  },
  {
    name: 'hd-189733-b',
    url: `${baseUrl}#hd-189733-b`,
    description: 'HD 189733 b - Glass Rain Planet'
  },
  {
    name: 'wasp-76b',
    url: `${baseUrl}#wasp-76b`,
    description: 'WASP-76b - Iron Rain Planet'
  },
  {
    name: 'cancri-e',
    url: `${baseUrl}#cancri-e`,
    description: '55 Cancri e - Lava Ocean Planet'
  },
  {
    name: 'kepler-16b',
    url: `${baseUrl}#kepler-16b`,
    description: 'Kepler-16b - Real-life Tatooine'
  },
  {
    name: 'tres-2b',
    url: `${baseUrl}#tres-2b`,
    description: 'TrES-2b - Darkest Planet'
  }
];

// QR code options for high quality printing
const options = {
  errorCorrectionLevel: 'H', // High error correction for better scanning
  type: 'png',
  quality: 1,
  margin: 2,
  width: 600, // High resolution for printing
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
};

async function generateQRCodes() {
  console.log('🚀 Generating QR codes for Extreme Worlds project...\n');
  
  for (const qr of qrCodes) {
    const filePath = path.join(qrDir, `qr-${qr.name}.png`);
    
    try {
      await QRCode.toFile(filePath, qr.url, options);
      console.log(`✅ Generated: qr-${qr.name}.png`);
      console.log(`   URL: ${qr.url}`);
      console.log(`   Description: ${qr.description}\n`);
    } catch (err) {
      console.error(`❌ Error generating ${qr.name}:`, err);
    }
  }

  // Also generate SVG versions for scalability
  console.log('\n📐 Generating SVG versions for scalable printing...\n');
  
  const svgOptions = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    width: 600
  };

  for (const qr of qrCodes) {
    const filePath = path.join(qrDir, `qr-${qr.name}.svg`);
    
    try {
      await QRCode.toFile(filePath, qr.url, svgOptions);
      console.log(`✅ Generated: qr-${qr.name}.svg`);
    } catch (err) {
      console.error(`❌ Error generating ${qr.name} SVG:`, err);
    }
  }

  console.log('\n🎉 All QR codes generated successfully!');
  console.log(`📁 Location: ${qrDir}`);
  console.log('\n📋 URLs Summary:');
  console.log('─'.repeat(60));
  qrCodes.forEach(qr => {
    console.log(`${qr.name.padEnd(15)} → ${qr.url}`);
  });
  console.log('─'.repeat(60));
  console.log('\n💡 Tip: Test all QR codes with your phone before printing!');
}

generateQRCodes();
