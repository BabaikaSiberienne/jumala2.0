// export const Tours = [
//     {
//       name: "Приключение за 20 минут 1",
//       link: "юю.",
//     },
//     {
//       name: "Челябинская область",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//     },
//     {
//       name: "Иваново",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//     },
//     {
//       name: "Камчатка",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//     },
//     {
//       name: "Холмогорский район",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//     },
//     {
//       name: "Байкал",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//     }
// ];
import lite_1 from '../images/lite_1.jpg'
import lite_2 from '../images/lite_2.jpg'
import lite_3 from '../images/lite_3.jpg'

import pn20min_1 from '../images/priklucheniye_na_20_minut_1.jpg'
import pn20min_2 from '../images/priklucheniye_na_20_minut_2.jpg'
import pn20min_3 from '../images/priklucheniye_na_20_minut_3.jpg'

import galpohib_1 from '../images/galopom_po_hibinam_1.jpg'
import galpohib_2 from '../images/galopom_po_hibinam_2.jpg'
import galpohib_3 from '../images/galopom_po_hibinam_3.jpg'

import ozn_1 from '../images/oznakomitelniy_1.jpg'
import ozn_2 from '../images/oznakomitelniy_2.jpg'
import ozn_3 from '../images/oznakomitelniy_3.jpg'


const cardsFirstPages = [
    {
        title: "Лайт",
        alt: "деревня, закат",
        link: `${lite_1}`,
        id: 'cardsLite'
    },
    {
        title: "Приключение на 20 минут",
        alt: "горы",
        link: `${pn20min_1}`,
        id: 'cards20minut'
    },
    {
        title: "Галопом по хибинам",
        alt: "горная река, закат",
        link: `${galpohib_1}`,
        id: 'cardsGalopom'
    },
    {
        title: "Ознакомительный",
        alt: "горы",
        link: `${ozn_1}`,
        id: 'cardsWelcome'
    }
]

const cardsLite = [

    {
        title: "Лайт",
        alt: "горная река днём",
        link: `${lite_2}`
    },
    {
        title: "Лайт",
        alt: "равнина в горах",
        link: `${lite_3}`
    }, 
    {
        title: "Лайт",
        alt: "равнина в горах",
        link: `${lite_1}`
    }
]

const cards20minut = [

    {
        title: "Приключение на 20 минут",
        alt: "равнина в горах",
        link: `${pn20min_2}`
    },
    {
        title: "Приключение на 20 минут",
        alt: "люди идут в гору",
        link: `${pn20min_3}`
    },
    {
        title: "Приключение на 20 минут",
        alt: "люди идут в гору",
        link: `${pn20min_1}`
    }
]

const cardsGalopom = [

    {
        title: "Галопом по хибинам",
        alt: "горы",
        link: `${galpohib_2}`
    },
    {
        title: "Галопом по хибинам",
        alt: "горная река в долине",
        link: `${galpohib_3}`
    },
    {
        title: "Галопом по хибинам",
        alt: "горная река в долине",
        link: `${galpohib_1}`
    }
]

const cardsWelcome = [


    {
        title: "Ознакомительный",
        alt: "палатка на равнине в горах",
        link: `${ozn_2}`
    },
    {
        title: "Ознакомительный",
        alt: "горная река",
        link: `${ozn_3}`
    },
    {
        title: "Ознакомительный",
        alt: "горная река",
        link: `${ozn_1}`
    }
]

export {cardsFirstPages, cards20minut, cardsGalopom, cardsWelcome, cardsLite}