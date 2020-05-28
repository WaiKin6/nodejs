let bodyparser = require('body-parser')
module.exports = {
    devServer: {
        before(app) {
            app.post("/list", bodyparser.json(), (req, res) => {
                let { username } = req.body;
                console.log(req.body.username);

                let values = require("./mock/list.json");
                let value = values.filter(v => v.name == "绿色")
                res.send({
                    value,
                })
            })
        }
    }
}