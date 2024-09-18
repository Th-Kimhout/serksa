export async function getAllCourses() {
  try {
    const response = fetch(
      `https://api.freeapi.app/api/v1/public/youtube/channel`
    ).then((res) => res.json);
    const data = await response;
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}
