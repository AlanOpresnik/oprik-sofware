import { model, models } from "mongoose";

const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    orderDate: {
        type: String,
        default: ''
    }
});

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'el email es obligatorio'],
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    plan: {
        type: [PlanSchema], // Referencia al esquema de planes
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Client = models.Client || model('Client', ClientSchema)
export default Client;
