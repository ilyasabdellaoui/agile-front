import { api } from './apiUtils';

export const getTeachers = async () => {
  try {
      const response = await api.get('/api/professor/');
      return response.data.map(teacher => ({
          ...teacher,
          editable: false
      }));
  } catch (error) {
      console.error('Failed to fetch teachers:', error);
      throw error;
  }
};

export const saveTeachers = async (teachers) => {
  try {
    const teachersToSend = teachers.filter(teacher => teacher.editable);

    for (const teacher of teachersToSend) {
      await api.post('/api/professor/', {
        firstName: teacher.firstName,
        lastName: teacher.lastName
      });
    }

    return true; 
  } catch (error) {
    console.error('Failed to save teachers:', error);
    throw error; 
  }
};

export const deleteTeacher = async (id) => {
    try {
        const response = await api.delete(`/api/professor/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}