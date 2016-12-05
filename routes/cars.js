var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('cardb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'cardb' database");
        db.collection('cars', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'cars' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findByItemNumber = function(req, res) {
    var id = req.params.id;
    db.collection('cars', function(err, collection) {
        collection.find({'item_number': id}).limit(1).next(function(err, item) {
            res.send(item);
            console.log('Retrieving car: ' + id);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('cars', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addCar = function(req, res) {
    var car = req.body;
    console.log('Adding car: ' + JSON.stringify(car));
    db.collection('cars', function(err, collection) {
        collection.insert(car, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateCar = function(req, res) {
    var id = req.params.id;
    var car = req.body;
    console.log('Updating car: ' + id);
    console.log(JSON.stringify(car));
    db.collection('cars', function(err, collection) {
        collection.updateOne({'_id': id}, car, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating car: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(car);
            }
        });
    });
}

exports.deleteCar = function(req, res) {
    var id = req.params.id;
    console.log('Deleting car: ' + id);
    db.collection('cars', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data
var populateDB = function() {

    var cars = [
    {
	    car_model: 'BMW M3',
	    year: 2016,
	    min_price: 48500,
        max_price: 60000, 
	    mileage: 100000, 
	    item_number:'#1395P', 
	    vin:'3GNDA13D96S631406', 
	    views: 37, 
	    saves: 20,
	    shares: 15,
	    cylinders: '4L',
	    city_mpg: 20,
	    highway_mpg: 25,
	    engine: 1.3,
    	photos: ['../public/img/0.jpg', '../public/img/1.jpg', '../public/img/2.jpg', '../public/img/3.jpg', '../public/img/4.jpg', '../public/img/5.jpg'],
    }];

    db.collection('cars', function(err, collection) {
        collection.insert(cars, {safe:true}, function(err, result) {});
    });

};