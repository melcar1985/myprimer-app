import { addDoc, collection, getFirestore } from "firebase/firestore";



const SendOrder = () => {
    const order = {
        buyer: { name: "Melisa", phone: "111", email: "melisacarabajal9@gmail.com"},
        items:[{ name: "planta", price: 2820}],
        total: 2820
    }
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc (ordersCollection, order).then(snapshot => console.log(snapshot));
}

export default SendOrder;