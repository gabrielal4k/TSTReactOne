

export default function Fruit({name, price, emooji, soldout}) {

    return <>
        <li >
        {emooji} {name} - ${price} {soldout ? "(Sold Out)" : "" }
        </li>
    </>;
}