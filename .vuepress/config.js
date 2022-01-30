module.exports = {
  port: 3000,
  title: "Intellisys Controls",
  description:
    "Industrial wireless controllers - Builtin quality at every step",
  themeConfig: {
    search: false,
    lastUpdated: false,
    contributors: false,
    navbar: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Products",
        children: [
          {
            text: "Connectivity",
            children: [
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
            children: [
              {
                text: "Flex2400 Tranceiver",
                link: "/products/flex2400"
              }
            ]
          }
        ]
      },
      {
        text: 'Services and Rentals',
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
};
