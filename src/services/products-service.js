import eatableClient from "./eatable-client";

export async function createProduct(data) {
  return await eatableClient("/products", { method: "POST", body: data });
}

export async function removeProduct(id) {
  return await eatableClient("/products/" + id, { method: "DELETE" });
}

export async function getProduct(id) {
  return await eatableClient("/products/" + id, { method: "GET" });
}

export async function updateProduct(id, data) {
  return await eatableClient("/products/" + id, { method: "PATCH", body: data });
}

