module.exports = {
  title: "Intellisys Controls",
  description:
    "Industrial wireless controllers - Builtin quality at every step",
  themeConfig: {
    search: false,
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Products",
        items: [
          {
            text: "Connectivity",
            items: [
              {
                text: "DT1000",
                link: "/products/dt1000"
              },
              {
                text: "EMB2000",
                link: "/products/emb2000"
              }
            ]
          },
          {
            text: "OEM",
            items: [
              {
                text: "Flex2400 Tranceiver",
                link: "/products/flex2400"
              }
            ]
          }
        ]
      },
      {
        text: 'Services',
        link: '/services'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Contact us',
        link: '/contact-us'
      }
    ]
  }
  // postcss: {
  //   plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  // },
};
