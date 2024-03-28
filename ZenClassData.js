//users
db.users.insertMany([
    {
    user_id: 1,
    user_name:"Sagar",
    user_email:"sagar@gamil.com",
    mentor_id: 1,
    mentor_name:"sangeetha"
    
    },

    {
    user_id: 2,
    user_name:"Yuvraj",
    user_email:"yuvraj@gamil.com",
    mentor_id: 1,
    mentor_name:"sangeetha"
    },

    {
        user_id: 3,
        user_name:"Siddhesh",
        user_email:"siddhesh@gamil.com",
        mentor_id: 1,
        mentor_name:"sangeetha"   
    },

    {
        user_id: 4,
        user_name:"Aniket",
        user_email:"siddhesh@gamil.com",
        mentor_id: 2,
        mentor_name:"Shiva"   
    },

    {
        user_id: 5,
        user_name:"Siddhesh",
        user_email:"siddhesh@gamil.com",
        mentor_id: 2,
        mentor_name:"Shiva"   
    }
])

//codekatta

db.codekatta.insertMany([
    {
        problem_id:1,
        problem_name:"Armstrong Number",
        problems_solved:"13",
        date : ISODate('2020-10-10'),
        status:"Completed"
        
    },
    {
        problem_id_id:2,
        problem_name:"Palindrome",
        problems_solved:"45",
        date : ISODate('2020-10-15'),
        status:"Completed"
        
    },
    {
        problem_id_id:3,
        problem_name:"Fibo Series",
        problems_solved:"28",
        date : ISODate('2020-10-20'),
        status:"Completed"
        
    },
    {
        problem_id_id:4,
        problem_name:"Factorial",
        problems_solved:"57",
        date : ISODate('2020-10-25'),
        status:"Completed"
        
    },
    {
        problem_id_id:5,
        problem_name:"Reverse String",
        problems_solved:"79",
        date : ISODate('2020-10-30'),
        status:"Completed"
        
    }
])

//topics

db.topics.insertMany([
    {
        topic_id: 1,
        topic_name: "HTML & CSS",
        date: ISODate('2020-10-01')
    },
    {
        topic_id: 2,
        topic_name: "JavaScript",
        date: ISODate('2020-10-10')
    },
    {
        topic_id: 3,
        topic_name: "ReactJS",
        date: ISODate('2020-10-15')
    },
    {
        topic_id: 4,
        topic_name: "NodeJS",
        date: ISODate('2020-11-20')
    },
    {
        topic_id: 5,
        topic_name: "ExpressJS",
        date: ISODate('2020-11-29')
    }
])

//Task

db.task.insertMany([
    {
        task_id: 1,
        topic_id: 1,
        task_name: "HTML & CSS",
        user_id: [1,2,3,4,5],
        deadline: ISODate('2020-10-01'),
        submitted: true
    },
    {
        task_id: 2,
        topic_id: 1,
        task_name: "JavaScript",
        user_id: [1,2,4,5],
        deadline: ISODate('2020-10-10'),
        submitted: false
    },
    {
        task_id: 3,
        topic_id: 2,
        task_name: "ReactJS",
        user_id: [1,2,3,5],
        deadline: ISODate('2020-10-15'),
        submitted: true
    },
    {
        task_id: 4,
        topic_id: 5,
        task_name: "NodeJS",
        user_id: [4,5],
        deadline: ISODate('2020-10-25'),
        submitted: false
    },
    {
        task_id: 5,
        topic_id: 4,
        task_name: "ExpressJS",
        user_id: [1,5],
        deadline: ISODate('2020-10-30'),
        submitted: true
    }
])


// Mentors

db.mentor.insertMany([
    {
        mentor_id: 1,
        mentor_name: "Abhishek",
        mentees_count : 11
    },
    {
        mentor_id: 2,
        mentor_name: "Shiva",
        mentees_count : 12
    },
    {
        mentor_id: 3,
        mentor_name: "DVS Jagan",
        mentees_count : 13
    },
    {
        mentor_id: 4,
        mentor_name: "Sangeetha",
        mentees_count : 14
    },
    {
        mentor_id: 5,
        mentor_name: "Aditya",
        mentees_count : 15
    },
])

//Company drives

db.cdrives.insertMany([
    {
        cdrive_id: 1,
        company_name : "TCS",
        date : ISODate('2020-10-02'),
        students: ["Sagar","Yuvraj"]
    },
    {
        cdrive_id: 2,
        company_name : "Wipro",
        date : ISODate('2020-10-07'),
        students: ["Siddhesh"]
    },
    {
        cdrive_id: 3,
        company_name : "HCL",
        date : ISODate('2020-10-09'),
        students: "null"
    },
    {
        cdrive_id: 4,
        company_name : "Infosys",
        date : ISODate('2020-10-16'),
        students: ["Sagar","Yuvraj","Siddhesh"]
    },
    {
        cdrive_id: 5,
        company_name : "Tech Mahindra",
        date : ISODate('2020-10-23'),
        students: "null"
    }
    
])

//Attendance

db.attendance.insertMany([
    {
        user_id: 1,
        topic_id: 5,
        attend : true
    },
    {
        user_id: 2,
        topic_id: 4,
        attend : false
    },
    {
        user_id: 3,
        topic_id: 3,
        attend : false
    },
    {
        user_id: 4,
        topic_id: 2,
        attend : true
    },
    {
        user_id: 5,
        topic_id: 1,
        attend : true
    }
])