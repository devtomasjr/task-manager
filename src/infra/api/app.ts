import express =  require("express")
import cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	next();
});



import TaskController = require('../../controllers/task.controller');
import ValidateTask = require("../../middlewares/validate-task.middleware");
app.get('/api/tasks', ValidateTask.list, TaskController.list);
app.post('/api/tasks', ValidateTask.add, TaskController.add);
app.put('/api/tasks', ValidateTask.edit, TaskController.edit);

// tasks page
app.get("/", (req: express.Request, res: express.Response) => {
	res.sendFile("index.html", { root: "./src/infra/views/task" });
})
// public files
app.use("/public", express.static("./src/infra/public"));


app.get("/public/enums", (req: express.Request, res: express.Response) => {
	res.sendFile(req.query.name + ".enum.js"
		, { root: "./build/enums" });
});


const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Server listening on port '+port)
})