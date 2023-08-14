import express from "express";
import { Router } from "express";
import {
  getEventSchedules,
  createEventSchedule,
  editEventSchedule,
  deleteEventSchedule,
  getEventSchedule,
} from "../controllers/EventSchedule";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   EventSchedule:
 *     type: object
 *     properties:
 *       date:
 *         type: string
 *         format: date-time
 *         description: date
 *       time:
 *         type: string
 *         description: time
 *     example:
 *       date: 2023-08-15T10:00:00Z
 *       time: 10:00 AM
 *   EventScheduleRequiered:
 *     allOf:
 *      - $ref: "#/components/schemas/EventSchedule"
 *      - required:
 *        - date
 *        - time
 */

// Add routes
/**
 * @swagger
 * /event-schedules/:
 *  get:
 *    summary: Traer todos los EventSchedule
 *    tags: [EventSchedule]
 *    responses:
 *      200:
 *        description: Todos las credenciales
 *        constent:
 *          Application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/EventSchedule'
 *      500:
 *        description: Error de Sequelize
 */

router.route("/").get(getEventSchedules);

/**
 * @swagger
 * /event-schedules/{id}:
 *  get:
 *    summary: Trae el EventSchedule con el id
 *    tags: [EventSchedule]
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
 *              $ref: '#/components/schemas/EventSchedule'
 *      400:
 *        description: EventSchedule not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").get(getEventSchedule);

/**
 * @swagger
 * /event-schedules/{id}:
 *  post:
 *    summary: Crear nuevos EventSchedules
 *    tags: [EventSchedule]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del evento
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventScheduleRequiered'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventScheduleRequiered'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventScheduleRequiered'
 *    responses:
 *      200:
 *        description: Nuevo EventSchedule fue creado
 *      400:
 *        description: EventSchedule not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").post(createEventSchedule);

/**
 * @swagger
 * /event-schedules/{id}:
 *  patch:
 *    summary: Editar EventSchedule
 *    tags: [EventSchedule]
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
 *            $ref: '#/components/schemas/EventSchedule'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventSchedule'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventSchedule'
 *    responses:
 *      200:
 *        description: EventSchedulee editado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/EventSchedule'
 *      400:
 *        description: EventSchedule not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").patch(editEventSchedule);

/**
 * @swagger
 * /event-schedules/{id}:
 *  delete:
 *    summary: Eliminar EventSchedule
 *    tags: [EventSchedule]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las credenciales
 *    responses:
 *      200:
 *        description: EventSchedulee eliminado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/EventSchedule'
 *      400:
 *        description: EventSchedule not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").delete(deleteEventSchedule);

export default router;
