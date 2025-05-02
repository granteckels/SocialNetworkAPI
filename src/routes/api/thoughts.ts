import { Router, Request, Response } from 'express';
import { Thought } from '../../models/index.js'

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        console.log("Error getting all thoughts", err);
        res.status(500).send("Failed to get thoughts");
    }
});

router.get('/:thoughtId', async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId).exec();
        res.json(thought);
    } catch (err) {
        console.log(`Error getting thought ${req.params.thoughtId}`, err);
        res.status(500).send(`Failed to get thought ${req.params.thoughtId}`);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const thoughtText = req.body.thoughtText;
    const username = req.body.username;
    try {
        const thought = await Thought.insertOne({ thoughtText, username })
        res.status(201).json(thought);
    } catch (err) {
        console.log("Error creating thought", err);
        res.status(500).send("Failed to create thought");
    }
});

router.put('/:thoughtId', async (req: Request, res: Response) => {
    const thoughtText = req.body.thoughtText;
    const username = req.body.username;
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, 
            { thoughtText, username }, 
            { returnDocument: 'after' }
        )
        res.json(updatedThought);
    } catch (err) {
        console.log("Error updating thought", err);
        res.status(500).send("Failed to update thought");
    }
});

router.delete('/:thoughtId', async (req: Request, res: Response) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
        res.json(deletedThought);
    } catch (err) {
        console.log("Error deleting user", err);
        res.status(500).send("Failed to delete user");
    }
});

router.post('/:thoughtId/reactions', async (req: Request, res: Response) => {
    const reactionBody = req.body.reactionBody;
    const username = req.body.username;
    try {
        const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId,
            { $push: { reactions: { reactionBody, username }} },
            { returnDocument: 'after' }
        )
        res.status(201).json(reaction);
    } catch (err) {
        console.log("Error creating reaction", err);
        res.status(500).send("Failed to create reaction");
    }
});

router.delete('/:thoughtId/reactions/:reactionId', async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { returnDocument: 'after' }
        )
        res.json(updatedThought);
    } catch (err) {
        console.log("Error deleting reaction", err);
        res.status(500).send("Failed to delete reaction");
    }
});

export default router;
