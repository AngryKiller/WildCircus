let express = require('express');
let router = express.Router();
let mail = require('../utils/mail');
let is = require('is_js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  console.log(req.body)
  if (is.existy(req.body.identity) && is.existy(req.body.email) && is.existy(req.body.content)){
    mail.sendMail(req.body.identity, req.body.email, req.body.content, function(ress){
      if(ress === true){
        res.flash('success', "Le mail a été envoyé avec succès");
        res.redirect('/#contact')
      }
      else {
        res.flash("danger", "Une erreur est survenue lors de l'envoi du mail");
        res.redirect('/#contact')
      }
    })
  }else{
    res.flash("danger", "Un ou plusieurs champs requis sont manquants");
    res.redirect('/#contact');
  }

});
module.exports = router;
