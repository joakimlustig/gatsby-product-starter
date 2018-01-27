export const config = {
  siteUrl: 'https://product.com',
  siteName: 'Product',
  tagline: 'Tagline',
  siteImage: '/product.png', // this is referencing the file in the static folder at the root of the project and will be used when people share your webpage on social media
  description: 'Meta description',
  keywords: 'keyword, wordkey, key, word',
  googleSiteVerification: 'hello-google',
  googleAnalyticsId: 'hello-GA',

  contact: {
    email: 'contact@product.com'
  },
  menuItems: [
    {
      name: 'Features',
      path: '/features'
    },
    {
      name: 'Pricing',
      path: '/pricing'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Blog',
      path: '/blog'
    }
  ]
}