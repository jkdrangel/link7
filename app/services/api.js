const BASE_API = 'https://5dc05c0f95f4b90014ddc651.mockapi.io/elo7/api/1/products'

const getProductsList = () => fetch(BASE_API).then((response) => response.json())

const searchProducts = (query) => fetch(`${BASE_API}?q=${query}`).then((response) => response.json())

export { getProductsList, searchProducts }
