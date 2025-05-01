import { Router } from 'express';
import { User } from '../../models/index.js';

const router = Router();

router.get('/', async (_req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        console.log("Error getting all users", err);
        res.status(500).send("Failed to get users");
    }
});

router.get('/:userId', (_req, _res) => {});

router.post('/', (_req, _res) => {});

router.put('/', (_req, _res) => {});

router.delete('/', (_req, _res) => {});

router.post('/:userId/friends/:friendId', (_req, _res) => {});

router.delete('/:userId/friends/:friendId', (_req, _res) => {});

export default router;
