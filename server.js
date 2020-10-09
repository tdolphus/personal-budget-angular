//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [{
            title: "Hang Out",
            budget: 2000
        },

        {
            title: "Subscriptions",
            budget: 200
        },

        {
            title: "Amazon",
            budget: 95
        },


    ]
};

var jsonfile = require("/Users/Titus/Documents/dev/week03/personal-budget/budget.json");



app.get("/budget", (req, res) => {
    res.json(jsonfile);
});

app.listen(port, () => {
    console.log("API Served at http://localhost:" + port)
})