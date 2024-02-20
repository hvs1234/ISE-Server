// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

const form = document.querySelector('.search-part');
const searchPart = document.querySelector('.search-result')
const input = document.querySelector('#input');
const btn = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

let keyword = 1;
let page = 1;

searchImage = async () => {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1)
    {
        searchPart.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.loading = "lazy";
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchPart.appendChild(imageLink);
    });

    btn2.style.display = "block";
};

btn.addEventListener('click', searchImage);

form.addEventListener('submit',(e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

btn2.addEventListener('click', () => {
    page++;
    searchImage();
});


// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });
// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });
// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });
// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });
// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });
// const accessKey = 'YGk7E_cDoynJ6MeAzylDRIX3XYeMZ-OXxJ_TwmMJVs4';

// const form = document.querySelector('.search-part');
// const searchPart = document.querySelector('.search-result')
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn')
// const btn2 = document.querySelector('#btn2')

// let keyword = 1;
// let page = 1;

// searchImage = async () => {
//     keyword = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1)
//     {
//         searchPart.innerHTML = "";
//     }

//     const results = data.results;

//     results.map((result) => {
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchPart.appendChild(imageLink);
//     });

//     btn2.style.display = "block";
// };

// btn.addEventListener('click', searchImage);

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// btn2.addEventListener('click', () => {
//     page++;
//     searchImage();
// });