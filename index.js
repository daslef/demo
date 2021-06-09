const jwt = require("jsonwebtoken");
import { v4 as uuidv4 } from 'uuid';

const payload = {
	username: "student1",
	nickname: "Ivan Petrov",
	template: "default",
	subject: "Test 1",
	tags: ["Ivan Petrov"]
};
  
const supervisor = new Supervisor({ url: "https://dev04.proctoring.online" });

supervisor
	.init({
		provider: "jwt",
		token: jwt.sign({ id: uuidv4(), ...payload }, "secret", { expiresIn: "2h" }),
	})
	.then(function() {
		return supervisor.start();
	})
	.catch(function(err) {
		alert(err.toString());
		location.href = "/";
	});
// stop the session after testing in e-learning system is over
// supervisor.stop();
