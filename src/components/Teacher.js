import React from 'react';

const TeacherItem = ({ teacher, onInputChange, onDelete }) => (
  <li key={teacher.id} className="list-group-item">
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Prénom"
          value={teacher.firstName}
          onChange={(e) => onInputChange(e.target.value, teacher.id, 'firstName')}
          disabled={!teacher.editable}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nom"
          value={teacher.lastName}
          onChange={(e) => onInputChange(e.target.value, teacher.id, 'lastName')}
          disabled={!teacher.editable}
        />
      </div>
      <div className="col-auto">
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(teacher.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  </li>
);

export default TeacherItem;