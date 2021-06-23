import express from 'express'
export const authorRouter = express.Router();

import {getAllAuthors} from "./authController"


authorRouter.get('/',getAllAuthors)
