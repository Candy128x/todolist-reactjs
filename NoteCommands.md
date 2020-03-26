# Commands
	

---
## create react app
- => create-react-app todolist
- => cd todolist
- => npm start



---
- if got some error
- => sudo npm uninstall -g create-react-app
- => npx create-react-app my-test-app

- got error on npm start
- => rm -rf node_modules && npm cache clean --force && npm install

- Run the below command to avoid ENOSPC:
- => echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
- => sysctl --system
