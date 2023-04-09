import { useState } from "react";
import stylesForm from "./Form.module.css";

const Form = () => {
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    actriz: "",
    actor: "",
    tipoguion: "",
    guion: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sendIt, setSendIt] = useState(false);
  const handleChange = (event, property) => {
    setContact({ ...contact, [property]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const moreThanThree = contact.fullname.length > 2;
    const moreThanSix = contact.email.length > 5;
    const noSpaces = contact.trim();
    if ((!moreThanThree && !noSpaces) || !moreThanSix) {
      setError(true);
      if (!moreThanThree && !noSpaces) {
        setErrorMessage("Sin espacios al inicio y más de tres caracteres");
      } else {
        setErrorMessage("Más de seis caracteres");
      }

      return;
    }
    setSendIt(true);
    //Envío esto es lo último
    console.log("Data: ", contact);
  };

  return (
    <div className={stylesForm.container}>
      <h1 className="titulo">Contact</h1>
      <form className={stylesForm.formulario} onSubmit={handleSubmit}>
        <label>Full name:</label>
        <input
          type="text"
          name="fullname"
          className={stylesForm.campos}
          onChange={(event) => handleChange(event, "fullname")}
        />
        {error && errorMessage.includes("tres caracteres") && (
          <span className={stylesForm.error}>
            Por favor chequea que la información sea correcta: <br />
            {errorMessage}
          </span>
        )}
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          className={stylesForm.campos}
          onChange={(event) => handleChange(event, "email")}
        />
        {error && errorMessage.includes("seis caracteres") && (
          <span className={stylesForm.error}>
            Por favor chequea que la información sea correcta: <br />
            {errorMessage}
          </span>
        )}
        
        
        <button className={stylesForm.boton} type="submit">
          Send it
        </button>
      </form></div>
  )
}

export default Form