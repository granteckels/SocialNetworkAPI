import { Thought, User } from '../models/index.js';

export default async function seedUsers() {
    await User.deleteMany();    

    const sartre = await User.create({
        username: "sartre",
        email: "sartre@france.com"
    })
    await User.create({
        username: "nietzsche",
        email: "nietzsche@germany.com"
    })

    const thoughtsDescartes = await Thought.findOne({ username: "descartes" }).exec();
    await User.create({
        username: "pascal",
        email: "pascal@france",
        thoughts: [thoughtsDescartes!._id],
        friends: [sartre._id]
    })
}
