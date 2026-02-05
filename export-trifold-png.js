const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Helper function to wait
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create export directory
const exportDir = path.join(__dirname, 'assets', 'trifold-export');
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

async function exportTrifoldPanels() {
  console.log('🚀 Starting trifold PNG export...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set high DPI for print quality (300 DPI equivalent)
  await page.setViewport({
    width: 1200,
    height: 1800,
    deviceScaleFactor: 3 // 3x for high resolution
  });
  
  // Load the trifold page
  const filePath = `file://${path.join(__dirname, 'trifold.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  // Wait for images to load
  await wait(2000);
  
  // Hide nav and instructions for export
  await page.addStyleTag({
    content: `
      .nav, .print-instructions { display: none !important; }
      body { background: transparent !important; }
      .trifold-container { 
        display: block !important; 
        padding: 0 !important;
        margin: 0 !important;
        max-width: none !important;
      }
      .panel {
        margin: 0 !important;
        border-radius: 0 !important;
      }
    `
  });

  // Export each panel separately
  const panels = [
    { selector: '.panel-left', name: 'left-panel-what-are-exoplanets', title: 'Left Panel' },
    { selector: '.panel-center', name: 'center-panel-extreme-worlds', title: 'Center Panel' },
    { selector: '.panel-right', name: 'right-panel-comparisons', title: 'Right Panel' }
  ];

  for (const panel of panels) {
    console.log(`📸 Capturing ${panel.title}...`);
    
    const element = await page.$(panel.selector);
    if (element) {
      const outputPath = path.join(exportDir, `${panel.name}.png`);
      await element.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`   ✅ Saved: ${panel.name}.png`);
    } else {
      console.log(`   ❌ Could not find ${panel.selector}`);
    }
  }

  // Also export full trifold as one wide image
  console.log('\n📸 Capturing full trifold (all 3 panels)...');
  
  await page.setViewport({
    width: 3600, // Wide enough for 3 panels
    height: 1800,
    deviceScaleFactor: 2
  });
  
  await page.addStyleTag({
    content: `
      .trifold-container {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 20px !important;
        padding: 20px !important;
        background: #1a1a1a !important;
      }
    `
  });
  
  await wait(500);
  
  const trifoldContainer = await page.$('.trifold-container');
  if (trifoldContainer) {
    await trifoldContainer.screenshot({
      path: path.join(exportDir, 'full-trifold-all-panels.png'),
      type: 'png'
    });
    console.log('   ✅ Saved: full-trifold-all-panels.png');
  }

  // Export QR codes page too
  console.log('\n📸 Capturing QR codes print sheet...');
  
  await page.setViewport({
    width: 1200,
    height: 1800,
    deviceScaleFactor: 3
  });
  
  const qrFilePath = `file://${path.join(__dirname, 'qrcodes-print.html')}`;
  await page.goto(qrFilePath, { waitUntil: 'networkidle0' });
  await wait(1000);
  
  await page.addStyleTag({
    content: `
      .nav, .instructions { display: none !important; }
      h1 { margin-top: 20px !important; }
    `
  });
  
  await page.screenshot({
    path: path.join(exportDir, 'qr-codes-sheet.png'),
    type: 'png',
    fullPage: true
  });
  console.log('   ✅ Saved: qr-codes-sheet.png');

  await browser.close();
  
  console.log('\n🎉 Export complete!');
  console.log(`📁 Files saved to: ${exportDir}`);
  console.log('\n📋 Exported files:');
  console.log('   • left-panel-what-are-exoplanets.png');
  console.log('   • center-panel-extreme-worlds.png');
  console.log('   • right-panel-comparisons.png');
  console.log('   • full-trifold-all-panels.png');
  console.log('   • qr-codes-sheet.png');
  console.log('\n💡 These are high-resolution images suitable for printing!');
}

exportTrifoldPanels().catch(console.error);
