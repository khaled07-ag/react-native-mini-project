import instance from "./index";

const getAllItems = async () => {
  try {
    const response = await instance.get("/mini-project/api/items");
    

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getItemById = async (id) => {
  try {
    const response = await instance.get(`/mini-project/api/items/${id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createItem = async (categoryID, productInfo) => {
  try {
    const formData = new FormData();
    for (key in productInfo) {
      if (key != "image") formData.append(key, productInfo[key]);
    }

    formData.append("image", {
      name: "image.jpg",
      type: "image/jpeg",
      uri: productInfo.image,
    });

    const { data } = await instance.post(
      `/mini-project/api/items/${categoryID}`,
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export {
  getAllItems,
  getItemById,
  createItem
};
