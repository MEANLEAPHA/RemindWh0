// Import Express & Middleware
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log("📥 GET / request received");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

try {
    const { ToDo } = require('../src/router/toDo');
    ToDo(app);
} catch (err) {
    console.error("❌ Error importing routes:", err.message);
}

const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.error("❌ Server failed to start:", err);
    } else {
        console.log(`🚀 Server is Running`);
    }
});

process.on('uncaughtException', (err) => {
    console.error("❌ Uncaught Exception:", err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error("❌ Unhandled Rejection:", reason);
});
