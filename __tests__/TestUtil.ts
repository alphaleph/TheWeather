import {BaseAction} from '../src/redux/Types';

export const defaultDispatch = (action: BaseAction) => {
  console.log(action);
};

export const defaultText = 'Hello World!';

export const currentWeatherData = {
  coord: {
    lon: -74.01,
    lat: 40.71,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 283.65,
    feels_like: 280.27,
    temp_min: 282.04,
    temp_max: 285.15,
    pressure: 1005,
    humidity: 40,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
  },
  clouds: {
    all: 90,
  },
  dt: 1585878139,
  sys: {
    type: 1,
    id: 4610,
    country: 'US',
    sunrise: 1585823817,
    sunset: 1585869695,
  },
  timezone: -14400,
  id: 5128581,
  name: 'New York',
  cod: 200,
};

export const fiveDayThreeHourForecastData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1585882800, //UTC Time of Forecast (but use dt_txt)
      main: {
        temp: 9.49,
        feels_like: 1.27,
        temp_min: 8.29,
        temp_max: 9.49,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 61,
        temp_kf: 1.2,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.44, //m/s
        deg: 328, //deg
      },
      //rain {3h: volume of rain of past 3 hrs, mm}
      //snow {3h: volume of snow of past 3 hrs, mm}
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-03 03:00:00', //Forecast time
    },
    {
      dt: 1585893600,
      main: {
        temp: 9.23,
        feels_like: 0.7,
        temp_min: 8.33,
        temp_max: 9.23,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1002,
        humidity: 64,
        temp_kf: 0.9,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 9.98,
        deg: 325,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-03 06:00:00',
    },
    {
      dt: 1585904400,
      main: {
        temp: 9.16,
        feels_like: 0.92,
        temp_min: 8.56,
        temp_max: 9.16,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1002,
        humidity: 71,
        temp_kf: 0.6,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.94,
        deg: 320,
      },
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-03 09:00:00',
    },
    {
      dt: 1585915200,
      main: {
        temp: 9.35,
        feels_like: 2.26,
        temp_min: 9.05,
        temp_max: 9.35,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1003,
        humidity: 75,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.57,
        deg: 334,
      },
      rain: {
        '3h': 1.22,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-03 12:00:00',
    },
    {
      dt: 1585926000,
      main: {
        temp: 9.29,
        feels_like: 2.68,
        temp_min: 9.29,
        temp_max: 9.29,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.14,
        deg: 346,
      },
      rain: {
        '3h': 0.92,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-03 15:00:00',
    },
    {
      dt: 1585936800,
      main: {
        temp: 10.1,
        feels_like: 3.94,
        temp_min: 10.1,
        temp_max: 10.1,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.57,
        deg: 354,
      },
      rain: {
        '3h': 1.78,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-03 18:00:00',
    },
    {
      dt: 1585947600,
      main: {
        temp: 10.49,
        feels_like: 3.84,
        temp_min: 10.49,
        temp_max: 10.49,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1007,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.2,
        deg: 1,
      },
      rain: {
        '3h': 0.22,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-03 21:00:00',
    },
    {
      dt: 1585958400,
      main: {
        temp: 10.15,
        feels_like: 4.16,
        temp_min: 10.15,
        temp_max: 10.15,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.34,
        deg: 5,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-04 00:00:00',
    },
    {
      dt: 1585969200,
      main: {
        temp: 9.87,
        feels_like: 4.22,
        temp_min: 9.87,
        temp_max: 9.87,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.71,
        deg: 16,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-04 03:00:00',
    },
    {
      dt: 1585980000,
      main: {
        temp: 9.18,
        feels_like: 3.77,
        temp_min: 9.18,
        temp_max: 9.18,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 6.12,
        deg: 20,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-04 06:00:00',
    },
    {
      dt: 1585990800,
      main: {
        temp: 8.38,
        feels_like: 3.5,
        temp_min: 8.38,
        temp_max: 8.38,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 5.3,
        deg: 6,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-04 09:00:00',
    },
    {
      dt: 1586001600,
      main: {
        temp: 8.09,
        feels_like: 2.61,
        temp_min: 8.09,
        temp_max: 8.09,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 5.92,
        deg: 18,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-04 12:00:00',
    },
    {
      dt: 1586012400,
      main: {
        temp: 10.67,
        feels_like: 6.51,
        temp_min: 10.67,
        temp_max: 10.67,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 4.1,
        deg: 36,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-04 15:00:00',
    },
    {
      dt: 1586023200,
      main: {
        temp: 11.73,
        feels_like: 9.13,
        temp_min: 11.73,
        temp_max: 11.73,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 1.96,
        deg: 111,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-04 18:00:00',
    },
    {
      dt: 1586034000,
      main: {
        temp: 10.18,
        feels_like: 5.97,
        temp_min: 10.18,
        temp_max: 10.18,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 4.28,
        deg: 134,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-04 21:00:00',
    },
    {
      dt: 1586044800,
      main: {
        temp: 8.81,
        feels_like: 4.98,
        temp_min: 8.81,
        temp_max: 8.81,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 3.81,
        deg: 157,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-05 00:00:00',
    },
    {
      dt: 1586055600,
      main: {
        temp: 7.82,
        feels_like: 3.96,
        temp_min: 7.82,
        temp_max: 7.82,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 3.74,
        deg: 160,
      },
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-05 03:00:00',
    },
    {
      dt: 1586066400,
      main: {
        temp: 7.38,
        feels_like: 3.93,
        temp_min: 7.38,
        temp_max: 7.38,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 3.09,
        deg: 172,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-05 06:00:00',
    },
    {
      dt: 1586077200,
      main: {
        temp: 7.63,
        feels_like: 4.07,
        temp_min: 7.63,
        temp_max: 7.63,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.31,
        deg: 219,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-05 09:00:00',
    },
    {
      dt: 1586088000,
      main: {
        temp: 8.16,
        feels_like: 5,
        temp_min: 8.16,
        temp_max: 8.16,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 2.88,
        deg: 214,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-05 12:00:00',
    },
    {
      dt: 1586098800,
      main: {
        temp: 11.31,
        feels_like: 9.53,
        temp_min: 11.31,
        temp_max: 11.31,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 1.05,
        deg: 212,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-05 15:00:00',
    },
    {
      dt: 1586109600,
      main: {
        temp: 12.6,
        feels_like: 9.82,
        temp_min: 12.6,
        temp_max: 12.6,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.51,
        deg: 170,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-05 18:00:00',
    },
    {
      dt: 1586120400,
      main: {
        temp: 13.31,
        feels_like: 10.63,
        temp_min: 13.31,
        temp_max: 13.31,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.65,
        deg: 196,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-05 21:00:00',
    },
    {
      dt: 1586131200,
      main: {
        temp: 12.98,
        feels_like: 10.43,
        temp_min: 12.98,
        temp_max: 12.98,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 2.57,
        deg: 209,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-06 00:00:00',
    },
    {
      dt: 1586142000,
      main: {
        temp: 11.93,
        feels_like: 8.97,
        temp_min: 11.93,
        temp_max: 11.93,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 3.12,
        deg: 290,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-06 03:00:00',
    },
    {
      dt: 1586152800,
      main: {
        temp: 10.52,
        feels_like: 6.26,
        temp_min: 10.52,
        temp_max: 10.52,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 4.2,
        deg: 328,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-06 06:00:00',
    },
    {
      dt: 1586163600,
      main: {
        temp: 8.73,
        feels_like: 3.95,
        temp_min: 8.73,
        temp_max: 8.73,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.19,
        deg: 330,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-06 09:00:00',
    },
    {
      dt: 1586174400,
      main: {
        temp: 8.6,
        feels_like: 5.22,
        temp_min: 8.6,
        temp_max: 8.6,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1020,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 2.33,
        deg: 347,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-06 12:00:00',
    },
    {
      dt: 1586185200,
      main: {
        temp: 11.46,
        feels_like: 9.15,
        temp_min: 11.46,
        temp_max: 11.46,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 0.83,
        deg: 289,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-06 15:00:00',
    },
    {
      dt: 1586196000,
      main: {
        temp: 13.92,
        feels_like: 10.97,
        temp_min: 13.92,
        temp_max: 13.92,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 1.35,
        deg: 204,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-06 18:00:00',
    },
    {
      dt: 1586206800,
      main: {
        temp: 13.62,
        feels_like: 9.17,
        temp_min: 13.62,
        temp_max: 13.62,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 3.43,
        deg: 171,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-06 21:00:00',
    },
    {
      dt: 1586217600,
      main: {
        temp: 12.23,
        feels_like: 7.14,
        temp_min: 12.23,
        temp_max: 12.23,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 4.64,
        deg: 182,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-07 00:00:00',
    },
    {
      dt: 1586228400,
      main: {
        temp: 10.96,
        feels_like: 7.68,
        temp_min: 10.96,
        temp_max: 10.96,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.49,
        deg: 182,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-07 03:00:00',
    },
    {
      dt: 1586239200,
      main: {
        temp: 10.26,
        feels_like: 7.71,
        temp_min: 10.26,
        temp_max: 10.26,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.69,
        deg: 164,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-07 06:00:00',
    },
    {
      dt: 1586250000,
      main: {
        temp: 9.9,
        feels_like: 7.68,
        temp_min: 9.9,
        temp_max: 9.9,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 1.42,
        deg: 152,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-07 09:00:00',
    },
    {
      dt: 1586260800,
      main: {
        temp: 9.7,
        feels_like: 8.17,
        temp_min: 9.7,
        temp_max: 9.7,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 0.78,
        deg: 171,
      },
      rain: {
        '3h': 0.5,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-07 12:00:00',
    },
    {
      dt: 1586271600,
      main: {
        temp: 12.05,
        feels_like: 9.97,
        temp_min: 12.05,
        temp_max: 12.05,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 1.63,
        deg: 134,
      },
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-07 15:00:00',
    },
    {
      dt: 1586282400,
      main: {
        temp: 12.03,
        feels_like: 8.97,
        temp_min: 12.03,
        temp_max: 12.03,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 3.15,
        deg: 124,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-07 18:00:00',
    },
    {
      dt: 1586293200,
      main: {
        temp: 12.08,
        feels_like: 8.38,
        temp_min: 12.08,
        temp_max: 12.08,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 4.28,
        deg: 142,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-04-07 21:00:00',
    },
    {
      dt: 1586304000,
      main: {
        temp: 10.62,
        feels_like: 7.26,
        temp_min: 10.62,
        temp_max: 10.62,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 3.91,
        deg: 137,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-04-08 00:00:00',
    },
  ],
  city: {
    id: 5128581,
    name: 'New York',
    coord: {
      lat: 40.7143,
      lon: -74.006,
    },
    country: 'US',
    timezone: -14400,
    sunrise: 1585823815,
    sunset: 1585869694,
  },
};
