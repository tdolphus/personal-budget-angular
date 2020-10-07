const express = require('express');
const app = express();
const port = 3000;

app.use("/", express.static("public"));

const budget = {
    myBudget: [{
            title: "Hang Out",
            budget: 20
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

app.get('/hello', (req, res) => {
    res.send('Hello Wold!');

});

app.get("/budget", (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log("Example app listening at http://localhost:3000")
})