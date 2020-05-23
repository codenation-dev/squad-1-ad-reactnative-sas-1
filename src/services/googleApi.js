const getUserCity = async (lat, long) => {
  const key = 'AIzaSyB_P5-lmD49l0dkyvmTpnym69vO7X2MqOA';
  await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`,
  )
    .then(res => res.json())
    .catch(err => console.log(err));
};

export default getUserCity;
