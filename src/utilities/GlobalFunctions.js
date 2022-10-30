export const getCelsiusFromKelvin = kelvin => parseInt(kelvin - 273.15);

export const getFahrenheitFromKelvin = kelvin =>
  parseInt((kelvin - 273.15) * 95 + 32);
