import { closeConnection, setUpDBConnection } from "../server/utils/databaseUtil";

before(async () => {
    await setUpDBConnection();
});

after(async () => {
    await closeConnection();
});
