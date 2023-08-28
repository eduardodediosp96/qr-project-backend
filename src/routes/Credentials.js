import express from "express";
import { Router } from "express";
import {
  getCredentials,
  createCredential,
  editCredential,
  deleteCredential,
  getCredential,
  login,
} from "../controllers/Credentials";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Credential:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *         description: username
 *       password:
 *         type: string
 *         description: password
 *     example:
 *       username: eduardodediosp96@gmail.com
 *       password: Sami123@
 *   CredentialRequiered:
 *     allOf:
 *      - $ref: "#/components/schemas/Credential"
 *      - required:
 *        - username
 *        - password
 */

// Add routes
/**
 * @swagger
 * /credentials/:
 *  get:
 *    summary: Traer todos las credenciales
 *    tags: [Credential]
 *    responses:
 *      200:
 *        description: Todos las credenciales
 *        constent:
 *          Application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Credential'
 *      500:
 *        description: Error de Sequelize
 */

router.route("/").get(getCredentials);

/**
 * @swagger
 * /credentials/{id}:
 *  get:
 *    summary: Trae la credencial con el id
 *    tags: [Credential]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las credenciales
 *    responses:
 *      200:
 *        description: Trae la credencial con el id
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Credential'
 *      400:
 *        description: Credential not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").get(getCredential);

/**
 * @swagger
 * /credentials/:
 *  post:
 *    summary: Crear Nuevas Credenciales
 *    tags: [Credential]
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *    responses:
 *      200:
 *        description: Nuevo Credential fue creado
 *      400:
 *        description: Credential not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/").post(createCredential);

/**
 * @swagger
 * /credentials/login:
 *  post:
 *    summary: Iniciar Sesion
 *    tags: [Credential]
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CredentialRequiered'
 *    responses:
 *      200:
 *        description: username logged in
 *      500:
 *        description: Error de Sequelize
 */
router.route("/login").post(login);

/**
 * @swagger
 * /credentials/{id}:
 *  patch:
 *    summary: Editar Credential
 *    tags: [Credential]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las credenciales
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Credential'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Credential'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Credential'
 *    responses:
 *      200:
 *        description: Credentiale editado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Credential'
 *      400:
 *        description: Credential not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").patch(editCredential);

/**
 * @swagger
 * /Credentials/{id}:
 *  delete:
 *    summary: Eliminar Crendencial
 *    tags: [Credential]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las credenciales
 *    responses:
 *      200:
 *        description: Credentiale eliminado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Credential'
 *      400:
 *        description: Credential not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").delete(deleteCredential);

export default router;
