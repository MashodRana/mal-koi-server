import express from "express";
import models from "../models";
import { deleteById, getAllUser, saveUser, updateById } from "../services/userService";


const router = express.Router();

const getHandler = async (req, res) => {
    const users = await getAllUser();
    // console.log(users)
    res.send(users);
}

const postHandler = async (req, res) => {
    // console.log(req)
    const body = req.body;
    // console.log(body);
    const user = await saveUser(body);
    res.send("saved user " + user._id)
}

const putHandler = async (req, res) => {
    const body = req.body;
    const user = await updateById(body);
    res.status(200).send(user);
}

const deleteHandler = async (req, res) => {
    const id = req.params.id;
    const user = await deleteById(id);
    res.status(200).send("user deletion successful.");
}

router.get('/', getHandler);
router.post('/', postHandler);
router.put('/', putHandler);
router.delete('/:id', deleteHandler);

const configure = (app) => {
    app.use('/users', router);
}

export default configure;