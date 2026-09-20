const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const MOCK_FILE = path.join(__dirname, 'data', 'mock.json');
const SUBMISSIONS_FILE = path.join(__dirname, 'data', 'submissions.json');

function readJsonFile(filePath, defaultVal = []) {
    try {
        if (!fs.existsSync(filePath)) return defaultVal;
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
        return defaultVal;
    }
}

function writeJsonFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error(`Error writing ${filePath}:`, err.message);
        return false;
    }
}

// 1. Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        service: 'Web UI Components Mock API',
        author: 'Ch. Prudhvi Raj (2500080283)',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// 2. Component list
app.get('/api/components', (req, res) => {
    const mock = readJsonFile(MOCK_FILE, { components: [] });
    res.json({ success: true, count: mock.components.length, data: mock.components });
});

// 3. Mock users for table / card testing
app.get('/api/users', (req, res) => {
    const mock = readJsonFile(MOCK_FILE, { users: [] });
    res.json({ success: true, count: mock.users.length, data: mock.users });
});

// 4. Submissions list
app.get('/api/submissions', (req, res) => {
    const submissions = readJsonFile(SUBMISSIONS_FILE, []);
    res.json({ success: true, count: submissions.length, data: submissions });
});

// 5. Submit feedback or test form
app.post('/api/feedback', (req, res) => {
    const { name, email, rating, message, component } = req.body;
    if (!name || !message) {
        return res.status(400).json({ success: false, error: 'Name and message are required.' });
    }

    const submissions = readJsonFile(SUBMISSIONS_FILE, []);
    const newEntry = {
        id: submissions.length + 1,
        name: name.trim(),
        email: (email || '').trim(),
        rating: Number(rating) || 5,
        component: component || 'General',
        message: message.trim(),
        submittedAt: new Date().toISOString()
    };

    submissions.push(newEntry);
    writeJsonFile(SUBMISSIONS_FILE, submissions);

    res.status(201).json({
        success: true,
        message: 'Feedback submitted and stored in database successfully!',
        data: newEntry
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`UI Component Mock Server running at http://localhost:${PORT}`);
    });
}
