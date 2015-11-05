var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db){

    var students = db.collection('students');

    db.collection('students').update(
      score.$.type: {$elemMatch: 'homework'}
      
    )
    // var cursor = students.aggregate(
    //   { '$unwind' : '$scores' } ,
    //   { '$match'  : { 'scores.type': "homework" } },
    //   { '$group'  : { '_id' : '$_id', lowest_score : {$min  :'$scores.score'}  }}
    // );
    //
    // students.remove( cursor , function(err, removed){
    //   if (err) throw err;
    //   console.log('Successfully removed ' + removed + ' documents!');
    //   return db.close();
    // });

});
