import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { CustomError } from "../errors/custom-error";
export const errorHandler = (
  err: Error, 
  req: Request, 
  res:Response, 
  next: NextFunction
  ) => {
    /*
    below comment code is before applying custom error
    if  (err instanceof RequestValidationError) {
      // 1st comment to show error
      //console.log('handling this error as a request validation error');
      
      //2nd comment to show error
      //const formattedErrors = err.errors.map(error => {
      //  return {message: error.msg, field: error.param};
      //});
      return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }

    if (err instanceof DatabaseConnectionError) {
      // 1st comment to show error
      //console.log('handling this error as a db connection error');
      
      //2nd comment to show error
      //return res.status(500).send({ errors: [
      //  {message: err.reason}
      //]});
      return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }
    */

    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ errors: err.serializeErrors()});
    }

    res.status(400).send({
      erros: [{ message: 'Someting went wrong'}]
    });
    

};