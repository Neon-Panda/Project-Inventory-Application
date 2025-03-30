import express from "express";
import path from "node:path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
