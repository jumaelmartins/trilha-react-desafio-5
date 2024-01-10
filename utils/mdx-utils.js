import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts?select=*');
  return data;
};

export const getPostBySlug = async (id) => {
  let { data } = await api.get("/posts?id=eq."+ id + "&select=*");
  return data;
};
