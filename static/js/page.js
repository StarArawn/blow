function activeTocItem(){var e=window.scrollY;console.log(e)}function findCorrespondingTocTitle(t){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+t.id)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");window.addEventListener("scroll",activeTocItem);let n=null;const t=new window.IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){console.log(t,"active");let e=findCorrespondingTocTitle(t.target);void 0===e||null!==n&&n===e||(null!==n&&n.classList.remove("bg-blue-800"),n=e),console.log(e),e.classList.add("bg-blue-800")}else{console.log(t,"inactive");let e=findCorrespondingTocTitle(t.target);e.classList.remove("bg-blue-800")}})},{root:null,threshold:.1});var o=[];[...e].forEach(e=>{o.push(e.href.substring(e.href.indexOf("#")))});const l=document.querySelectorAll(o.join(","));l.forEach(e=>{t.observe(e)})});