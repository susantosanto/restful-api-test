import {PrismaClient} from "@prisma/client"
import {logger} from "./logging.js";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "error"
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warn"
        }
    ]
});

prisma.$on("error", (e) => {
    logger.error(e);
});

export default prisma;