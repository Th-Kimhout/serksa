import { BASE_URL } from "../api/base_url";
// get all product
export async function getAllCourses() {
  try{
    const response = fetch(`${BASE_URL}courses`).then((res) => res.json())
    const data =await response;
  return data?.content;
  }catch (error){
    console.log(error);
  }
}
// get single course
export async function getSingleCourses(id) {
  try{
    const response = fetch(`${BASE_URL}courses/${id}`).then((res) => res.json())
    const data =await response;
  return data?.content;
  }catch (error){
    console.log(error);
  }
}


