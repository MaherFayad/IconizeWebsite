import fs from 'fs';
import { create } from 'xmlbuilder2';

// Define your website's URLs with associated images
const urls = [
  {
    url: 'https://www.iconize.ca/',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '1.0',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Asset_1_1.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Contact.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Frame%2019555.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Frame.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/gameit-logo-large.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/ggg_1.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Group_3.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/image215.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/image217.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/iterationX.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/konica-minolta.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Layer_1.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Mit-olin.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Solidity-Law.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/Solidity-Studios.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/theradome.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/companies/new/HCDL.png&w=128&q=75',
      'https://www.iconize.ca/_next/image?url=/images/blogs/blog-pic-1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/blogs/blog-pic-2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/blogs/blog-pic-3.jpg&w=384&q=75',
    ],
  },
  {
    url: 'https://www.iconize.ca/about',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/image-1.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/photo-1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/photo-2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/photo-3.jpg&w=384&q=75',
    ],
  },
  {
    url: 'https://www.iconize.ca/services',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-1.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-2.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-3.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-4.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-5.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-6.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-7.jpg&w=640&q=75',
      'https://www.iconize.ca/_next/image?url=/images/services/service-photo-8.jpg&w=640&q=75',
    ],
  },
  {
    url: 'https://www.iconize.ca/projects',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add project page images here
  },
  {
    url: 'https://www.iconize.ca/blog',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add blog page images here
  },
  {
    url: 'https://www.iconize.ca/contact',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add contact page images here
  },
  {
    url: 'https://www.iconize.ca/services/0',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add images for service 0 here
  },
  {
    url: 'https://www.iconize.ca/services/1',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add images for service 1 here
  },
  {
    url: 'https://www.iconize.ca/services/2',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add images for service 2 here
  },
  {
    url: 'https://www.iconize.ca/services/3',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add images for service 3 here
  },
  {
    url: 'https://www.iconize.ca/services/4',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [], // Add images for service 4 here
  },
  {
    url: 'https://www.iconize.ca/projects/0',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/3.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/4.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-0/5.jpg&w=384&q=75',
    ],
  },
  {
    url: 'https://www.iconize.ca/projects/1',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/3.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/4.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-1/5.jpg&w=384&q=75',
    ], // Add images for project 1 here
  },
  {
    url: 'https://www.iconize.ca/projects/2',
    lastmod: '2023-10-10T13:00:02+01:00',
    priority: '0.8',
    images: [
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/1.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/2.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/3.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/4.jpg&w=384&q=75',
      'https://www.iconize.ca/_next/image?url=/images/projects/Project-2/5.jpg&w=384&q=75',
    ], // Add images for project 2 here
  },
  {
    url: 'https://www.iconize.ca/services/5',
    lastmod: '2023-10-10T13:00:07+01:00',
    priority: '0.8',
    images: [], // Add images for service 5 here
  },
  {
    url: 'https://www.iconize.ca/services/6',
    lastmod: '2023-10-10T13:00:07+01:00',
    priority: '0.8',
    images: [], // Add images for service 6 here
  },
  {
    url: 'https://www.iconize.ca/services/7',
    lastmod: '2023-10-10T13:00:07+01:00',
    priority: '0.8',
    images: [], // Add images for service 7 here
  },
];

// Create the sitemap XML
const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
  });

for (const { url, lastmod, priority, images } of urls) {
  const ele = root.ele('url');
  ele.ele('loc').txt(url);
  ele.ele('lastmod').txt(lastmod);
  ele.ele('priority').txt(priority);

  for (const imageUrl of images) {
    const imageEle = ele.ele('image:image');
    imageEle.ele('image:loc').txt(imageUrl);
  }
}

// Save the XML to a file
fs.writeFileSync('sitemap.xml', root.end({ prettyPrint: true }));

console.log('Sitemap generated successfully!');
