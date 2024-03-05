import { validationResult } from "express-validator";

const validationresults =(req, res, next)=>{
    const errores = validationResult(req);

if (!errores.isEmpty()) {
  res.status(400).json({
    errors: errores.array()
  });
}
next();
}

export default validationresults;