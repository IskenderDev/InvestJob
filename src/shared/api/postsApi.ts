import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export const updatePost = async (id: string, data: number) => {
  await axios.put(`/api/posts/${id}`, data);
};
