// useTeachers.js
import { useState, useEffect } from 'react';
import { getTeachers, saveTeachers, deleteTeacher } from '../services/professorService';

export const useTeachers = () => {
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

  const addNewTeacher = () => {
    const newTeacher = { id: Date.now(), firstName: '', lastName: '', editable: true };
    setTeachers([...teachers, newTeacher]);
  };

  const saveTeachersData = async () => {
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

  const updateTeacher = (id, field, value) => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === id ? { ...teacher, [field]: value } : teacher
    );
    setTeachers(updatedTeachers);
  };

  const removeTeacher = async (id) => {
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

  return { teachers, loading, error, addNewTeacher, saveTeachersData, updateTeacher, removeTeacher };
};