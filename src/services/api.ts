import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/WebGoat/';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface Lesson {
  id: number;
  title: string;
  path: string;
  completed: boolean;
}

export interface Category {
  id: number;
  title: string;
  lessons: Lesson[];
}

export const getLessons = async (): Promise<Category[]> => {
  try {
    const response = await api.get('service/lessonmenu.mvc');
    return response.data;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error;
  }
};

export const getLessonContent = async (lessonId: string): Promise<any> => {
  try {
    const response = await api.get(`service/lessonoverviews.mvc?lesson=${lessonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lesson content:', error);
    throw error;
  }
};

export const submitAssignment = async (lessonId: string, assignmentId: string, data: any): Promise<any> => {
  try {
    const response = await api.post(`service/assignment.mvc?lesson=${lessonId}&assignment=${assignmentId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting assignment:', error);
    throw error;
  }
};

export const getUserProgress = async (): Promise<any> => {
  try {
    const response = await api.get('service/user.mvc');
    return response.data;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    throw error;
  }
};

export default api;
