const config = {
    database: {
        url: process.env.DATABASE_URL || "mongodb://localhost:27017",
        name: process.env.DATABASE_NAME || "mars"
    },

    server: {
        port: process.env.SERVER_PORT || 3000
    }

};

export default config;
