import { Thought } from '../models/index.js';

export default async function seedThoughts() {
    const thought = new Thought({
        thoughtText: "a thought",
        username: "foobar",
    })

    await thought.save();
}
