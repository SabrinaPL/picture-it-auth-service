/**
 * @file Defines the account router.
 * @module routes/accountRouter
 * @author Mats Loock & Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 3.0.0
 */

import express from 'express'
import { AccountController } from '../../../controllers/api/AccountController.js'

export const router = express.Router()

const controller = new AccountController()

// Map HTTP verbs and route paths to controller actions.

// Log in.
router.post('/login', (req, res, next) => controller.login(req, res, next))

// Log in with a refresh token.
router.post('/login/refresh', (req, res, next) => controller.loginRefreshToken(req, res, next))

// Register.
router.post('/register', (req, res, next) => controller.register(req, res, next))
