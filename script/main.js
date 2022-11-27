
const body = document.body;

const cardwrapper = document.createElement('div');
body.appendChild(cardwrapper);
cardwrapper.classList.add('card__wrapper');


    const twittercard = document.createElement('div');
    twittercard.classList.add('card');
    cardwrapper.appendChild(twittercard);

    twittercard.innerHTML = `
        <img class="card__image" src="./img/twitter.png" alt="Twitter Icon">
        <div class="card__body">
            <h1 class="card__title">Twitter</h1>
            <p class="card__description">Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. <br> Magni, dignissimos nulla rerum minus <br> perferendis quia est excepturi id earum</p>
            <a href="#" class="card__button">READ MORE</a>
        </div>
    `;

    const instacard = document.createElement('div');
    instacard.classList.add('card');
    cardwrapper.appendChild(instacard);

    instacard.innerHTML = `
        <img class="card__image" src="./img/instagram.png" alt="Instragram Icon">
        <div class="card__body">
            <h1 class="card__title">Instagram</h1>
            <p class="card__description">Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. <br> Magni, dignissimos nulla rerum minus <br> perferendis quia est excepturi id earum</p>
            <a href="#" class="card__button">READ MORE</a>
        </div>
    `;

    const youtubecard = document.createElement('div');
    youtubecard.classList.add('card');
    cardwrapper.appendChild(youtubecard);

    youtubecard.innerHTML = `
        <img class="card__image" src="./img/youtube.png" alt="Instragram Icon">
        <div class="card__body">
            <h1 class="card__title">Youtube</h1>
            <p class="card__description">Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. <br> Magni, dignissimos nulla rerum minus <br> perferendis quia est excepturi id earum</p>
            <a href="#" class="card__button">READ MORE</a>
        </div>
    `;