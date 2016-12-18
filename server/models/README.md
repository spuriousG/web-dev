# Models

## Installation
Install MongoDB and setup local database on your machine.
```bash
brew install mongodb
mkdir -p /data/db # if permission denied, rerun command with 'sudo'
sudo chown -R `id -un` /data/db # makes sure /data/db has the right permissions
mongod # start the mongo server
```
Now you can open a new shell session (Ctrl-C to kill mongo server) and use ```mongo``` to interact with your local db.

