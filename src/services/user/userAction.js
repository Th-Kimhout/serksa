// api/userAction.js

export const fetchCourseCard = async (courseId, accessToken) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/courses/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching course');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error; 
  }
};

export const checkIfWatchLater = async (userId, courseId, accessToken) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/${userId}/favorites/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Error checking Watch Later status');
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking Watch Later status:", error);
    throw error; 
  }
};

export const addToWatchLater = async (userId, courseId, accessToken) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/${userId}/favorites/${courseId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Error adding course to Watch Later');
    }
  } catch (error) {
    console.error("Error adding course to Watch Later:", error);
    throw error; 
  }
};

export const removeFromWatchLater = async (userId, courseId, accessToken) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/${userId}/favorites/${courseId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Error removing course from Watch Later');
    }
  } catch (error) {
    console.error("Error removing course from Watch Later:", error);
    throw error; 
  }
};
