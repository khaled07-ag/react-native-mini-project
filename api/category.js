import instance from './index';

 const getAllCategories = async () => {
   try{
    const response = await instance.get('/mini-project/api/categories/')
    return response.data
    } catch (error) {
        console.log(error)
   } 
};
const getCategoryById = async (id) => {
    try{
        const response = await instance.get(`/mini-project/api/categories/${id}/`)
        return response.data
    } catch (error) {
        console.log(error)
   } 
};

 export {
    getAllCategories,
    getCategoryById
 };
