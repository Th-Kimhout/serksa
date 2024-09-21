import { BASE_URL } from "../../api/base_url";
// get all product
// export async function getAllCourses(){
//     try{
//         // method fetch
//     const response=fetch(`${BASE_URL}courses`).then((res)=>res.json());
//     // console.log("response",response);
//     const data= await response;
//     // console.log("data",data.products);
//     return data?.products;
//     }catch(error){
//         console.log(error);
//     }
// }
export function getAllCourses() {
  const response = fetch(`${BASE_URL}courses`)
    .then((res) => res.json())
    .then((data) => console.log("data", data.courses));
  // console.log("Reaspone",response.course);
}
