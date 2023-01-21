import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { ResponseObj } from './../interfaces/response';
import { UserObj } from "../interfaces/user";

const User = require('../models/userModel')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { SALT_WORK_FACTOR } = process.env;

interface userController {
    createUser: ResponseObj,
    // getUser: ResponseObj,
    verifyUser: ResponseObj,
};


const errorHandler = (errInfo: any)  => {
    const {method, type, err } = errInfo;

    return {
        log: `userController.${method} ${type}: ERROR: ${
            typeof err === 'object' ? JSON.stringify(err) : err
        }`,
        message: {
            err: `Error occcured in userController.${method}. Check the server logs for more details.`
        }
    }    
}


const userController: userController = {
    createUser: (req: Request, res: Response, next: NextFunction) => {
        const {firstname, lastname, email, username, password} = req.body;

        User.create({firstname, lastname, email, username, password})
            .then((user: UserObj) => {console.log(user)})
            .catch((err: Error) => {
                return next({
                    method: 'createUser',
                    type: 'Failed to create a new user in the database',
                    err
                });
            });
    },
    // getUser: (req: Request, res: Response, next: NextFunction) => {},
    verifyUser: (req: Request, res: Response, next: NextFunction)=> {
        const {username, password} = req.body;

        if(!username || !password) {
            return next('Username or Password is incorrect');
        }

        User.findOne({ username })
            .then((user: UserObj) =>{ console.log(user)})
            .catch((err: Error) => {
                return next({
                    method: 'verifyUser',
                    type: 'Failed to find user within the database',
                    err
                })
            })
    }
};


export default userController;
