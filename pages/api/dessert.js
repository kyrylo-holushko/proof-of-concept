export default function handler(req, res) {
    res.status(200).json({ title: 'Desserts', list: dessert })
}

export const dessert = [
    {
        id: 1,
        name: "Mochi",
        description: "Mochi rice balls filled with peanut sauce.",
        kcal_l: 430,
        price_l: 4.8,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/dessert/jlusmortt9bltxktrzxw'
    },
    {
        id: 2,
        name: "Red Bean Porridge",
        description: "Porridge that have been slow-cooked for 4 hours.",
        kcal_l: 120,
        price_l: 6.99,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/dessert/i4tgmivq19bt1seo5dun'
    },
    {
        id: 3,
        name: "Sesame Balls",
        description: "Fried sesame balls with peanuts coating.",
        kcal_l: 1300,
        price_l: 7.35,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/dessert/y2y9ldldmbm9cydxrubs'
    }
]