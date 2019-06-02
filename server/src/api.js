export const baseURI = '/api';

export function register(app) {
  app.get(`${baseURI}/expenses-list`, lastTransactions);
}

function lastTransactions(req, res) {
  try {
    // fake delay to emulate long upload
    setTimeout(() => {
      res.send({
        success: true,
        data: data
      });
    }, 1000);
  } catch (error) {
    sendApiError(res, error);
  }
}

function sendApiError(res, error) {
  console.log(`Error: `, error);
  res.status(500);
  res.send({
    success: false,
    errors: [{ message: error.error ? error.error.message : error.message }]
  });
}

const data = [
  {
    "id": 1,
    "category": "Health",
    "description": "Cheese",
    "transactionTime": "2018-07-04T00:12:14.716Z",
    "amount": "396.82",
    "currency": "€"
  },
  {
    "id": 2,
    "category": "Health",
    "description": "Bacon",
    "transactionTime": "2017-08-27T18:08:16.533Z",
    "amount": "469.16",
    "currency": "€"
  },
  {
    "id": 3,
    "category": "Movies",
    "description": "Tuna",
    "transactionTime": "2017-09-06T02:25:01.138Z",
    "amount": "199.31",
    "currency": "€"
  },
  {
    "id": 4,
    "category": "Health",
    "description": "Car",
    "transactionTime": "2017-10-11T14:18:46.939Z",
    "amount": "764.35",
    "currency": "€"
  },
  {
    "id": 5,
    "category": "Sports",
    "description": "Fish",
    "transactionTime": "2017-09-14T06:24:39.809Z",
    "amount": "849.63",
    "currency": "€"
  },
  {
    "id": 6,
    "category": "Sports",
    "description": "Tuna",
    "transactionTime": "2018-03-16T03:56:17.294Z",
    "amount": "112.12",
    "currency": "€"
  },
  {
    "id": 7,
    "category": "Movies",
    "description": "Bike",
    "transactionTime": "2017-10-11T03:28:03.577Z",
    "amount": "426.60",
    "currency": "€"
  },
  {
    "id": 8,
    "category": "Sports",
    "description": "Tuna",
    "transactionTime": "2017-09-24T22:12:29.461Z",
    "amount": "729.08",
    "currency": "€"
  },
  {
    "id": 9,
    "category": "Sports",
    "description": "Mouse",
    "transactionTime": "2018-05-16T23:47:05.946Z",
    "amount": "738.29",
    "currency": "€"
  },
  {
    "id": 10,
    "category": "Sports",
    "description": "Salad",
    "transactionTime": "2017-12-02T05:57:21.755Z",
    "amount": "483.28",
    "currency": "€"
  },
  {
    "id": 11,
    "category": "Sports",
    "description": "Bacon",
    "transactionTime": "2018-07-03T15:35:49.843Z",
    "amount": "580.14",
    "currency": "€"
  },
  {
    "id": 12,
    "category": "Health",
    "description": "Tuna",
    "transactionTime": "2017-09-14T00:54:13.156Z",
    "amount": "587.37",
    "currency": "€"
  },
  {
    "id": 13,
    "category": "Movies",
    "description": "Keyboard",
    "transactionTime": "2017-11-20T11:50:16.990Z",
    "amount": "566.21",
    "currency": "€"
  },
  {
    "id": 14,
    "category": "Kids",
    "description": "Ball",
    "transactionTime": "2017-11-25T20:55:50.194Z",
    "amount": "584.61",
    "currency": "€"
  },
  {
    "id": 15,
    "category": "Sports",
    "description": "Sausages",
    "transactionTime": "2018-01-15T17:29:26.335Z",
    "amount": "720.72",
    "currency": "€"
  },
  {
    "id": 16,
    "category": "Sports",
    "description": "Ball",
    "transactionTime": "2018-07-15T04:26:25.709Z",
    "amount": "659.67",
    "currency": "€"
  },
  {
    "id": 17,
    "category": "Health",
    "description": "Chips",
    "transactionTime": "2018-05-01T17:15:45.031Z",
    "amount": "801.79",
    "currency": "€"
  },
  {
    "id": 18,
    "category": "Sports",
    "description": "Table",
    "transactionTime": "2018-08-02T00:48:31.298Z",
    "amount": "525.81",
    "currency": "€"
  },
  {
    "id": 19,
    "category": "Movies",
    "description": "Bike",
    "transactionTime": "2018-05-11T05:18:36.931Z",
    "amount": "908.03",
    "currency": "€"
  },
  {
    "id": 20,
    "category": "Movies",
    "description": "Mouse",
    "transactionTime": "2018-07-31T00:13:45.803Z",
    "amount": "803.19",
    "currency": "€"
  },
  {
    "id": 21,
    "category": "Grocery",
    "description": "Bacon",
    "transactionTime": "2017-09-20T14:29:54.951Z",
    "amount": "709.28",
    "currency": "€"
  },
  {
    "id": 22,
    "category": "Kids",
    "description": "Chair",
    "transactionTime": "2017-12-17T21:50:26.378Z",
    "amount": "729.73",
    "currency": "€"
  },
  {
    "id": 23,
    "category": "Movies",
    "description": "Car",
    "transactionTime": "2018-07-06T08:03:22.213Z",
    "amount": "652.12",
    "currency": "€"
  },
  {
    "id": 24,
    "category": "Movies",
    "description": "Hat",
    "transactionTime": "2017-12-07T13:15:39.349Z",
    "amount": "367.48",
    "currency": "€"
  },
  {
    "id": 25,
    "category": "Kids",
    "description": "Ball",
    "transactionTime": "2018-02-05T08:37:14.756Z",
    "amount": "561.68",
    "currency": "€"
  },
  {
    "id": 26,
    "category": "Grocery",
    "description": "Table",
    "transactionTime": "2017-08-10T17:14:19.857Z",
    "amount": "878.80",
    "currency": "€"
  },
  {
    "id": 27,
    "category": "Sports",
    "description": "Hat",
    "transactionTime": "2017-10-21T02:23:44.117Z",
    "amount": "721.63",
    "currency": "€"
  },
  {
    "id": 28,
    "category": "Health",
    "description": "Shirt",
    "transactionTime": "2018-04-10T06:11:05.994Z",
    "amount": "781.50",
    "currency": "€"
  },
  {
    "id": 29,
    "category": "Kids",
    "description": "Tuna",
    "transactionTime": "2017-12-06T22:53:10.429Z",
    "amount": "966.40",
    "currency": "€"
  },
  {
    "id": 30,
    "category": "Health",
    "description": "Computer",
    "transactionTime": "2017-08-18T01:01:30.247Z",
    "amount": "707.09",
    "currency": "€"
  },
  {
    "id": 31,
    "category": "Movies",
    "description": "Keyboard",
    "transactionTime": "2018-03-24T00:16:48.351Z",
    "amount": "97.32",
    "currency": "€"
  },
  {
    "id": 32,
    "category": "Health",
    "description": "Fish",
    "transactionTime": "2017-11-06T00:24:41.486Z",
    "amount": "910.47",
    "currency": "€"
  },
  {
    "id": 33,
    "category": "Sports",
    "description": "Shoes",
    "transactionTime": "2018-05-08T12:23:20.871Z",
    "amount": "902.27",
    "currency": "€"
  },
  {
    "id": 34,
    "category": "Health",
    "description": "Chicken",
    "transactionTime": "2018-06-23T13:55:13.341Z",
    "amount": "393.77",
    "currency": "€"
  },
  {
    "id": 35,
    "category": "Health",
    "description": "Bacon",
    "transactionTime": "2017-08-30T00:23:45.323Z",
    "amount": "898.21",
    "currency": "€"
  },
  {
    "id": 36,
    "category": "Health",
    "description": "Mouse",
    "transactionTime": "2018-07-02T05:25:06.723Z",
    "amount": "935.30",
    "currency": "€"
  },
  {
    "id": 37,
    "category": "Grocery",
    "description": "Shoes",
    "transactionTime": "2018-06-24T19:05:31.477Z",
    "amount": "767.06",
    "currency": "€"
  },
  {
    "id": 38,
    "category": "Grocery",
    "description": "Chair",
    "transactionTime": "2017-12-29T10:21:10.901Z",
    "amount": "297.57",
    "currency": "€"
  },
  {
    "id": 39,
    "category": "Health",
    "description": "Shirt",
    "transactionTime": "2018-07-29T16:11:14.875Z",
    "amount": "821.83",
    "currency": "€"
  },
  {
    "id": 40,
    "category": "Movies",
    "description": "Fish",
    "transactionTime": "2017-08-22T06:22:53.000Z",
    "amount": "337.46",
    "currency": "€"
  },
  {
    "id": 41,
    "category": "Kids",
    "description": "Salad",
    "transactionTime": "2018-06-18T07:01:07.501Z",
    "amount": "153.79",
    "currency": "€"
  },
  {
    "id": 42,
    "category": "Sports",
    "description": "Ball",
    "transactionTime": "2018-02-14T07:20:21.959Z",
    "amount": "753.78",
    "currency": "€"
  },
  {
    "id": 43,
    "category": "Health",
    "description": "Chair",
    "transactionTime": "2017-11-15T05:42:36.273Z",
    "amount": "366.81",
    "currency": "€"
  },
  {
    "id": 44,
    "category": "Kids",
    "description": "Shoes",
    "transactionTime": "2018-01-27T01:54:32.898Z",
    "amount": "883.25",
    "currency": "€"
  },
  {
    "id": 45,
    "category": "Grocery",
    "description": "Pizza",
    "transactionTime": "2018-07-24T08:48:10.143Z",
    "amount": "792.47",
    "currency": "€"
  },
  {
    "id": 46,
    "category": "Kids",
    "description": "Bacon",
    "transactionTime": "2018-03-02T06:45:55.751Z",
    "amount": "910.64",
    "currency": "€"
  },
  {
    "id": 47,
    "category": "Sports",
    "description": "Mouse",
    "transactionTime": "2018-01-01T13:56:13.282Z",
    "amount": "526.63",
    "currency": "€"
  },
  {
    "id": 48,
    "category": "Health",
    "description": "Salad",
    "transactionTime": "2018-04-18T08:38:15.095Z",
    "amount": "167.00",
    "currency": "€"
  },
  {
    "id": 49,
    "category": "Grocery",
    "description": "Cheese",
    "transactionTime": "2018-04-13T23:09:47.035Z",
    "amount": "776.89",
    "currency": "€"
  },
  {
    "id": 50,
    "category": "Grocery",
    "description": "Keyboard",
    "transactionTime": "2017-12-23T11:35:28.395Z",
    "amount": "308.20",
    "currency": "€"
  },
  {
    "id": 51,
    "category": "Movies",
    "description": "Soap",
    "transactionTime": "2018-07-06T22:13:28.141Z",
    "amount": "137.39",
    "currency": "€"
  },
  {
    "id": 52,
    "category": "Movies",
    "description": "Table",
    "transactionTime": "2018-07-03T04:00:43.993Z",
    "amount": "936.01",
    "currency": "€"
  },
  {
    "id": 53,
    "category": "Sports",
    "description": "Chips",
    "transactionTime": "2017-10-07T18:57:27.763Z",
    "amount": "825.97",
    "currency": "€"
  },
  {
    "id": 54,
    "category": "Kids",
    "description": "Ball",
    "transactionTime": "2018-06-23T19:20:38.231Z",
    "amount": "419.56",
    "currency": "€"
  },
  {
    "id": 55,
    "category": "Health",
    "description": "Mouse",
    "transactionTime": "2017-11-02T06:26:49.420Z",
    "amount": "473.26",
    "currency": "€"
  },
  {
    "id": 56,
    "category": "Movies",
    "description": "Tuna",
    "transactionTime": "2018-06-15T15:48:19.980Z",
    "amount": "621.25",
    "currency": "€"
  },
  {
    "id": 57,
    "category": "Health",
    "description": "Bacon",
    "transactionTime": "2017-12-04T08:44:34.169Z",
    "amount": "369.50",
    "currency": "€"
  },
  {
    "id": 58,
    "category": "Kids",
    "description": "Chips",
    "transactionTime": "2018-05-15T05:43:15.483Z",
    "amount": "885.42",
    "currency": "€"
  },
  {
    "id": 59,
    "category": "Grocery",
    "description": "Soap",
    "transactionTime": "2018-05-10T19:30:03.964Z",
    "amount": "396.84",
    "currency": "€"
  },
  {
    "id": 60,
    "category": "Movies",
    "description": "Shirt",
    "transactionTime": "2017-10-12T14:38:52.643Z",
    "amount": "101.58",
    "currency": "€"
  },
  {
    "id": 61,
    "category": "Kids",
    "description": "Car",
    "transactionTime": "2018-05-02T21:09:59.326Z",
    "amount": "503.62",
    "currency": "€"
  },
  {
    "id": 62,
    "category": "Kids",
    "description": "Hat",
    "transactionTime": "2017-09-16T14:13:31.119Z",
    "amount": "965.16",
    "currency": "€"
  },
  {
    "id": 63,
    "category": "Kids",
    "description": "Cheese",
    "transactionTime": "2018-03-13T03:46:20.090Z",
    "amount": "850.31",
    "currency": "€"
  },
  {
    "id": 64,
    "category": "Grocery",
    "description": "Cheese",
    "transactionTime": "2017-11-15T03:37:23.534Z",
    "amount": "268.82",
    "currency": "€"
  },
  {
    "id": 65,
    "category": "Kids",
    "description": "Shoes",
    "transactionTime": "2018-02-09T04:01:42.659Z",
    "amount": "588.50",
    "currency": "€"
  },
  {
    "id": 66,
    "category": "Kids",
    "description": "Pizza",
    "transactionTime": "2018-04-30T03:48:38.703Z",
    "amount": "583.18",
    "currency": "€"
  },
  {
    "id": 67,
    "category": "Health",
    "description": "Soap",
    "transactionTime": "2018-05-03T15:28:42.337Z",
    "amount": "22.17",
    "currency": "€"
  },
  {
    "id": 68,
    "category": "Health",
    "description": "Chair",
    "transactionTime": "2018-05-27T16:01:13.072Z",
    "amount": "707.78",
    "currency": "€"
  },
  {
    "id": 69,
    "category": "Health",
    "description": "Bike",
    "transactionTime": "2017-11-17T13:59:08.401Z",
    "amount": "641.83",
    "currency": "€"
  },
  {
    "id": 70,
    "category": "Health",
    "description": "Shoes",
    "transactionTime": "2018-05-17T22:45:04.795Z",
    "amount": "542.16",
    "currency": "€"
  },
  {
    "id": 71,
    "category": "Health",
    "description": "Hat",
    "transactionTime": "2018-03-24T18:31:55.102Z",
    "amount": "209.17",
    "currency": "€"
  },
  {
    "id": 72,
    "category": "Sports",
    "description": "Gloves",
    "transactionTime": "2017-10-16T02:02:41.136Z",
    "amount": "694.49",
    "currency": "€"
  },
  {
    "id": 73,
    "category": "Sports",
    "description": "Salad",
    "transactionTime": "2017-09-02T14:17:25.499Z",
    "amount": "296.21",
    "currency": "€"
  },
  {
    "id": 74,
    "category": "Health",
    "description": "Sausages",
    "transactionTime": "2017-09-06T19:02:21.068Z",
    "amount": "176.58",
    "currency": "€"
  },
  {
    "id": 75,
    "category": "Kids",
    "description": "Mouse",
    "transactionTime": "2018-01-01T22:04:35.347Z",
    "amount": "211.26",
    "currency": "€"
  },
  {
    "id": 76,
    "category": "Kids",
    "description": "Shirt",
    "transactionTime": "2017-10-01T11:15:45.013Z",
    "amount": "988.38",
    "currency": "€"
  },
  {
    "id": 77,
    "category": "Kids",
    "description": "Mouse",
    "transactionTime": "2018-02-13T06:47:00.279Z",
    "amount": "980.89",
    "currency": "€"
  },
  {
    "id": 78,
    "category": "Grocery",
    "description": "Keyboard",
    "transactionTime": "2018-05-25T19:24:53.354Z",
    "amount": "555.75",
    "currency": "€"
  },
  {
    "id": 79,
    "category": "Sports",
    "description": "Sausages",
    "transactionTime": "2017-10-06T14:07:24.188Z",
    "amount": "677.49",
    "currency": "€"
  },
  {
    "id": 80,
    "category": "Health",
    "description": "Chips",
    "transactionTime": "2018-02-04T02:25:53.314Z",
    "amount": "190.08",
    "currency": "€"
  },
  {
    "id": 81,
    "category": "Sports",
    "description": "Bacon",
    "transactionTime": "2018-01-20T19:10:59.348Z",
    "amount": "634.71",
    "currency": "€"
  },
  {
    "id": 82,
    "category": "Kids",
    "description": "Ball",
    "transactionTime": "2017-08-23T01:11:55.413Z",
    "amount": "608.03",
    "currency": "€"
  },
  {
    "id": 83,
    "category": "Movies",
    "description": "Towels",
    "transactionTime": "2017-08-09T01:06:37.604Z",
    "amount": "18.45",
    "currency": "€"
  },
  {
    "id": 84,
    "category": "Health",
    "description": "Table",
    "transactionTime": "2017-10-10T23:27:07.116Z",
    "amount": "654.41",
    "currency": "€"
  },
  {
    "id": 85,
    "category": "Kids",
    "description": "Chicken",
    "transactionTime": "2017-10-25T17:42:35.380Z",
    "amount": "701.06",
    "currency": "€"
  },
  {
    "id": 86,
    "category": "Sports",
    "description": "Fish",
    "transactionTime": "2018-02-22T04:47:12.619Z",
    "amount": "504.84",
    "currency": "€"
  },
  {
    "id": 87,
    "category": "Movies",
    "description": "Shirt",
    "transactionTime": "2017-11-26T14:50:27.883Z",
    "amount": "612.98",
    "currency": "€"
  },
  {
    "id": 88,
    "category": "Grocery",
    "description": "Bacon",
    "transactionTime": "2017-12-07T22:01:20.273Z",
    "amount": "775.16",
    "currency": "€"
  },
  {
    "id": 89,
    "category": "Movies",
    "description": "Fish",
    "transactionTime": "2017-10-14T21:28:02.031Z",
    "amount": "130.24",
    "currency": "€"
  },
  {
    "id": 90,
    "category": "Kids",
    "description": "Chair",
    "transactionTime": "2018-02-04T07:36:18.037Z",
    "amount": "351.56",
    "currency": "€"
  },
  {
    "id": 91,
    "category": "Movies",
    "description": "Chicken",
    "transactionTime": "2017-11-27T17:10:22.748Z",
    "amount": "856.42",
    "currency": "€"
  },
  {
    "id": 92,
    "category": "Kids",
    "description": "Fish",
    "transactionTime": "2018-03-09T05:10:41.082Z",
    "amount": "205.99",
    "currency": "€"
  },
  {
    "id": 93,
    "category": "Sports",
    "description": "Pants",
    "transactionTime": "2018-01-16T13:23:41.473Z",
    "amount": "37.32",
    "currency": "€"
  },
  {
    "id": 94,
    "category": "Grocery",
    "description": "Car",
    "transactionTime": "2017-09-21T05:51:50.734Z",
    "amount": "892.34",
    "currency": "€"
  },
  {
    "id": 95,
    "category": "Grocery",
    "description": "Chair",
    "transactionTime": "2018-07-16T13:53:52.799Z",
    "amount": "711.90",
    "currency": "€"
  },
  {
    "id": 96,
    "category": "Sports",
    "description": "Cheese",
    "transactionTime": "2018-08-02T08:39:52.080Z",
    "amount": "288.77",
    "currency": "€"
  },
  {
    "id": 97,
    "category": "Health",
    "description": "Hat",
    "transactionTime": "2017-11-29T02:50:19.342Z",
    "amount": "797.24",
    "currency": "€"
  },
  {
    "id": 98,
    "category": "Sports",
    "description": "Table",
    "transactionTime": "2017-12-08T10:19:28.945Z",
    "amount": "491.69",
    "currency": "€"
  },
  {
    "id": 99,
    "category": "Health",
    "description": "Pizza",
    "transactionTime": "2018-06-30T09:23:28.832Z",
    "amount": "55.38",
    "currency": "€"
  },
  {
    "id": 100,
    "category": "Health",
    "description": "Salad",
    "transactionTime": "2018-03-26T19:12:29.449Z",
    "amount": "917.18",
    "currency": "€"
  }
];
