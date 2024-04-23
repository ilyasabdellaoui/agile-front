import React from 'react';
import LayoutAdmin from '../components/LayoutAdmin';
import { useTeachers } from '../hooks/useTeachers';
import Teacher from '../components/Teacher';

export default function AdminPage() {
  const { teachers, loading, error, addNewTeacher, saveTeachersData, updateTeacher, removeTeacher } = useTeachers();

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
                <Teacher 
                  key={teacher.id}
                  teacher={teacher}
                  onInputChange={updateTeacher}
                  onDelete={removeTeacher}
                />
              ))}
            </ul>
            <div className="mt-3 d-flex justify-content-center">
              <button
                className="btn btn-secondary"
                style={{ marginRight: '10px' }}
                onClick={addNewTeacher}
              >
                + Ajouter une ligne
              </button>
              <button
                className="btn btn-primary"
                style={{ marginLeft: '10px' }}
                onClick={saveTeachersData}
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