# WebTask

Web application using ReactJS and a Rest API using Node.js to feed the web with data from a mongodb database.

# Installation

First of all, to run the application you need to have installed MongoDB database.

To install MongoDB on your specific platform, refer to the MongoDB QuickStart (https://docs.mongodb.com/manual/installation/). Here are some quick steps to install MongoDB on a Mac:

1. Open a terminal window and type the following command to download the latest release:
curl http://downloads.mongodb.org/osx/mongodb-osx-x86_64-3.2.11.tgz > ~/Downloads/mongo.tgz

Note: You may need to adjust the version number. 3.2.11 is the latest production version at the time of this writing.

2. Extract the files from the mongo.tgz archive:
cd ~/Downloads
tar -zxvf mongo.tgz

3. Move the mongo folder to /usr/local (or another folder according to your personal preferences):
sudo mv -n mongodb-osx-x86_64-3.2.11/ /usr/local/

4. (Optional) Create a symbolic link to make it easier to access:
sudo ln -s /usr/local/mongodb-osx-x86_64-3.2.11 /usr/local/mongodb

5. Create a folder for MongoDB’s data and set the appropriate permissions:
sudo mkdir -p /data/db
sudo chown `id -u` /data/db

6. Start mongodb
cd /usr/local/mongodb
./bin/mongod

Once we have installed MongoDB database, we have to install all the modules of the application and then run it.

7. Run npm install
8. Run npm start
