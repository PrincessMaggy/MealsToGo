import { mocks, mockImages } from "./mock";
import camelize from "camelize";



export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
}

export const getCommonStores = async (latLong) => {
  console.log(latLong, "latLong");
  RESTAURANT_API = process.env.EXPO_PUBLIC_REACT_APP_RESTAURANT_API;
  try {
    const searchParams = new URLSearchParams({
      query: "restaurant",
      ll: latLong,
      sort: "DISTANCE",
      limit: 10,
    });

    const results = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: RESTAURANT_API,
        },
      }
    );

    const data = await results.json();

    if (data?.error) {
      console.error("API error", data.error);
      return [];
    }

    const itemsWithImages = await Promise.all(
      data.results.map((item) => {
        const imageUrl =
          item.categories[0]?.icon?.prefix +
          "32" +
          item.categories[0]?.icon?.suffix;

        return {
          imageUrl,
          name: item.name,
          id: item.fsq_id,
          location: item.location.formatted_address,
          locality: item.location.locality,
          categories: item.categories.map((item) => item.name).join(", "),
        };
      })
    );
    console.log(itemsWithImages, "itemsWithImages");
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};