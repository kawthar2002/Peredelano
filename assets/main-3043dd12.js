(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelectorAll('[data-name="faq-item__button"]');a.forEach(o=>{o.addEventListener("click",function(){this.lastElementChild.classList.toggle("turn"),this.nextElementSibling.classList.toggle("hidden")})});const n=document.querySelectorAll("[data-tab]"),d=document.querySelectorAll("[data-tab-content]");n.forEach(o=>{o.addEventListener("click",c=>{n.forEach(s=>{s.className.includes("speakers-topics__item--active")&&s.classList.remove("speakers-topics__item--active")}),d.forEach(s=>{s.classList.add("hidden")}),o.classList.add("speakers-topics__item--active"),document.querySelector("#"+c.target.dataset.tab).classList.remove("hidden")})});const u=document.querySelector(".up");u.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};const l=document.querySelectorAll(".nav__link");l.forEach(o=>{o.addEventListener("click",c=>{l.forEach(r=>{var s;(s=r.lastElementChild)!=null&&s.classList.contains("active")&&r.lastElementChild.classList.remove("active")}),o.lastElementChild.classList.add("active")})});
