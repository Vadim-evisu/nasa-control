import { Request, Response, NextFunction } from "express";
import { Schema, ValidationError } from "yup";

const executeValidateMiddleWare = (schema: Schema) => {
  console.log("executeValidateMiddleWare");
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // await schema.validate({
      //   body: req.body,
      //   query: req.query,
      //   params: req.params,
      // });
      await schema.validate(req.body);
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = error.errors;
        if (errors.length > 0) {
          return res.status(422).json({ errors: errors });
        }
        next();
      }
      return res.status(500).json({ errors: ["Unknown error"] });
    }
  };
};

export { executeValidateMiddleWare };
