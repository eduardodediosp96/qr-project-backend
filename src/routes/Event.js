import express from "express";
import { Router } from "express";
import {
  getEvents,
  createEvent,
  editEvent,
  deleteEvent,
  getEvent,
} from "../controllers/Event";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Event:
 *     properties:
 *       title:
 *         type: string
 *         description: Title of the event
 *       schedules:
 *         type: array
 *         items:
 *           type: string
 *         description: List of event schedules
 *       location:
 *         type: string
 *         description: Location of the event
 *       guests:
 *         type: array
 *         items:
 *           type: string
 *         description: Guest ID
 *     example:
 *       title: "Sample Event"
 *       schedules: []
 *       location: "Event Venue"
 *       guests: []
 *   EventRequiered:
 *     allOf:
 *      - $ref: "#/components/schemas/Event"
 *      - required:
 *        - title
 *        - location
 */

// Add routes
/**
 * @swagger
 * /events/:
 *  get:
 *    summary: Traer todos los eventos
 *    tags: [Event]
 *    responses:
 *      200:
 *        description: Todos las eventos
 *        constent:
 *          Application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Event'
 *      500:
 *        description: Error de Sequelize
 */

router.route("/").get(getEvents);

/**
 * @swagger
 * /events/{id}:
 *  get:
 *    summary: Trae el evento con el id
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las eventos
 *    responses:
 *      200:
 *        description: Trae la credencial con el id
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Event not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").get(getEvent);

/**
 * @swagger
 * /events/:
 *  post:
 *    summary: Crear nuevo evento
 *    tags: [Event]
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventRequiered'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventRequiered'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/EventRequiered'
 *    responses:
 *      200:
 *        description: Nuevo Event fue creado
 *      400:
 *        description: Event not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/").post(createEvent);

/**
 * @swagger
 * /events/{id}:
 *  patch:
 *    summary: Editar Evento
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las eventos
 *    requestBody:
 *      required: true
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Event'
 *        Application/xml:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Event'
 *        Application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Event'
 *    responses:
 *      200:
 *        description: Evente editado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Event not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").patch(editEvent);

/**
 * @swagger
 * /Events/{id}:
 *  delete:
 *    summary: Eliminar Evento
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de las eventos
 *    responses:
 *      200:
 *        description: Evente eliminado
 *        constent:
 *          Application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Event'
 *      400:
 *        description: Event not found
 *      500:
 *        description: Error de Sequelize
 */
router.route("/:id").delete(deleteEvent);

export default router;
