import React, { useState } from 'react';
import LayoutAdmin from '../components/LayoutAdmin';
import { saveTeachers } from '../services/professorService';

export default function AdminPage() {
  const [teachers, setTeachers] = useState([
    { id: 1, firstName: 'OUAMMOU', lastName: 'Naoufal', editable: false },
  ]);

  const addNewTeacherHandler = () => {
    const newTeacher = { id: Date.now(), firstName: '', lastName: '', editable: true };
    setTeachers([...teachers, newTeacher]);
  };

  const saveTeachersHandler = async () => {
    try {
      await saveTeachers(teachers);
    } catch (error) {
      console.error('Error saving teachers:', error);
    }
  };

  const handleInputChange = (e, id, field) => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === id ? { ...teacher, [field]: e.target.value } : teacher
    );
    setTeachers(updatedTeachers);
  };

  return (
    <LayoutAdmin>
      <h1 className="text-center">Enseignants</h1>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <span>Prénom</span>
                <span>Nom</span>
              </li>
              {teachers.map((teacher) => (
                <li key={teacher.id} className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Prénom"
                        value={teacher.firstName}
                        onChange={(e) => handleInputChange(e, teacher.id, 'firstName')}
                        disabled={!teacher.editable}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nom"
                        value={teacher.lastName}
                        onChange={(e) => handleInputChange(e, teacher.id, 'lastName')}
                        disabled={!teacher.editable}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 d-flex justify-content-center">
              <button 
                className="btn btn-secondary" 
                style={{ marginRight: '10px' }} 
                onClick={addNewTeacherHandler}
              >
                + Ajouter une ligne
              </button>
              <button 
                className="btn btn-primary" 
                style={{ marginLeft: '10px' }} 
                onClick={saveTeachersHandler}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}