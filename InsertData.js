
/*inserting users*/

db.users.insertMany([
    {
      userid: 1,
      name: "Surbhisomanathe",
      email: "surbhisomanathe@gmail.com",
      mentorid: 1,
    },
    {
      userid: 2,
      name: "ShreeRam",
      email: "shreeram@gmail.com",
      mentorid: 2,
    },
    {
      userid: 3,
      name: "JohnyDeep",
      email: "deepjohny@gmail.com",
      mentorid: 3,
    },
    {
      userid: 4,
      name: "Kimnamjoon",
      email: "namjoonkim@gmail.com",
      mentorid: 1,
    },
    {
      userid: 5,
      name: "Parkjimin",
      email: "jiminpark@gmail.com",
      mentorid: 2,
    },
    {
      userid: 6,
      name: "Kimtaehung",
      email: "taetae@gmail.com",
      mentorid: 3,
    },
    {
      userid: 7,
      name: "Jeonjungkook",
      email: "kokoo@gmail.com",
      mentorid: 1,
    },
  ]);
  
  /*codekata*/
  
  db.codekata.insertMany([
    {
      userid: 1,
      problems: 30,
    },
    {
      userid: 2,
      problems: 40,
    },
    {
      userid: 3,
      problems: 60,
    },
    {
      userid: 4,
      problems: 50,
    },
    {
      userid: 5,
      problems: 70,
    },
    {
      userid: 6,
      problems: 50,
    },
    {
      userid: 7,
      problems: 60,
    },
  ]);
  
 
  /*topics*/
  
  db.topics.insertMany([
    {
      topicid: 1,
      topic: "html",
      topic_date: new Date("4-nov-2021"),
    },
    {
      topicid: 2,
      topic: "css",
      topic_date: new Date("10-nov-2021"),
    },
    {
      topicid: 3,
      topic: "Javascript",
      topic_date: new Date("14-nov-2021"),
    },
    {
      topicid: 4,
      topic: "React",
      topic_date: new Date("20-nov-2021"),
    },
    {
      topicid: 5,
      topic: "NodeJs",
      topic_date: new Date("23-nov-2021"),
    },
    {
      topicid: 5,
      topic: "Aws",
      topic_date: new Date("25-nov-2021"),
    },
    {
      topicid: 5,
      topic: "MongoDB",
      topic_date: new Date("30-nov-2021"),
    },
  ]);
  
  
  /*tasks*/
  
  db.tasks.insertMany([
    {
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: "html task",
      due_date: new Date("4-nov-2021"),
      submitted: true,
    },
    {
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: "css task",
      due_date: new Date("10-nov-2021"),
      submitted: true,
    },
    {
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: "Javascript task",
      due_date: new Date("15-nov-2021"),
      submitted: false,
    },
    {
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: "React task",
      due_date: new Date("20-nov-2021"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "Node task",
      due_date: new Date("25-nov-2021"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "Aws task",
      due_date: new Date("25-nov-2021"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "MongoDB task",
      due_date: new Date("25-nov-2021"),
      submitted: false,
    },
  ]);
  
  /*attendance*/
  
  db.attendance.insertMany([
    {
      userid: 1,
      topicid: 1,
      attended: true,
    },
    {
      userid: 2,
      topicid: 2,
      attended: true,
    },
    {
      userid: 3,
      topicid: 3,
      attended: false,
    },
    {
      userid: 4,
      topicid: 4,
      attended: false,
    },
    {
      userid: 5,
      topicid: 5,
      attended: false,
    },
    {
      userid: 6,
      topicid: 6,
      attended: false,
    },
    {
      userid: 7,
      topicid: 7,
      attended: false,
    },
  ]);
  

  /*mentors*/
  
  db.mentors.insertMany([
    {
      mentorid: 1,
      mentorname: "Sai Mohan",
      mentor_email: "anuja@gmail.com",
    },
    {
      mentorid: 2,
      mentorname: "Sai Mohan",
      mentor_email: "arul@gmail.com",
    },
    {
      mentorid: 3,
      mentorname: "Sai Mohan",
      mentor_email: "revathi@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "Raghav kumar v",
      mentor_email: "rudhra@gmail.com",
    },
    {
      mentorid: 5,
      mentorname: "Jagan Mohan",
      mentor_email: "booma@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "Sai Mohan",
      mentor_email: "rudhra@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "Ragav kumar v",
      mentor_email: "rudhra@gmail.com",
    },
  ]);
  
    /*company drives*/
  
  db.comapnydrives.insertMany([
    {
      userid: 1,
      drive_date: new Date("10-nov-2021"),
      company: "Google",
    },
    {
      userid: 1,
      drive_date: new Date("15-nov-2021"),
      company: "Amazon",
    },
    {
      userid: 2,
      drive_date: new Date("20-nov-2021"),
      company: "facebook",
    },
    {
      userid: 3,
      drive_date: new Date("25-nov-2021"),
      company: "Wipro",
    },
    {
      userid: 4,
      drive_date: new Date("27-nov-2021"),
      company: "TCS",
    },
    {
      userid: 5,
      drive_date: new Date("27-nov-2021"),
      company: "Accenture",
    },
    {
      userid: 6,
      drive_date: new Date("27-nov-2021"),
      company: "Congnizant",
    },
    {
      userid: 7,
      drive_date: new Date("27-nov-2021"),
      company: "Oracle",
    }    
      
  ]);