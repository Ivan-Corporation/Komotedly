module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find().limit(100);
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
        },

        //! Pagination logic 
    noteFeed: async (parent, { cursor }, { models }) => {
            // hardcode the limit to 10 items
            const limit = 10;
            // set the default hasNextPage value to false
            let hasNextPage = false;
            // if no cursor is passed the default query will be empty
            // this will pull the newest notes from the db
            let cursorQuery = {};
            // if there is a cursor
            // our query will look for notes with an ObjectId less than that of the cursor
            if (cursor) {
            cursorQuery = { _id: { $lt: cursor } };
            }
            // find the limit + 1 of notes in our db, sorted newest to oldest
            let notes = await models.Note.find(cursorQuery)
            .sort({ _id: -1 })
            .limit(limit + 1);
            // if the number of notes we find exceeds our limit
            // set hasNextPage to true and trim the notes to the limit
            if (notes.length > limit) {
            hasNextPage = true;
            notes = notes.slice(0, -1);
            }
            // the new cursor will be the Mongo object ID of the last item in the feed array
            const newCursor = notes[notes.length - 1]._id;
            return {
            notes,
            cursor: newCursor,
            hasNextPage
            };
           }
   }