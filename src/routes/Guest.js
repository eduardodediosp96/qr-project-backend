import express from "express";
import { Router } from "express";
import {
  getGuests,
  createGuest,
  editGuest,
  deleteGuest,
  getGuest,
} from "../controllers/Guest";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Guest:
 *     properties:
 *       name:
 *         type: string
 *         description: name of the guest
 *       email:
 *         type: string
 *         description: email of the guest
 *       phone:
 *         type: string
 *         description: phone of the guest
 *       agency:
 *         type: string
 *         description: agency of the guest
 *       position:
 *         type: string
 *         description: position of the guest
 *       bussinesTable:
 *         type: string
 *         description: bussinesTable of the guest
 *       availableSchedules:
 *         type: array
 *         items:
 *           type: string
 *         description: List of guest schedules
 *     example:
 *       name: "Eduardo Dedios"
 *       email: "Eduardo Dedios"
 *       phone: "Eduardo Dedios"
 *       agency: "Eduardo Dedios"
 *       position: "Eduardo Dedios"
 *       bussinesTable: "Eduardo Dedios"
 *       availableSchedules: []
 *   GuestRequiered:
 *     allOf:
 *      - $ref: "#/components/schemas/Guest"
 *      - required:
 *        - name
 *        - email
 *        - phone
 *        - agency
 *        - bussinesTable
 */

// Add routes
/**
 * @swagger
 * /guests/:
 *  get:
 *    summary: Traer todos los guests
 *    tags: [Guest]
 *    responses:
 *      200:
 *        description: Todos las guest
 *        constent:
 *          Application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Guest'
 *      500:
 *        description: Error de Sequelize
 */

router.route("/").get(getGuests);

/**
 * @swagger
 * /guests/{id}:
 *  get:
 *    summary: Trae el guesto con el id
 *    tags: [Guest]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las guest
 *    responses:
 *      200:
 *        description: Trae la credencial con el id
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Guest'
 *      400:
 *        description: Guest not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").get(getGuest);

/**
 * @swagger
 * /guests/:
 *  post:
 *    summary: Crear nuevo guesto
 *    tags: [Guest]
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/GuestRequiered'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/GuestRequiered'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/GuestRequiered'
 *    responses:
 *      200:
 *        description: Nuevo Guest fue creado
 *      400:
 *        description: Guest not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/").post(createGuest);

/**
 * @swagger
 * /guests/{id}:
 *  patch:
 *    summary: Editar Guesto
 *    tags: [Guest]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las guest
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Guest'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Guest'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Guest'
 *    responses:
 *      200:
 *        description: Gueste editado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Guest'
 *      400:
 *        description: Guest not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").patch(editGuest);

/**
 * @swagger
 * /Guests/{id}:
 *  delete:
 *    summary: Eliminar Guesto
 *    tags: [Guest]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las guest
 *    responses:
 *      200:
 *        description: Gueste eliminado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Guest'
 *      400:
 *        description: Guest not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").delete(deleteGuest);

export default router;
