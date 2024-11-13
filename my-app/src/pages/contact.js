import React, { useState } from 'react';
import './Contact.css';



function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [CPF, setCPF] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado por se cadastrar, ${name}!`);
  };

  return (
    <div>
      <h2>cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>telefone:</label>
          <input
            type="number"
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="number"
            onChange={(e) => setCPF(e.target.value)}
            required
          />
        </div>
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
}

export default Contact;
