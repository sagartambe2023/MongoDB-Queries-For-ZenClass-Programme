// Find all the topics and tasks which are thought in the month of October
db.task.aggregate([
    {
        $match: {
            deadline: {$gte: ISODate('2020-10-01') , $lte : ISODate('2020-10-31')}
        }
    },
    {
        $project: {
            _id: 0 ,
            task_id: 1,
            task_name: 1,
            deadline : 1
        }
    },
    {
        $unionWith:{
            coll: "topics",
            pipeline: [
                {
                    $match: {
                        date: {$gte: ISODate('2020-10-01') , $lte : ISODate('2020-10-31')}
                    }
                },
                {
                    $project: {
                        _id: 0 ,
                        topic_id: 1,
                        topic_name: 1,
                        date : 1
                    }
                },
            ]
        }
    }
   ]).pretty();

   //Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

    db.company.find({date: {$gte: ISODate('2020-10-15') , $lte : ISODate('2020-10-31') }}).pretty();

    //Find all the company drives and students who are appeared for the placement.

db.company.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "students",
            foreignField: "user_name",
            as : "appeared_students"
        }
    },
    {
        $unwind: {
            path: "$Appeared"
        }
    },
    {
        $project: {
            _id: 0,
            company_name: 1,
            date: 1,
            "Appeared.user_id" : 1,
            "Appeared.user_name": 1,
            "Appeared.email": 1
        }
    }
  ]).pretty();