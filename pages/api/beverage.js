export default function handler(req, res) {
    res.status(200).json({ title: 'Beverages', list: beverage })
}

const beverage = [
    {
        id: 1,
        name: "Yakult Yogurt Drink",
        description: "Sweet yogurt drink.",
        kcal_l: 400,
        price_l: 3.99,
        spicy: false,
        vegan: false,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/beverage/lglmbi2sembq6azb7qzn'
    },
    {
        id: 2,
        name: "Green Tea",
        description: "Healthy, freshly brewed Japanese green tea.",
        kcal_l: 70,
        price_l: 3.99,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/beverage/kcppriy7nikyshpzxjmr'
    },
    {
        id: 3,
        name: "Coca-Cola",
        description: "Can.",
        kcal_l: 560,
        price_l: 1.99,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/beverage/ldj3vxfqhzqmerbznaaz'
    },
    {
        id: 4,
        name: "TsingTao Beer",
        description: "5% ABV, Chinese beer.",
        kcal_l: 480,
        price_l: 6.99,
        spicy: false,
        vegan: true,
        image: 'https://res.cloudinary.com/dmtjposo5/gab/beverage/nq4nuqcnmi0m56vgxiql'
    }
]