import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-22a39d25","/about.html",{"title":""},["/about","/about.md"]],
  ["v-6e4daf96","/contact-us.html",{"title":""},["/contact-us","/contact-us.md"]],
  ["v-0bfd24e2","/services.html",{"title":"Services"},["/services","/services.md"]],
  ["v-90f2a4d0","/products/dt1000.html",{"title":"DT1000"},["/products/dt1000","/products/dt1000.md"]],
  ["v-198a50d3","/products/emb2000.html",{"title":"EMB2000"},["/products/emb2000","/products/emb2000.md"]],
  ["v-5194c74c","/products/flex2400.html",{"title":"Flex2400 OEM Transceiver"},["/products/flex2400","/products/flex2400.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
