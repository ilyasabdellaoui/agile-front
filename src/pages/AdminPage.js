import React, { useState, useEffect } from 'react';
import LayoutAdmin from '../components/LayoutAdmin';
import { getTeachers, saveTeachers, deleteTeacher } from '../services/professorService';

export default function AdminPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const data = await getTeachers();
        setTeachers(data);
      } catch (err) {
        setError('Failed to fetch teachers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const addNewTeacherHandler = () => {
    const newTeacher = { id: Date.now(), firstName: '', lastName: '', editable: true };
    setTeachers([...teachers, newTeacher]);
  };

  const saveTeachersHandler = async () => {
    try {
      setLoading(true);
      await saveTeachers(teachers);
      const updatedTeachers = await getTeachers();
      setTeachers(updatedTeachers);
    } catch (err) {
      setError('Error saving teachers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e, id, field) => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === id ? { ...teacher, [field]: e.target.value } : teacher
    );
    setTeachers(updatedTeachers);
  };

  const deleteTeacherHandler = async (id) => {
    try {
      setLoading(true);
      await deleteTeacher(id);
      const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
      setTeachers(updatedTeachers);
    } catch (err) {
      setError('Error deleting teacher');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) 
    return (
      <LayoutAdmin>
        <p>Loading...</p>
      </LayoutAdmin>
    );
  if (error) 
    return (
      <LayoutAdmin>
        <p>Error: {error}</p>
      </LayoutAdmin>
    );

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
                <span>Action</span>
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
                    <div className="col-auto">
                      <button 
                        className="btn btn-danger"
                        onClick={() => deleteTeacherHandler(teacher.id)}
                      >
                        Supprimer
                      </button>
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