import { api } from './apiUtils';

export const getTeachers = async () => {
    try {
        const response = await api.get('/api/professor/');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const saveTeachers = async (teachers) => {
    try {
        const response = await api.post('/api/professor/', teachers);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteTeacher = async (id) => {
    try {
        const response = await api.delete(`/api/professor/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}