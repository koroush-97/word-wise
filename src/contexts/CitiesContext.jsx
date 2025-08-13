import { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log("fetch complete...");
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
}
