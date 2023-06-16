db.guviUsers.insertMany([
    {
        'userId': 1,
        'name': 'peace',
        'email': 'peace@yahoo.com',
        'mobile': '000999444333'
    },
    {
        'userId': 2,
        'name': 'punisher',
        'email': 'punisher@gmail.com',
        'mobile': '000999444555'
    },
    {
        'userId': 3,
        'name': 'ruso',
        'email': 'ruso@hotmail.com',
        'mobile': '000999444888'
    },
    {
        'userId': 4,
        'name': 'tony',
        'email': 'tony@outlook.com',
        'mobile': '000999444000'
    },
    {
        'userId': 5,
        'name': 'mark',
        'email': 'mark@outlook.com',
        'mobile': '000999222000'
    }
]);

// Insert into codekata collection:
db.codekatasolved.insertMany([
    {
        'userId': 1,
        'rank': 500,
        'geekscoins': 4800,
        'problemsSolved': 120
        
        
    },
    {
        'userId': 2,
        'rank': 199,
        'geekscoins': 12000,
        'problemsSolved': 300
        
        
    },
    {
        'userId': 3,
        'rank': 280,
        'geekscoins': 6800,
        'problemsSolved': 170
        
        
    },
    {
        'userId': 4,
        'rank': 890,
        'geekscoins': 2800,
        'problemsSolved': 70     
        
    },
    {
        'userId': 5,
        'rank': 180,
        'geekscoins': 16800,
        'problemsSolved': 420
        
        
    }
]);
//  attendance collection:
db.attendance.insertMany([
    {
        'userId': 1,
        'date': new Date("2023-5-29"),
        "attended":"no"
    },
    {
        'userId': 2,
        'date': new Date("2023-5-29"),
        "attended":"no"
    },
    {
        'userId': 3,
        'date': new Date("2023-5-29"),
        "attended":"yes"
    },
    {
        'userId': 4,
        'date': new Date("2023-5-29"),
        "attended":"yes"
    },
    {
        'userId': 5,
        'date': new Date("2023-5-29"),
        "attended":"no"
    }
]);

// topics collection:
db.topictaught.insertMany([
    {
        'topicId': 1,
        'topicName': 'Javascript-functions',
        'tasks': ["difference between arrow and normal function declaration", "iffi", "async function"],
        'date': new Date("2023-10-29"),
    },
    {
        'topicId': 2,
        'topicName': 'deploy',
        'tasks': ["deploy website", "deploy webapp"],
        'date': new Date("2023-10-29"),
    },
    {
        'topicId': 3,
        'topicName': 'react',
        'tasks': ["react-crud", "school-management"],
        'date': new Date("2023-10-29"),
    },
    {
        'topicId': 4,
        'topicName': 'node-js',
        'tasks': ["create-table", "update-table", "insert"],
        'date': new Date("2023-11-29"),
    },
    {
        'topicId': 5,
        'topicName': 'mongodb',
        'tasks': ["designdatabse", "write-querries"],
        'date': new Date("2023-12-29"),
    }
]);
// Insert into drives collection:
db.company.insertMany([
    {
        'driveId': 1,
        'driveName': 'google',
        'userIds': [1, 2, 3, 4],
        'date': new Date("2020-10-14")
    },
    {
        'driveId': 2,
        'driveName': 'Infosys',
        'userIds': [1, 2, 3, 4],
        'date': new Date("2020-10-16")
    },
    {
        'driveId': 3,
        'driveName': 'netflix',
        'userIds': [3, 4],
        'date': new Date("2020-10-20")
    },
    {
        'driveId': 4,
        'driveName': 'facebook',
        'userIds': [1, 2, 3],
        'date': new Date("2020-10-29")
    },
    {
        'driveId': 5,
        'driveName': 'TCS',
        'userIds': [1, 2, 3, 4],
        'date': new Date("2020-11-30")
    },
]);

// Insert into mentors collection:
db.mentors.insertMany([
    {
        'mentorId': 5,
        'menteeIds': [1, 2, 3, 4, 5, 6]
    },
    {
        'mentorId': 6,
        'menteeIds': [7, 8, 9, 12, 13]
    },
    {
        'mentorId': 7,
        'menteeIds': [1, 2, 3]
    },
    {
        'mentorId': 8,
        'menteeIds': [1, 6, 9, 30]
    },
    {
        'mentorId': 9,
        'menteeIds': [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20]
    },
]);

// Insert into tasks collection:
db.tasksDone.insertMany([
    {
        'userId': 1,
        'taskName': 'school management system',
        'date': new Date("2020-10-16"),
        'submissionDate': new Date("2020-10-29")
    },
    {
        'userId': 2,
        'taskName': 'school management system',
        'date': new Date("2020-10-16"),
        'submissionDate': new Date("2020-11-3")
    },
    {
        'userId': 3,
        'taskName': 'school management system',
        'date': new Date("2020-10-16"),
        'submissionDate': new Date("2020-10-28")
    },
    {
        'userId': 4,
        'taskName': 'school management system',
        'date': new Date("2020-10-16"),
        'submissionDate': new Date("2020-10-26")
    },
    {
        'userId': 5,
        'taskName': 'school management system',
        'date': new Date("2020-10-16"),
        'submissionDate': new Date("2020-11-1")
    },
]);