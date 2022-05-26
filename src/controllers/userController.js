import users from "../models/User.js";

class UserController {
    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        });
    }

    static addUser = (req, res) => {
        let user = new users(req.body);
        user.save((err) => {
            if (err) {
                res.status(500).send({
                    statusMessage: false,
                    message: `Ocorreu um problema ${err.message}`,
                    dados: []
                });
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    }
}

export default UserController;