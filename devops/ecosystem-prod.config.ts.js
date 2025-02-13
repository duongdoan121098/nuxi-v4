const os = require("os");
const cpuCount = os.cpus().length;

module.exports = {
    apps: [
        {
            name: "hi88-client-cluster",
            script: "./.output/server/index.mjs",
            instances: Math.min(
                cpuCount <= 4 ? cpuCount : cpuCount >= 6 ? Math.floor(cpuCount / 2) : 1,
                5, // Tối đa 5 instance
            ),
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
