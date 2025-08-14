const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Nếu file ở thư mục con, ví dụ 'public', thay 'public' vào đây:
app.use(express.static(path.join(__dirname, 'Game')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Game', 'Greedy'));
});

app.listen(PORT, () => {
    console.log(`✅ Server chạy tại http://localhost:${PORT}`);
});
