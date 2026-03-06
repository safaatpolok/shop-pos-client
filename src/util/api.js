// src/services/authService.js
import axios from "axios";

// Base URL for your backend
const API_BASE_URL = "https://shop-pos-server-production.up.railway.app";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      { email, password }, // request body
      {
        headers: {
          "Content-Type": "application/json"
        },
        // withCredentials: true // only if your backend sets cookies
      }
    );

    // The JWT token is usually in response.data (e.g., response.data.token)
    console.log("Login success:", response.data);

    // Store token for future requests (optional, localStorage example)
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};