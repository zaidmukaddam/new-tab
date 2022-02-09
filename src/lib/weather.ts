import type { Weather } from "../types/Weather";
const API_URL = "https://weather-api-production.zaidaltafmukaddam.workers.dev";

export async function getWeather(
  location: string,
  unit: "metric" | "imperial",
): Promise<Weather | null> {
  const res = await fetch(`${API_URL}?query=${location}&unit=${unit}`, { credentials: "omit" });
  const json = await res.json();

  if (json.data.cod === "404" || json.data.cod === 404) {
    return null;
  }

  return json.data as Weather;
}
