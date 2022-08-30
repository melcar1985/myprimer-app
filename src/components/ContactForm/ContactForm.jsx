import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {

    const [form, setForm] = useState({

    name: "",
    email: "",
    message: ""

   });
  
   const [id, setId] = useState();

   const changeHandler = (ev) => {

     const {value, name} = ev.target;
     setForm({...form, [name] : value});
   
    }

   const submitHandler = (ev) => {
     ev.preventDefault();
    

     const db = getFirestore();
     const contactFormCollection = collection(db, "contactform");
     addDoc(contactFormCollection, form).then(snapshot => setId(snapshot.id));
}

    return (
        
        
        
     <div className='contacto'>
          <h2 className="h2">Formulario de contacto</h2>
        {( typeof id !== "undefined") ?
        
        <div className="mensaje-enviado">Mensaje enviado con exito! Pronto nos contactaremos  {form.name} </div> :
        <form onSubmit={submitHandler}>
            <div className="card card-body">
                <label htmlFor="name">Nombre</label>
                <input name="name" id="name" value={form.name} onChange={changeHandler}/>
            </div>
            <div className="card card-body">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={changeHandler}/>
            </div>
            <div className="card card-body">
                <label htmlFor="phone">Teléfono</label>
                <input type="email" name="email" id="email" value={form.email} onChange={changeHandler}/>
            </div>
            <div className="card card-body">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" value={form.message} onChange={changeHandler}></textarea>
            </div>
            <button className='btn-enviar'  >Enviar</button>
        </form>
        }
    </div>
    );
};
export default ContactForm;