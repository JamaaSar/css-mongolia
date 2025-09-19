exports.id=308,exports.ids=[308],exports.modules={7382:(a,b,c)=>{"use strict";c.d(b,{N_:()=>f});var d=c(88264);let e=(0,c(18069).A)({locales:["mn","en"],defaultLocale:"mn",localeDetection:!1}),{Link:f,redirect:g,usePathname:h,useRouter:i,getPathname:j}=(0,d.A)(e)},21197:(a,b,c)=>{"use strict";c.d(b,{a8:()=>h,rE:()=>e,sV:()=>f,vM:()=>g});var d=c(45647);async function e(){return(await (0,d.f)(`
    query homePageSettingsQuery {
      homePageSettings {
        homePageSetting{
          title
          titleMn
          excerpt
          excerptMn
          banners {
            bannerImage {
              node {
                mediaItemUrl
              }
            }
              bannerText
              bannerTextMn

          }
          newsSection {
            newsTitle
            newsTitleMn
            featuredNews {
              nodes {
                ... on News {
                  desiredSlug
                  slug
                  dateGmt
                  databaseId
                  newsCustomFields {
                    newsContentType
                    newsLanguage
                    sourceLink
                    sourceName
                    sourceNameMn
                    title
                    titleMn
             featuredImage {
            node {
                mediaItemUrl
            }
          }
                  }
                }
              }
            }
          }
          projectSection {
            projectTitle
            projectTitleMn
            featuredProject {
              nodes {
                ... on Project {
                  databaseId
                  title
                  projectCustomFields {
                    projectLanguage
                    excerpt
                    excerptMn
                    featuredImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                }
              }
            }
          }
          ressourceSection {
            ressourceTitle
            ressourceTitleMn
            ressourceExcerptMn
            ressource
            featuredRessource {
              nodes {
                ... on Resource {
                  databaseId
                  resourceCustomField {
                    excerpt
                    excerptMn
                    title
                    titleMn
                    featuredImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `)).homePageSettings.homePageSetting}async function f(){return(await (0,d.f)(`query getSocialMedia {
      pageSettings {
        socialMedia {
          facebook
          linkedin
          youtube
        }
      }
    }
    `)).pageSettings.socialMedia||[]}async function g(){return(await (0,d.f)(`query getSocialMedia {
      pageSettings {
        menuAction {
          menuItems {
            menuItem
            menuItemMn
          }
        }
      }
    }
    `)).pageSettings.menuAction.menuItems||[]}async function h(){return(await (0,d.f)(`
    query homePageSettingsQuery {
      homePageSettings {
        homePageSetting{
            logo {
              node {
                mediaItemUrl
              }
            }
                  logoMn {
              node {
                mediaItemUrl
              }
            }
        }
      }
    }
    `)).homePageSettings.homePageSetting}},22527:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>s,generateStaticParams:()=>r});var d=c(75338),e=c(36757),f=c(42531),g=c(82161),h=c(82079),i=c(65724);c(61479),c(39881);var j=c(23181),k=c(50353),l=c.n(k),m=c(21455),n=c.n(m),o=c(50513),p=c(21197),q=c(89973);function r(){return h.D.locales.map(a=>({locale:a}))}async function s({children:a,params:b}){let{locale:c}=await b,k=await (0,p.vM)(),m=await (0,p.sV)(),r=await (0,p.a8)(),s=await (0,q.Pu)();h.D.locales.includes(c)||(0,g.notFound)(),(0,i.I)(c);let t=await (0,f.A)();return(0,d.jsxs)("html",{lang:c,className:`${l().variable} ${n().variable} antialiased`,children:[(0,d.jsx)("head",{children:(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,d.jsx)(e.A,{messages:t,children:(0,d.jsxs)("body",{className:"flex flex-col  min-h-screen",children:[(0,d.jsx)(j.Header,{locale:c,items:k,socialItems:m,logos:r}),(0,d.jsxs)("main",{className:"flex-grow bg-inherit pb-10 animate-fade-in opacity-0",children:[" ",a]}),(0,d.jsx)(o.Footer,{locale:c,socialItems:m,logos:r,addressMn:s.addressMn,address:s.address})]})})]})}},23181:(a,b,c)=>{"use strict";c.d(b,{Header:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jamaasaranbat/miniih/css-mongolia-front-end/src/components/layout/Header/header.tsx","Header")},27079:(a,b,c)=>{"use strict";c.d(b,{D:()=>g});var d=c(21124),e=c(38301),f=c(7382);let g=a=>{let[b,c]=(0,e.useState)(!1),[g,h]=(0,e.useState)(null);return(0,d.jsx)("div",{className:"relative rubik",onMouseEnter:a=>{c(!0),clearTimeout(g)},onMouseLeave:()=>{h(setTimeout(()=>c(!1),500))},children:(0,d.jsx)("div",{className:"flex items-center justify-between text-sm",children:(0,d.jsxs)(f.N_,{className:`hover:text-secondary font-medium w-full
            ${a.isActive&&" text-secondary"}`,href:a.href,target:a.target,children:[a.title,a.isActive]})})})}},39881:()=>{},45647:(a,b,c)=>{"use strict";c.d(b,{f:()=>e});let d=process.env.WORDPRESS_API_URL;async function e(a="",{variables:b,apiUrl:c}={}){let f={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(f.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let g=await fetch(c??d,{headers:f,method:"POST",body:JSON.stringify({query:a,variables:b}),next:{revalidate:60}}),h=await g.json();if(h.errors)throw console.error(h.errors),Error("Failed to fetch API");return h.data}},49641:(a,b,c)=>{"use strict";c.d(b,{g:()=>d});let d=(a,b)=>[{title:a("menu.homepage"),href:"/",isActive:"/"===b},{title:a("menu.newspage"),href:"/news",isActive:b.includes("news")},{title:a("menu.project"),href:"/project",isActive:b.includes("project")},{title:a("menu.about-us"),href:"/about-us",isActive:b.includes("about-us")},{title:a("menu.contact-us"),href:"/contact-us",isActive:b.includes("contact-us")}]},50513:(a,b,c)=>{"use strict";c.d(b,{Footer:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jamaasaranbat/miniih/css-mongolia-front-end/src/components/layout/Footer/footer.tsx","Footer")},51472:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d})},58334:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},61479:()=>{},66877:(a,b,c)=>{Promise.resolve().then(c.bind(c,53523)),Promise.resolve().then(c.bind(c,50513)),Promise.resolve().then(c.bind(c,23181))},68527:(a,b,c)=>{"use strict";c.d(b,{Header:()=>y});var d=c(21124),e=c(20481),f=c(27079),g=c(38301),h=c(42378),i=c(93043),j=c(26452),k=c(44070),l=c(49641);let m=({locale:a,items:b=[],footer:c=!1})=>{let[m,n]=(0,g.useState)(!1),o=(0,h.usePathname)(),p=(0,e.c3)(),q=o.replace(`/${a}`,"")||"/",r=(0,i.Ub)({maxWidth:820}),s=(0,l.g)(p,q);return(0,d.jsx)("div",{className:`uppercase text-sm text-color font-medium tracking-[1px]  ${c?"":"w-full"}`,children:r&&!c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex items-center justify-end pl-1 lg:hidden",onClick:()=>{n(!m)},children:m?(0,d.jsx)(j.A,{className:"h-7 w-7"}):(0,d.jsx)(k.A,{className:"h-7 w-7"})}),(0,d.jsx)("div",{id:"mobile-menu",className:`
        ${m?"-translate-x-50 bg-white w-full top-32 lg:hidden fixed py-10 flex flex-col gap-7 h-full z-30 px-10 uppercase text-lg tracking-widest transition-all ease-in-out duration-200 overflow-x-hidden":"-translate-x-full hidden"}`,children:s.map((a,b)=>(0,d.jsx)("div",{onClick:()=>n(!1),children:(0,d.jsx)(f.D,{...a})},b))})]}):(0,d.jsx)("div",{className:` ${c?"flex flex-col gap-y-4 h-[110px] gap-x-[30%] sm:flex-wrap  ":"flex gap-10 sm:gap-x-5 justify-end"} `,children:s.map((a,b)=>(0,d.jsx)(f.D,{...a},b))})})};var n=c(72842),o=c(3991),p=c.n(o),q=c(75690),r=c(6868),s=c(53421);let t={en:{value:"en",label:"ENGLISH"},mn:{value:"mn",label:"МОНГОЛ"}},u=({locale:a,socialItems:b})=>{let c=(0,h.useRouter)(),e=(0,h.usePathname)(),f=(0,i.Ub)({maxWidth:724});return(0,d.jsxs)("div",{className:"flex justify-end gap-4 sm:gap-10",children:[(0,d.jsx)("div",{className:"flex gap-4",children:["facebook","linkedin","youtube"].map(a=>(0,d.jsx)(n.b6,{url:b[a],target:"_blank",bgColor:"transparent",fgColor:"#1A75BC",className:"hidden md:block rounded-full bg-[#E8F1F8] hover:bg-primary/20 transition-colors !w-8 !h-8 lg:!w-10 lg:!h-10"},a))}),f?(0,d.jsxs)(r.W1,{as:"div",className:"relative inline-flex items-center justify-center",children:[(0,d.jsxs)(r.IU,{className:"flex w-full items-center justify-cente bg-secondary text-white font-medium text-center text-sm  py-[6px] px-4",children:[(0,d.jsx)("div",{children:t[a].label}),(0,d.jsx)(q.A,{className:"ml-2 -mr-1 h-5 w-5 ","aria-hidden":"true"})]}),(0,d.jsx)(s.e,{as:g.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsx)(r.c,{className:"absolute top-10 right-0 py-2 px-4 bg-white shadow-lg w-[115px] h-[40px]",children:(0,d.jsx)("div",{className:"px-1 py-1",children:Object.keys(t).filter(b=>b!=a).map(a=>{let b=t[a];return(0,d.jsx)(r.Dr,{children:({active:c})=>(0,d.jsx)(p(),{className:`${c&&"text-white bg-secondary"} justify-center w-full group flex items-center text-sm `,href:(a=>{let b=e.split("/");return b[1]=a,b.join("/")})(a),locale:a,scroll:!1,children:b.label})},a)})})})})]}):(0,d.jsx)("div",{className:"flex gap-4 rubik font-medium text-center text-sm",children:Object.keys(t).map(b=>{let f=t[b];return(0,d.jsx)("button",{className:`${a==b&&"bg-secondary  text-white "} py-2 px-4 hover:bg-secondary hover:text-white`,onClick:()=>(b=>{if(b===a)return;let d=e.split("/");d[1]=b,c.replace(d.join("/"))})(b),children:f.label},b)})})]})};var v=c(24515),w=c(7382),x=c(91791);let y=({locale:a,items:b,socialItems:c,logos:e})=>{let f=(0,i.Ub)({maxWidth:640});return(0,d.jsx)("div",{className:"w-full absolute sticky top-0 z-50 flex flex-col gap-2 px-4 py-4 sm:justify-between sm:flex-row sm:gap-10 md:px-8 items-center h-[140px] bg-white",children:f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"justify-end w-full",children:(0,d.jsx)(u,{locale:a,socialItems:c})}),(0,d.jsxs)("div",{className:"flex justify-between w-full items-center",children:[(0,d.jsx)(w.N_,{href:`/${a}`,children:(0,d.jsx)(v.default,{src:(0,x.v)(a,e.logoMn.node.mediaItemUrl,e.logo.node.mediaItemUrl),width:350,height:150,sizes:"auto",alt:"logo"})}),(0,d.jsx)(m,{locale:a,footer:!1,items:b})]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(w.N_,{href:"/",children:(0,d.jsx)(v.default,{src:(0,x.v)(a,e.logoMn.node.mediaItemUrl,e.logo.node.mediaItemUrl),width:350,height:150,sizes:"auto",alt:"logo"})}),(0,d.jsxs)("div",{className:"flex flex-col gap-8 justify-end",children:[(0,d.jsx)(u,{locale:a,socialItems:c}),(0,d.jsx)(m,{locale:a,footer:!1,items:b})]})]})})}},70440:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(97523);let e=async a=>[{type:"image/x-icon",sizes:"16x16",url:(0,d.fillMetadataSegment)(".",await a.params,"favicon.ico")+""}]},73724:(a,b,c)=>{"use strict";c.d(b,{A:()=>g});var d=c(43692),e=c(82079),f=c(53366);let g=(0,d.A)(async({requestLocale:a})=>{let b=await a,d=(0,f.EL)(e.D.locales,b)?b:"mn";return{locale:d,messages:(await c(76565)(`./${d}.json`)).default}})},76565:(a,b,c)=>{var d={"./en.json":[87368,368],"./mn.json":[94736,736]};function e(a){if(!c.o(d,a))return Promise.resolve().then(()=>{var b=Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b});var b=d[a],e=b[0];return c.e(b[1]).then(()=>c.t(e,19))}e.keys=()=>Object.keys(d),e.id=76565,a.exports=e},78335:()=>{},82079:(a,b,c)=>{"use strict";c.d(b,{D:()=>d});let d=(0,c(68411).A)({locales:["mn","en"],defaultLocale:"mn",localeDetection:!1})},85437:(a,b,c)=>{Promise.resolve().then(c.bind(c,37397)),Promise.resolve().then(c.bind(c,86676)),Promise.resolve().then(c.bind(c,68527))},86676:(a,b,c)=>{"use strict";c.d(b,{Footer:()=>o});var d=c(21124);let e={src:"/_next/static/media/iso.b1c4ac3c.png"};var f=c(24515),g=c(72842),h=c(3991),i=c.n(h),j=c(91791),k=c(49641),l=c(20481),m=c(42378),n=c(27079);let o=({locale:a,socialItems:b,logos:c,address:h,addressMn:o})=>{let p=(0,m.usePathname)(),q=(0,l.c3)(),r=p.replace(`/${a}`,"")||"/",s=(0,k.g)(q,r);return(0,d.jsxs)("div",{className:"w-full border-t-30 border-primary pt-8 lg:pt-16 mt-20 pb-5  bottom-0 bg-inherit h-[600px] lg:h-[360px] bg-[#F6F7F9]! m-auto flex flex-col gap-4 lg:gap-10",children:[(0,d.jsxs)("div",{className:`css-home-container mx-auto 2xl:container flex justify-between flex-col gap-y-4 lg:flex-row
 `,children:[(0,d.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,d.jsx)(i(),{href:`/${a}`,children:(0,d.jsx)(f.default,{src:(0,j.v)(a,c.logoMn.node.mediaItemUrl,c.logo.node.mediaItemUrl),width:250,height:100,sizes:"auto",alt:"logo"})}),(0,d.jsx)("div",{className:"flex gap-4",children:["facebook","linkedin","youtube"].map(a=>(0,d.jsx)(g.b6,{url:b[a],target:"_blank",bgColor:"transparent",fgColor:"#1A75BC",className:"hidden md:block rounded-full bg-[#E8F1F8] hover:bg-primary/20 transition-colors",style:{height:40,width:40}},a))})]}),(0,d.jsx)("div",{className:"flex flex-col gap-4",children:s.slice(0,3).map((a,b)=>(0,d.jsx)(n.D,{...a},b))}),(0,d.jsx)("div",{className:"flex flex-col gap-4",children:s.slice(3,s.length).map((a,b)=>(0,d.jsx)(n.D,{...a},b))}),(0,d.jsx)("div",{className:"flex flex-col gap-4",children:(0,d.jsx)(f.default,{src:e.src,width:200,height:200,alt:"logo",className:"w-16 h-16 "})})]}),(0,d.jsx)("div",{className:"flex css-home-container mx-auto 2xl:container justify-end p-0",children:(0,j.v)(a,o,h)})]})}},89973:(a,b,c)=>{"use strict";c.d(b,{Pu:()=>g,fP:()=>f,y$:()=>e});var d=c(45647);async function e(){return(await (0,d.f)(`query getAboutUsPageSettings {
      aboutUsPageSettings {
        aboutUsPageSetting {
          aboutUsTitle
          aboutUsTitleMn
          aboutUsExcerp
          aboutUsExcerptMn
          missionVisionValues{
            mission {
              excerpt
              excerptMn
              title
              titleMn
            }
            vision {
              excerpt
              excerptMn
              title
              titleMn
            }
            values {
              excerpt
              excerptMn
              title
              titleMn
            }
          }
          strategy {
            excerpt
            excerptMn
            title
            titleMn
          }
          members {
            boardMembersTitle
            boardMembersTitleMn
            membersTitle
            membersTitleMn
                    boardMembersExcerptMn
        boardMembersExcerpts
        membersExcerptMn
        membersExcerpt
          }
        }
      }
    }
    `)).aboutUsPageSettings.aboutUsPageSetting||[]}async function f(){let a=await (0,d.f)(`
    query MyQuery {
      members(where: { orderby: { field: DATE, order: ASC } }) {
        edges {
          node {
          databaseId
            memberCustomFields {
              nameMn
              name
              isBoardMember
              linkedin
              twitter
              facebook
              image {
                node {
                  mediaItemUrl
                }
              }
              bio
              bioMn
              position
              positionMn
            }
          }
        }
      }
    }
  `);return a&&a.members&&a.members.edges&&a.members.edges.length>0?a.members.edges.map(a=>a.node):[]}async function g(){return(await (0,d.f)(`
    query getContactUsPageSettings {
      pageSettings {
        contactUsPageSettings {
          address
          addressMn
          contactUsTitle
          contactUsTitleMn
          email
          phone
        }
      }
    }
  `)).pageSettings.contactUsPageSettings||[]}},91791:(a,b,c)=>{"use strict";function d(a,b,c){return"mn"===a?b:c}c.d(b,{v:()=>d})},96487:()=>{},98502:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))}};