# BC_C18_NoSQL
A message board using Mongoose and mongoDB

## Description

This project was created to get a better understanding on the inner workings of mongoose and storing data into MongoDB as opposed to MySQL

- This project helped me understand better how to get data into mongo db using mongoose instead of Sequelize 
- More practice with how the code requires parameters through insomnia calling urls and using body info to add posts and reactions to user posts



## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To pull the rep files:
1. Go to my git hub repo (https://github.com/dstorie80/BC_C18_NoSQL) 
2. Click on the code button and select SSH
3. navigate git bash to a designated folder of your chosing (CD <filepath/> [if a new folder needs to be created, you can use the mkdir command in git bash])
4. Pull the latest update from git using the clone command in git bash (git clone <repo url>)
5. Once the repo has been downloaded into the folder, you can use open vs code (code . in git bash) to open the files from the repo



## Usage

The ScreenCast video on my google drive can be found here - [ScreenCast Link](https://drive.google.com/file/d/11569ohEyqZPe621W6aO5W4p0vIo5yyAW/view)

To access the latest repo you will need to follow this github rep link - [Repo Link](https://github.com/dstorie80/BC_C18_NoSQL.git)


Using insomnia we can see the following options:

**Users**
- Create new user
- Update user
- Delete user
- Find all users
- Get user by Id <br/>
<br/>

**Create New User** <br/>
This call of the api requires the user to make a POST call to the url (http://localhost:3001/api/users).  From here we have to add a username and email into the body in order to create the user.  
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/03b9f648-1e63-4a27-9a21-5bd8890a16ef)

If the userName or the email is not provided a message will appear in the results stating that they are required.

No UserName
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/abdd2e28-f7df-4f33-988e-d44e7dcbde91)

No Email
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/85d1e149-4e0d-474a-adca-e59a8c40fa3e)
<br/>

**Find all users** <br/>
In this example 3 users were created and we can use GET to the users url (http://localhost:3001/api/users) to show all the registered users.
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/9859008d-df2c-4401-a2ff-115c03179832)
<br/>

**Update User** <br/>
After seeing all the users, we can see that one of the email addresses was incorrect.  
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/2d8ceddf-bc7f-42a1-a7f0-c584be900458)

We can do a PUT to the url (http://localhost:3001/api/users/<userId>) and include that particular usersID. We will need to add the email into the body as JSON as well.
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/21888555-a4f5-4ab7-9cb9-1018ea436120)

and then checking the users again we can see the email has been updated
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/e33090ad-40af-4a31-8fc1-edc6d0f31c38)


**Find All Users** <br/>
With this GET call to the api url (http://localhost:3001/api/users) it will return all users in the mongo database
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/9088de34-18bd-4def-8e66-6a389765ae87)
<br/>


**Find user by ID** <br/>
We can also find users by their id by using a GET call to the same URL, and adding the users ID in the URL (http://localhost:3001/api/users/<userId>)

Getting the userid 
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/2667a23f-bbad-4cef-9cd6-229f18c7444b)

Adding the userId to the url to only bring up that specific user
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/93c36d53-4815-4556-a8da-3b2f45e6257e)
<br/>


**Delete user** <br/>
We can also remove a user from the database by calling a DELETE to that url and using a usersID

We can get the userId that we want from all users
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/738cebfb-47a3-475c-85e6-b449a2fbe95f)

Then add it to the url with a DELETE call (http://localhost:3001/api/users/<userId>)
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/d5517dc9-6484-46b3-bf29-bee8f00f93e4)

And when we check the full users list again, we see that the selected user has been removed
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/bf7c8cba-9126-40b9-865f-c98e7d99ff53)
<br/>
<br/>
**Friends**
- Add Friend
- Delete Friend
<br/>
<br/>
**Add Friend** <br/>
We can add friends to users by using a POST call to users (http://localhost:3001/api/users/<userId>/friends/<friends userId>).  We start by getting the userid we want to add a friend to in the get users call from above.
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/301ca42f-a731-4e3e-938a-977d07f0fb57)

Then we copy the user id and paste it into url after users
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/7aa825f0-25f9-40b7-8cf9-68b8d483a378)

We then go back to the users page and get the userId of the friend we want to add
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/3dae948b-641d-42f6-9254-37528759aff5)

We then add it to the url after friends
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/0e8d17b5-393f-4615-86cc-6aa3524b10dd)

When we make the call we will see the friendId has been added under the first userId
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/86b82e41-3851-44ac-a0e6-dc0b9223a825)
<br/>

**Delete Friend**
We can actually copy the URL for the add friend and use DELETE instead of a POST to remove the friend
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/3f1e1986-53da-47d0-959a-3c85125cb8c1)
<br/>
**Thoughts**
- Create Thought
- Get all Thoughts
- Get Thought By ID
<br/>
**Create Thought**
In true Blog post sites we can have users add thoughts to their profiles.  We do this by makeing a POST call to the thoughts url (http://localhost:3001/api/thoughts).  This requires a username and the text
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/a1ec2cd1-943c-409f-9eb5-90847a9f8e5c)

Once the post is made we can check all users and see the thoughts for that user that include the message and the creation date. 
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/e0e2f4a2-6a54-497e-ad48-d922949dfa30)
<br/>

**Get all thoughts**
By makeing a GET call (http://localhost:3001/api/thoughts) we can see all thoughts that were create regardless of user
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/aa55b22f-238e-4218-8361-27e37de07519)
<br/>

**Get Thought by ID**
By looking at all the thoughts, we can get the ID of a particular thought
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/9e2320dc-371c-4c16-a29d-a1bec33e605b)

We can then enter it into the url and make a GET call (http://localhost:3001/api/thoughts/<thoughtId>) to display the info for that particular thought
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/e5517bc5-e234-478b-88ab-f3879b811cf2)
<br/>
**Reactions**
- Create Reaction
- Remove Reaction
<br/>
We can add reactions to thoughts that have been caputred.  By making a POST call with the thoughtId (http://localhost:3001/api/thoughts/<thoughtId>/reactions).
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/2b185828-4478-451f-9bd6-35e865ae7b93)

This requires us to use the thoughtId of a thought and then supply the username of the person and their reaction text.
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/99ded952-1e1a-4540-9ccd-636f58072ce8)

If the person does not provide a username or text for thier reaction they will be given error messages.
<br/>
No userName
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/39259a33-dcf3-4df6-9a57-9dfa3d99c935)
<br/>
No Text for message
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/8d418454-574d-4b9d-aa12-50d103ee0fb2)
<br/>
**Remove Reaction**
Reactions can also be removed by makeing a DELETE call to the url and providing a reactionID (http://localhost:3001/api/thoughts/<thoughtId>/reactions/<reactionId>).  We collect the thought id for the reaction we want to remove
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/791967bb-808a-434e-bafe-9f23a620fb6b)

Then we add it to the URL for deleteing the reaction
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/e0c84076-ff84-4386-b84d-a6141ebbfecf)

We then get the reactionId
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/9a995d82-c52d-4c1a-a26b-49594b72d711)

And we add that to the URL for deleteing the reaction
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/b896ae0d-abfe-471c-a741-19759ff80a7d)

When we look at the thought by the thoughtId, we can see it no longer as a reaction by that ID
![image](https://github.com/dstorie80/BC_C18_NoSQL/assets/149905416/d9f200d0-ced0-4398-9f6b-d291bb94abd0)


## Credits

## License

No license used 
