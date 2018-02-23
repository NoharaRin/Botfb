const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "thopk007113@gmail.com", password: "NoharaRin"}, (err, api) => {
    if(err) return console.error(err);
	api.listen(function callback(err, message) {		
	 if (message.body){
			api.sendMessage("- Tui đang bận! \n- Tui sẽ trả lời tin nhắn của bạn sau khi tui seen <3", message.threadID);
	        return;
		}
	});
});
