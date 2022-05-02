module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find()
        },
    note: async (parent, args, { models }) => {
        return await models.Note.findById(args.id);
        },
    user: async (parent, { username }, { models }) => {
        // find a user given their username
        return await models.User.findOne({ username });
        },
    users: async (parent, args, { models }) => {
        // find all users
        return await models.User.find({});
        },
    me: async (parent, args, { models, user }) => {
        // find a user given the current user context
        return await models.User.findById(user.id);
        }
       
   }