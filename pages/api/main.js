export default function handler(req, res) {
    res.status(200).json({ title: 'Mains', list: main })
}

export const main = [
    {
        id: 1,
        name: "Steamed Fish",
        description: "Steamed talipa with soy sauce.",
        kcal_l: 650,
        price_l: 16.99,
        spicy: false,
        vegan: false,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/main/be5xztuzz836pit3xz63',
        link: 'https://square.link/u/teyX1Lof?src=embed'
    },
    {
        id: 2,
        name: "General Tao Chicken",
        description: "Chicken marinated in sweet, sour, and spicy sauce.",
        kcal_l: 880,
        price_l: 14.45,
        spicy: true,
        vegan: false,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/main/xiqdzedfefrvcmakfp6u',
        link: 'https://square.link/u/kfp5bz3i?src=embed'
    },
    {
        id: 3,
        name: "Yeung Chow Fried Rice",
        description: "Fried rice with green onion, char siew, and shrimp.",
        kcal_l: 1300,
        price_l: 18.99,
        spicy: false,
        vegan: false,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/main/o3pbdsicgjfhh1dtxcdf',
        link: 'https://square.link/u/3m7VezBe?src=embed'
    },
    {
        id: 4,
        name: "Stir Fried Beef Noodles",
        description: "Purple lettuce, green onions, carrots, and vermicelli wrapped in rice paper.",
        kcal_l: 1600,
        price_l: 18.99,
        spicy: false,
        vegan: false,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/main/wnzobko3smt0m3b5u4ce',
        link: 'https://square.link/u/7lU42qMY?src=embed'
    }
]