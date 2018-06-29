document.addEventListener("DOMContentLoaded", function(event) {
    var data =[
        {
            titleRed:"Berlin",
            titleWhite:"15-25 May",
            main:"TownHouse with amazing view and roof top terrace!",
            price:"£222",
            bg:"src/images/bgs/bg_1.png"
        },
        {
            titleRed:"Berlin",
            titleWhite:"15-25 May",
            main:"Bright and airy Mitte flat on park",
            price:"£86",
            bg:"src/images/bgs/bg_2.png"
        },
        {
            titleRed:"Berlin",
            titleWhite:"15-25 May",
            main:"Charmante Wohnung am Treptower Park",
            price:"£51",
            bg:"src/images/bgs/bg_3.png"
        },
        {
            titleRed:"Berlin",
            titleWhite:"15-25 May",
            main:"Designer apartment in the heart of Berlin",
            price:"£51",
            bg:"src/images/bgs/bg_4.png"
        }
    ];

    var titleRed, titleWhite, main, price, arrowLeft, arrowRight, sliderCounter, slidesNumber, bannerContent;
    sliderCounter = 0;
    slidesNumber = data.length - 1;

    arrowLeft = document.querySelector('.slider-arrow__left');
    arrowRight = document.querySelector('.slider-arrow__right');
    bannerContent = document.querySelector('.banner-content');

    createSlider();
    showdDarkBg();

    arrowLeft.addEventListener('click', function(){
        if (sliderCounter > 0){
            sliderCounter = sliderCounter - 1;
        } else {
            sliderCounter = slidesNumber;
        }

        document.querySelector('.wrapper').style.backgroundImage = "url(" + data[sliderCounter].bg + ")";

        destroySlider();
    });

    arrowRight.addEventListener('click', function(e){

        if (sliderCounter < slidesNumber){
            sliderCounter = sliderCounter + 1;
        } else {
            sliderCounter = 0
        }

        document.querySelector('.wrapper').style.backgroundImage = "url(" + data[sliderCounter].bg + ")";
        destroySlider();
    });

    function createSlider(animationRule){

        var sliderTemplate = `
            <div class="banner-title">
            <div class="banner-text banner-text__red">
    
            </div>
            <div class="banner-text banner-text__white ">
    
            </div>
            </div>
            <div class="banner-main">
            <div class="banner-text banner-text__white">
    
            </div>
            </div>
            <div class="banner-price">
            <div class="banner-text banner-text__white banner-text__big">
    
            </div>
            <div class="banner-text banner-text__white banner-text__regular">
            per night
        </div>
        </div>
        `;


        document.querySelector('.banner-content').innerHTML = sliderTemplate;

        titleRed = document.querySelector('.banner-title .banner-text__red');
        titleWhite = document.querySelector('.banner-title .banner-text__white');
        main = document.querySelector('.banner-main .banner-text__white');
        price = document.querySelector('.banner-price .banner-text__white');

        titleRed.innerHTML = data[sliderCounter].titleRed;
        titleWhite.innerHTML = data[sliderCounter].titleWhite;
        main.innerHTML = data[sliderCounter].main;
        price.innerHTML = data[sliderCounter].price;
    }

    function showdDarkBg(){
        setTimeout(function(){
            document.querySelector('.banner-bg').classList.add('activeDarkBg');
        }, 0);
    }

    function destroySlider(){
        bannerContent.classList.add('hide');
        setTimeout(function () {
            bannerContent.innerHTML = "";
            bannerContent.classList.remove('hide');
            createSlider();
        }, 1000);
    }

});
