import { postData } from './apiUtils';


export const saveTeachers = async (teachers) => {
  const TEACHER_ENDPOINT = '/teachers';
  const editableTeachers = teachers.filter((teacher) => teacher.editable);
  try {
    const savedTeachers = await Promise.all(
      editableTeachers.map((teacher) => postData(TEACHER_ENDPOINT, teacher))
    );
    console.log('Teachers saved:', savedTeachers);
  } catch (error) {
    console.error('Failed to save teachers:', error);
    throw error;
  }
};
