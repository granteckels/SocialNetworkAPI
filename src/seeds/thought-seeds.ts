import { Thought } from '../models/index.js';

export default async function seedThoughts() {
    await Thought.deleteMany();

    await Thought.insertMany([
        {
            thoughtText: "A thought",
            username: "foo",
            reactions: [{
                reactionBody: "A reaction",
                username: "bar",
            }, {
                reactionBody: "A second reaction",
                username: "qux"
            }]
        }, {
            thoughtText: "I think therefore I am",
            username: "descartes",
            reactions: [{
                reactionBody: "God is a comedian playing to an audience that is too afriad to laugh",
                username: "voltaire"
            }, {
                reactionBody: "Life is nasty, brutish, and short",
                username: "hobbes"
            }]
        }
    ])
}
