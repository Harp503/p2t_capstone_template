import axios from 'axios';
import { API_BASE_URL } from '.config';

export async function getProducts() {
    const { data } = await axios.get(`${API_BASE_URL}products`);
    return data;
}

// This function retrieves a product by its ID and has been created for you, but you will need to import it in your components as needed.
export async function getProductById(id) {
    const { data } = await axios.get(`${API_BASE_URL}products/${id}`);
    return data;
}