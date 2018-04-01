import { setUpConnection, closeConnection } from "../server/utils/databaseUtil";

before(async () => {
    await setUpConnection();
});

after(async () => {
    await closeConnection();
});
