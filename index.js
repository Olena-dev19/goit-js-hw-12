import{a as n,S as q,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&y(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function y(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();n.defaults.baseURL="https://pixabay.com/api/";n.defaults.params={key:"51771971-26538829ed76446a8c68a5295",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:""};async function g(o,r){return(await n.get("",{params:{...n.defaults.params,q:o,page:r}})).data}const L=document.querySelector(".gallery"),c=document.querySelector(".loader-hidden"),S=document.querySelector(".js-load-btn");let d=null;function w(o){let r=o.map(t=>`<li class="item-gallery">
        <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${t.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${t.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${t.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${t.downloads}</p>
          </li>
        </ul>
      </li>`).join("");L.insertAdjacentHTML("beforeend",r),d?d.refresh():d=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function f(){L.innerHTML=""}function v(){c&&c.classList.add("is-active")}function P(){c&&c.classList.remove("is-active")}function $(){S.classList.remove("hidden")}function m(){S.classList.add("hidden")}function B(){const o=document.querySelector(".js-gallery .item-gallery");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function b(){s<h?$():inpValue?(m(),l.error({message:"We're sorry, but you've reached the end of search results."})):m()}const p=document.querySelector(".form"),x=document.querySelector('[type="text"]');document.querySelector(".js-gallery");const O=document.querySelector(".js-load-btn");let i,s,h=0;const j=15;p.addEventListener("submit",async o=>{o.preventDefault(),i=x.value.trim(),s=1,v();try{const r=await g(i,s),t=r.hits;if(t.length===0||!i){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f();return}f(),w(t),h=Math.ceil(r.totalHits/j)}catch{h=0,l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f()}finally{P()}b(),p.reset()});O.addEventListener("click",async()=>{s+=1,b();try{const o=await g(i,s);w(o.hits),B()}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}});
//# sourceMappingURL=index.js.map
