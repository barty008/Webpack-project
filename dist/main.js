(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="";const t=function(e,t){const n=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("h2");return n.setAttribute("class","hero-container"),c.setAttribute("class","hero-title"),a.setAttribute("class","hero-subtitle"),c.textContent="Where Gastronomic Delights Unite with Timeless Elegance",a.textContent="Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience.",[c,a].forEach((e=>n.appendChild(e))),n}();e.appendChild(t)};function t(e,t,n,c,a,o){const i=document.createElement("div");i.setAttribute("class","menu-container");const r=document.createElement("h3");r.setAttribute("class","menu-title"),r.textContent=e;const s=document.createElement("li");return s.setAttribute("class","menu-list"),s.textContent=t,i.appendChild(r),i.appendChild(s),i}const n=function(){const e=document.getElementById("main");e.textContent="";const n=[t("Dinner","FOUR COURSE £50"),t("BROTH","Smoked bone marrow, chive"),t("BEETROOT","Berkswell cheese, nasturtium"),t("CHICKEN LIVER PARFAIT","quince, lemon verbena"),t("LOBSTER","XO sauce, sea vegetables"),t("APPLE","Calvados, vanilla"),t("HAZELNUT","Chocolate, lime")];let c=document.createElement("div");c.setAttribute("class","slide"),e.appendChild(c),n.forEach((e=>c.appendChild(e)))};function c(e,t){const n=document.createElement("button");n.setAttribute("id",e);const c=document.createElement("span");return c.textContent=t,n.appendChild(c),n.classList.add("tab"),n}function a(e){const t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("h3");return c.setAttribute("class","address-details"),c.textContent=e,n.appendChild(c),t.appendChild(n),t}const o=function(){const e=document.getElementById("main");e.textContent="";const t=[a("t: 0121 446 080"),a("Shadow Brook Lane, B75 21N")],n=document.createElement("div");n.setAttribute("class","map-container"),n.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19399.28562262357!2d-1.8235824499999997!3d52.5712261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1684920408366!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';const c=document.createElement("div");c.setAttribute("class","contact-container"),e.appendChild(c),t.forEach((e=>c.appendChild(e))),c.appendChild(n)};(function(){const e=document.getElementById("content"),t=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");c.setAttribute("class","header-title"),c.textContent="Peels";const a=document.createElement("i");return a.setAttribute("class","fa-solid fa-bars"),n.appendChild(a),n.appendChild(c),n}(),n=function(e){const t=document.createElement("nav");return t.setAttribute("id","nav"),t.setAttribute("class","mobile-hidden"),[c("homebtn","Home"),c("menubtn","Menu"),c("contactbtn","Contact")].forEach((e=>t.appendChild(e))),t}(),a=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();a.classList.add("active");const o=function(e,t){const n=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("h2");return n.setAttribute("class","hero-container"),c.setAttribute("class","hero-title"),a.setAttribute("class","hero-subtitle"),c.textContent="Where Gastronomic Delights Unite with Timeless Elegance",a.textContent="Welcome to Peels, where culinary artistry meets impeccable elegance. Step into a world of refined indulgence, where every detail is carefully orchestrated to create an extraordinary dining experience.",[c,a].forEach((e=>n.appendChild(e))),n}(),i=function(e,t){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="Copyright © 2023 Bartrum",n.appendChild(c),n}(),r=document.createElement("a");r.setAttribute("href","https://github.com/barty008");const s=document.createElement("i");s.setAttribute("class","fa-brands fa-github"),r.appendChild(s),i.appendChild(r),[t,n,a,i].forEach((t=>e.appendChild(t))),a.appendChild(o)})(),function(){document.getElementById("content");const t=document.getElementById("homebtn"),c=document.getElementById("menubtn"),a=document.getElementById("contactbtn"),r=document.querySelectorAll(".tab");document.querySelector(".fa-bars").addEventListener("click",s),c.addEventListener("click",n),t.addEventListener("click",e),a.addEventListener("click",o),r.forEach((e=>{e.addEventListener("click",(()=>{i.classList.add("active"),i.classList.add("scale-in-top"),setTimeout((()=>{i.classList.remove("scale-in-top")}),500)}))}))}();const i=document.getElementById("main"),r=document.getElementById("nav");function s(){r.classList.add("scale-in-top"),r.style.display="flex"}})();