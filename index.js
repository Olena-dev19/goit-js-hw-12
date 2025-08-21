import{a as c,S as P,i as s}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&g(y)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:"51771971-26538829ed76446a8c68a5295",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:""};async function L(a,t){return(await c.get("",{params:{...c.defaults.params,q:a,page:t}})).data}const S=document.querySelector(".gallery"),u=document.querySelector(".loader-hidden"),d=document.querySelector(".js-load-btn");let f=null;function b(a){let t=a.map(r=>`<li class="item-gallery">
        <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");S.insertAdjacentHTML("beforeend",t),f?f.refresh():f=new P(".gallery a",{captionsData:"alt",captionDelay:250})}function m(){S.innerHTML=""}function q(){u&&u.classList.add("is-active")}function w(){u&&u.classList.remove("is-active")}function v(){d.disabled=!1,d.classList.remove("hidden")}function h(){d.disabled=!0,d.classList.add("hidden")}function $(){const a=document.querySelector(".js-gallery .item-gallery");if(!a)return;const t=a.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const p=document.querySelector(".form"),x=document.querySelector('[type="text"]');document.querySelector(".js-gallery");const B=document.querySelector(".js-load-btn");let n,i,l=0;const O=15;p.addEventListener("submit",async a=>{if(a.preventDefault(),n=x.value.trim(),i=1,!n){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}q(),h();try{const t=await L(n,i),r=t.hits;if(r.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"}),m();return}m(),b(r),l=Math.ceil(t.totalHits/O),i<l?v():(h(),s.error({message:"We're sorry, but you've reached the end of search results."}))}catch{l=0,s.error({message:"Sorry, there are no images matching your search query. Please try again!"}),m()}finally{w()}p.reset()});B.addEventListener("click",async()=>{i+=1,h(),q();try{const a=await L(n,i);b(a.hits),$()}catch{s.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{w(),i<l?v():(h(),s.error({message:"We're sorry, but you've reached the end of search results."}))}});
//# sourceMappingURL=index.js.map
