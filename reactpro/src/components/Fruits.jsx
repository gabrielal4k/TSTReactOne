import Fruit from "./Fruit";

export default function Fruits(){

    // const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    const fruits = [
        {
            name:"Apple",
            price:10,
            emooji:"🍎"
        },
        {
            name:"Banana",
            price:5,
            emooji:"🍌"
        },
        {
            name:"Cherry",
            price:15,
            emooji:"🍒"
        },
        {
            name:"Date",
            price:20,
            emooji:"🌴"
        },
        {
            name:"Elderberry",
            price:25,
            emooji:"🍇"
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
                />

                ))}
            </ul>

        </div>
    )
}