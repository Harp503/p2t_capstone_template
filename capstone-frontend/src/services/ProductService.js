import axios from 'axios';

const baseUrl = 'https://harp503-capstone.onrender.com/';

export async function getProducts() {
    const { data } = await axios.get(`${baseUrl}products`);
    return data;
}

// This function retrieves a product by its ID and has been created for you, but you will need to import it in your components as needed.
export async function getProductById(id) {
    const { data } = await axios.get(`${baseUrl}products/${id}`);
    return data;
}