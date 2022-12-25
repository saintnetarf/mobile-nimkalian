var routes = [
{path: "/", url: "index.html"},
{path: "/detailpostcategory/", 
  componentUrl: "pages/detailpostcategory.html",
  options: {
    transition: 'f7-fade',
  },
},
{path: "/detailpost/", 
  componentUrl: "pages/detailpost.html",
  options: {
    transition: 'f7-fade',
  },
},
{path: "/detail/", 
  componentUrl: "pages/detail.html",
  options: {
    transition: 'f7-fade',
  },
},
{path: "(.*)", url: "pages/404.html"}
];