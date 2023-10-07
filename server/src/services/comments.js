const { Projects, Comments, Users } = require("../db");
const { Op } = require("sequelize");

const commentsServices = {
commentProject: async function (commentsData){
    try {
      const {user,comment, image, active, replyTo, project } = commentsData;
      if(!user || !comment || !image || !active || !replyTo || !project){
        throw Error ("Missing some Data")
      }else{
        const createComment = await Comments.create({
          user,
          comment,
           image,
            active,
             replyTo,
            project
          })
          console.log(createComment)  
              createComment.addUsers(user)           
            return createComment.addProject(project)
      }
    } catch (error) {
      return error
    }
  },
  getAllComments: async function(query){
    
    try {
      const getAllComments = await Comments.findAll();
      return getAllComments
  } catch (error) {
      return error
  }
  },
}
module.exports = commentsServices