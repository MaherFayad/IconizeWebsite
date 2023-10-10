import fs from 'fs';
import { create } from 'xmlbuilder2';

// Define your website's URLs
const urls = [
  'https://www.iconize.ca/',
  'https://www.iconize.ca/about',
  'https://www.iconize.ca/services',
  'https://www.iconize.ca/projects',
  'https://www.iconize.ca/blog',
  'https://www.iconize.ca/contact',
  'https://www.iconize.ca/services/0',
  'https://www.iconize.ca/services/1',
  'https://www.iconize.ca/services/2',
  'https://www.iconize.ca/services/3',
  'https://www.iconize.ca/services/4',
  'https://www.iconize.ca/projects/0',
  'https://www.iconize.ca/projects/1',
  'https://www.iconize.ca/projects/2',
  'https://www.iconize.ca/services/5',
  'https://www.iconize.ca/services/6',
  'https://www.iconize.ca/services/7'
];

// Create the sitemap XML
const root = create({ version: '1.0' })
  .ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
  });

  for (const url of urls) {
    const ele = root.ele('url');
    ele.ele('loc').txt(url);
    ele.ele('lastmod').txt('2023-10-10T09:01:02+00:00');
    ele.ele('priority').txt('0.80');
  }
     
// Save the XML to a file
fs.writeFileSync('public/sitemap.xml', root.end({ prettyPrint: true }));

console.log('Sitemap generated successfully!');

export {};
