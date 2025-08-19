import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { getImagesByQuery } from './js/pixabay-api';
import {createGallery} from './js/render-functions'
import { clearGallery } from './js/render-functions';
import {showLoader} from './js/render-functions'
import {hideLoader} from './js/render-functions'
import {checkBtnVisibleStatus} from './js/render-functions';
import {smoothScrollAfterLoad} from './js/render-functions';


//======================================

const formEl = document.querySelector('.form');
const inputValue = document.querySelector('[type="text"]');
const gallery = document.querySelector('.js-gallery');
const loadBtn = document.querySelector('.js-load-btn');

let inpValue;
export let currentPage;
export let maxPage = 0;
const pageSize = 15;

formEl.addEventListener("submit", async (e) => {
   
    e.preventDefault();

    inpValue = inputValue.value.trim();
    currentPage = 1;
    showLoader();
    try {
       
        const res = await getImagesByQuery(inpValue, currentPage);
        const arrOfImage = res.hits;
        
        if (arrOfImage.length === 0 || !inpValue) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            clearGallery();
            
            return;
        }
        clearGallery();
        createGallery(arrOfImage);

        maxPage = Math.ceil(res.totalHits / pageSize);
       
    }

    catch {
        maxPage = 0;
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        })
        clearGallery();
    }
    finally {
        hideLoader();
    }

    checkBtnVisibleStatus();
    formEl.reset();
});

loadBtn.addEventListener('click', async () => {
    currentPage += 1;

    checkBtnVisibleStatus();
    try {
        const res = await getImagesByQuery(inpValue, currentPage);
        createGallery(res.hits);
        smoothScrollAfterLoad();
    } catch {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
    }
})



