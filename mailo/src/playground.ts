import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: "test@gmail.com",
        firstName: "cain",
        lastName: "mane",
    },
});

console.log("done");