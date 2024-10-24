import axios from "axios";

const client = axios.create({
  baseURL: "https://671a0fa8acf9aa94f6a8f077.mockapi.io/api/shop",
});

export async function getData() {
  const { data } = await client("/products");
  return data;
}
export async function getCategoryData() {
  const { data } = await client("/categories");
  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await client(`/products/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "post/",
    url: "/login",
    data: {
      username,
      password,
    },
  });

  return data;
}
