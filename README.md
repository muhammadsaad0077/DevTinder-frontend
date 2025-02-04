Deploying our web

- signup on aws
- open aws console and create instance
- download keypair
- connecting through terminal
- term to login through terminal -  ssh -i "devtinder-secret.pem" ubuntu@ec2-13-60-249-219.eu-north-1.compute.amazonaws.com
- install node on virtual machine
- clone your project on virtual machine
- install dependencies - npm install
- make build folder - npm run build
- update virtual machine - sudo apt update
- instal nginx to host frontend - sudo apt install nginx
- start nginx on virtual machine - sudo systemctl start nginx
- enabling nginx on virtual machine - sudo systemctl enable nginx
- copy the dist folder content to /var/www/html of nginx - sudo scp -r dist/* /var/www/html   // -r means recursive which repeatedly copy all the files in the dist 
- We have to enable port 80 on our virtual server
