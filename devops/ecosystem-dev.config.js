const os = require("os");
const cpuCount = os.cpus().length;

module.exports = {
    apps: [
        {
            name: "name project",
            script: "./.output/server/index.mjs",
            instances: 1,
            args: "start",
            watch: process.env.NODE_ENV !== "production" ? [".output"] : false,
            exec_mode: "cluster",
            env: {
                NODE_ENV: "production",
                PORT: 3043,
            },
            max_memory_restart: "512M",
            restart_delay: 5000,
            log_date_format: "YYYY-MM-DD HH:mm Z",
            error_file: "./logs/pm2-error.log",
            combine_logs: true,
        },
    ],
};
