import React, { useState } from 'react';

const styles = {
  container: {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  addBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

const Perfil = () => {
  const [profile, setProfile] = useState({
    nome: 'João Silva',
    email: 'joao@example.com',
    telefone: '99999-9999',
  });

  const [novoDado, setNovoDado] = useState({ nome: '', email: '', telefone: '' });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleDelete = () => {
    setProfile({ nome: '', email: '', telefone: '' });
  };

  const handleAdd = () => {
    setProfile({ ...profile, ...novoDado });
    setNovoDado({ nome: '', email: '', telefone: '' });
  };

  return (
    <div style={styles.container}>
      <h2>PERFIL</h2>
      <div style={styles.profileBox}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={profile.nome}
          onChange={handleEdit}
          placeholder="Nome"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleEdit}
          placeholder="Email"
        />
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={profile.telefone}
          onChange={handleEdit}
          placeholder="Telefone"
        />
      </div>

      <button style={styles.deleteButton} onClick={handleDelete}>
        Excluir Dados
      </button>

      <h3>Alterar Dados</h3>
      <div style={styles.addBox}>
        <input
          type="text"
          name="nome"
          value={novoDado.nome}
          onChange={(e) => setNovoDado({ ...novoDado, nome: e.target.value })}
          placeholder="Novo Nome"
        />
        <input
          type="email"
          name="email"
          value={novoDado.email}
          onChange={(e) => setNovoDado({ ...novoDado, email: e.target.value })}
          placeholder="Novo Email"
        />
        <input
          type="text"
          name="telefone"
          value={novoDado.telefone}
          onChange={(e) => setNovoDado({ ...novoDado, telefone: e.target.value })}
          placeholder="Novo Telefone"
        />
        <button style={styles.addButton} onClick={handleAdd}>
          Alterar Dados
        </button>
      </div>
    </div>
  );
};

export default Perfil;
