Deploying our web

- signup on aws
- open aws console and create instance
- download keypair
- connecting through terminal
- term to login through terminal -  ssh -i "devtinder-secret.pem" ubuntu@ec2-13-60-249-219.eu-north-1.compute.amazonaws.com


- install node on virtual machine
- clone your project on virtual machine

- Frontend
   - install dependencies - npm install
   - make build folder - npm run build
   - update virtual machine - sudo apt update
   - instal nginx to host frontend - sudo apt install nginx
   - start nginx on virtual machine - sudo systemctl start nginx
   - enabling nginx on virtual machine - sudo systemctl enable nginx
   - copy the dist folder content to /var/www/html of nginx - sudo scp -r dist/* /var/www/html   // -r means recursive which repeatedly copy all the files in the dist 
   - We have to enable port 80 on our virtual server

- Backend
  - install dependencies - npm instal
  - run backend server on virtual machine - npm start
  - install pm2 to run virtaul server forever - npm install pm2 -g
  - run server via pm2 - pm2 start npm -- start
  - to give name your process you can start the server as pm2 start npm --name "your-process-name" -- start
  - to check logs pm2 logs
  - pm2 list, pm2 delete npm, pm2 stop npm
  - to connect frontend to backend we should map localhost:3001 to devtinder/api
  - search chatgpt nginx proxy pass of /api to port 3001
  - restart nginx - sudo systemctl restart nginx

# Chat Feature using socket.io
