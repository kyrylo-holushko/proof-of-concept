export default function handler(req, res) {
    res.status(200).json({ data: appetizer })
}

const appetizer = [
    {
		id: 1,
		name: "Tom Yum Soup",
		description: "Thai inspired house soup.",
		kcal_s: 800,
		kcal_l: 1000,
		price_s: 9.99,
		price_l: 11.99,
		spicy: true,
		vegan: false,
		image: 'https://res.cloudinary.com/dmtjposo5/gab/appetizer/qs8rpupmnsav8fybedqs'
    },
    {
		id: 2,
		name: "Pork Bone Soup",
		description: "Korean inspired house soup.",
		kcal_s: 600,
		kcal_l: 800,
		price_s: 6.49,
		price_l: 8.49,
		spicy: false,
		vegan: false,
		image: 'https://res.cloudinary.com/dmtjposo5/gab/appetizer/urbza8dbfflrqy81jhtt'
    },
    {
		id: 3,
		name: "Chicken Ginseng Soup",
		description: "Canton inspired house soup.",
		kcal_s: 400,
		kcal_l: 500,
		price_s: 4.99,
		price_l: 5.99,
		spicy: false,
		vegan: false,
		image: 'https://res.cloudinary.com/dmtjposo5/gab/appetizer/puwab1nnpsxlmkrhvfzp'
    },
    {
		id: 4,
		name: "Veggie Fresh Rolls",
		description: "Purple lettuce, green onion, carrot, and vermicelli wrapped in rice paper.",
		kcal_s: 560,
		kcal_l: 840,
		price_s: 5.95,
		price_l: 8.95,
		spicy: false,
		vegan: true,
		image: 'https://res.cloudinary.com/dmtjposo5/gab/appetizer/jz9bz8o4dreqxqqhhnr7'
    }
]