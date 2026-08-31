import API_BASE_URL from "./api";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};