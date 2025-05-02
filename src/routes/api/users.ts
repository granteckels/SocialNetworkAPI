import { Router, Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log("Error getting all users", err);
        res.status(500).send("Failed to get users");
    }
});

router.get('/:userId', async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId).exec();
        res.json(user);
    } catch (err) {
        console.log(`Error getting user ${req.params.userId}`, err);
        res.status(500).send(`Failed to get user ${req.params.userId}`);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const username = req.body.username;
    const email = req.body.email;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return void res.status(400).json({ error: 'Username already taken' });
        }

        const user = await User.insertOne({ username, email })
        res.status(201).json(user);
    } catch (err) {
        console.log("Error creating user", err);
        res.status(500).send("Failed to create user");
    }
});

router.put('/:userId', async (req: Request, res: Response) => {
    const username = req.body.username;
    const email = req.body.email;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, 
            { username, email }, 
            { returnDocument: 'after' }
        )
        res.json(updatedUser);
    } catch (err) {
        console.log("Error updating user", err);
        res.status(500).send("Failed to update user");
    }
});

router.delete('/:userId', async (req: Request, res: Response) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        res.json(deletedUser)
    } catch (err) {
        console.log("Error deleting user", err);
        res.status(500).send("Failed to delete user");
    }
});

router.post('/:userId/friends/:friendId', async (req: Request, res: Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId,
            { $push: { friends: req.params.friendId } },
            { returnDocument: 'after' }
        )
        res.json(updatedUser);
    } catch (err) {
        console.log("Error adding friend", err);
        res.status(500).send("Failed to add friend");
    }
});

router.delete('/:userId/friends/:friendId', async (req: Request, res: Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { returnDocument: 'after' }
        )
        res.json(updatedUser);
    } catch (err) {
        console.log("Error removing friend", err);
        res.status(500).send("Failed to remove friend");
    }
});

export default router;
