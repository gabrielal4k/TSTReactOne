import Fruit from "./Fruit";

export default function Fruits(){

    // const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    const fruits = [
        {
            name:"Apple",
            price:10,
            emooji:"🍎",
            soldout:false
        },
        {
            name:"Banana",
            price:5,
            emooji:"🍌",
            soldout:true
        },
        {
            name:"Cherry",
            price:15,
            emooji:"🍒",
            soldout:false
        },
        {
            name:"Date",
            price:20,
            emooji:"🌴",
            soldout:true
        },
        {
            name:"Elderberry",
            price:25,
            emooji:"🍇",
            soldout:false
        }
    ];

    return (
        <div>
            <ul>
                {fruits.map( (fruit) => (

                <Fruit 
                    key={fruit.name} 
                    name={fruit.name} 
                    price={fruit.price} 
                    emooji={fruit.emooji}
                    soldout={fruit.soldout}
                />

                ))}
            </ul>

        </div>
    )
}