const sessionCtrl = {};
import '../config/sessions'

sessionCtrl.postLogin = async (req, res) => {
    req.session.reload(function (err) {
      if (err) {
        return err;
      }
      res.status(200).json({ mensaje: "Se a traido la session " });
    });
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
    console.log(req.body)
    req.session.user = req.body;
    res.send(`Hola! has visto esta pagina ${req.session.cuenta}`);
  };

export default sessionCtrl;