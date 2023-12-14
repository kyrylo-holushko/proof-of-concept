import { appetizer } from "./appetizer";
import { beverage } from "./beverage";
import { dessert } from "./dessert";
import { main } from "./main";

export default function handler(req, res) {
    res.status(200).json({ promos: promoBuilder(promolist) });
}

const promolist = [['a',1,'20%'],['b',2,'5%'],['d',3,'15%'],['m',1,'10%']]; /* letters (first element): a is appetizer, b is beverage, d is dessert, m is main. 
                                                        numbers (second element) are the unique id of the item.
                                                        string percentages: discount for item */

function promoBuilder(promotions){
    var data = [];
    promotions.forEach(element => {
        switch(element[0]){
            case 'a':
                    let a = appetizer.find(item => item.id === element[1]);
                    data.push({ name: a.name, image: a.image, discount: element[2] });
                break;
            case 'b':
                    let b = beverage.find(item => item.id === element[1]);
                    data.push({ name: b.name, image: b.image, discount: element[2] });
                break;
            case 'd':
                    let d = dessert.find(item => item.id === element[1]);
                    data.push({ name: d.name, image: d.image, discount: element[2] });
                break;
            case 'm':
                    let m = main.find(item => item.id === element[1]);
                    data.push({ name: m.name, image: m.image, discount: element[2] });
                break;
        }
    });
    return data;
}


