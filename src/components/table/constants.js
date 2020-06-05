export const MESSAGE = 'This is some tip';
export const DATA = [
    {
        "name": "John",
        "status": "paid",
        "data": [
            {
                "date": "2020-03-25",
                "minutes": 112
            },
            {
                "date": "2020-03-26",
                "minutes": 384
            },
            {
                "date": "2020-03-27",
                "minutes": 476
            }
        ]
    },
    {
        "name": "William",
        "status": "unpaid",
        "data": [
            {
                "date": "2020-03-28",
                "minutes": 520
            },
            {
                "date": "2020-03-26",
                "minutes": 40
            }
        ]
    },
    {
        "name": "Thomas",
        "status": "pending",
        "data": [
            {
                "date": "2020-03-25",
                "minutes": 288
            },
            {
                "date": "2020-03-28",
                "minutes": 412
            },
            {
                "date": "2020-03-27",
                "minutes": 444
            }
        ]
    }
];

export const TIMEOUT_DELAY = 5000;

export const TABLE_KEY = {
    name: 'Name',
    status: "Status",
    total: "Total",
};