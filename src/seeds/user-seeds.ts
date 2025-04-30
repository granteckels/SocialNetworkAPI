import { Thought, User } from '../models/index.js';

export default async function seedUsers() {
    await User.deleteMany();    

    const sartre = await User.create({
        username: "sartre",
        email: "sarter@france.com"
    })
    const nietzsche = await User.create({
        username: "nietzsche",
        email: "nietzsche@germany.com"
    })

    const thoughtsDescartes = await Thought.findOne({ username: "descartes" }).exec();
    await User.create({
        username: "pascal",
        email: "pascal@france.com",
        thoughts: [thoughtsDescartes!._id],
        friends: [sartre._id, nietzsche._id]
    })
}
