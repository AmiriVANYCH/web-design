const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const user_data = {
    name: req.body.name,
    mail:req.body.mail,
    pass: req.body.pass ,
    bd:req.body.bd,
    sex: req.body.sex


  };

  User.create(user_data)
    .then(data => {
      res.send(user_data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


exports.singVer = (req, res) => {

  const user_data = {

    mail:req.body.mail,
    pass: req.body.pass ,
  };

  User.findAll({where: {mail: user_data.mail, pass: user_data.pass}})
    .then(resaltUser => {
      if (resaltUser.length != 0){
        session=req.session;
        session.user=resaltUser;
        console.log(req.session)
        res.status(200).send({exist: 1});

      }
      else{
           res.send({exist:0});
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};



exports.getUser = (req, res) => {

    if(session.user){
        res.status(200).send({exist: 1,data: session.user[0]});
    }else{
        res.status(200).send({exist: 0});

    }
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        req.session.destroy();
        delete session;
        res.send({
          message: "OK"
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

