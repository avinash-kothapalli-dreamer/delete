const accessToken = 'pk.eyJ1IjoiMTIwY3MwMDQ5IiwiYSI6ImNsOWZwZHR5NzU3eHAzb3BjNHg4cTQ2YXUifQ.INaz_y81glrIxAdx5-gsRA';
const mapMatchingAPI = 'https://api.mapbox.com/matching/v5/mapbox/driving/';

// Sample GPS coordinates
const coordinates = [
    // [-117.17282,32.71204],
    // [-117.17288,32.71225],
    // [-117.17293,32.71244],
    // [-117.17292,32.71256],
    // [-117.17298,32.712603],
    // [-117.17314,32.71259],
    // [-117.17334,32.71254]
   
    // [ 17.597657, 78.131767],

    // [ 17.598259, 78.131687]

 [78.12709,17.60237],
 [ 78.13202,17.59280]

];

// Construct the URL for the Map Matching API request
const constructMapMatchingURL = () => {
  const coordinatesString = coordinates.map(coord => `${coord[0]},${coord[1]}`).join(';');
  const url = `${mapMatchingAPI}${coordinatesString}?access_token=${accessToken}`;
  return url;
};

// Function to fetch data from the Map Matching API
const fetchMapMatchingData = async () => {
  const url = constructMapMatchingURL();
  console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Map Matching API Response:', data);
    // Handle the response data here
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function to fetch Map Matching API data
fetchMapMatchingData();
