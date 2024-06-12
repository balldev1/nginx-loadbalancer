import http from "http";

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

// create server and listen for request
async function main() {
    try {
        const server = http.createServer();
        server.on('request', async (req, res) => {
            res.end(JSON.stringify({SERVER_HOST, SERVER_PORT}));
        });
        // ที่สำคัญ: เริ่ม server ให้เริ่มการฟังการเชื่อมต่อ
        server.listen(SERVER_PORT, SERVER_HOST);
    } catch (err) {
        console.error(`Something went wrong`, err);
    }
}

main()
    .then(() => console.log('Server started on ' + SERVER_HOST + ':' + SERVER_PORT + '!'))
    .catch(err => console.error(`Something went wrong`, err))
