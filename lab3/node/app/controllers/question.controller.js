const db = require("../models");
const Qastion = db.qastion
const Op = db.Sequelize.Op;


exports.getQastion = (req, res) => {
  const id = req.params.id;

    Qastion.findAll({
        where: { id: id }
    })
        .then(resalt => {
            if (resalt.length != 0) {
                res.send(resalt[0]);

            }
            else {
                res.send({ exist: 0 });
            }
        });
       
};

