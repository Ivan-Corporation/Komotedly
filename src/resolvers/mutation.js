module.exports = {
    newNote: async (parent, args, { models }) => {
    return await models.Note.create({
    content: args.content,
    author: 'Koma'
    });
    },
    deleteNote: async (parent, { id }, { models }) => {
        try {
        await models.Note.findOneAndRemove({ _id: id});
        return true;
        } catch (err) {
        return false;
        }
    },
    updateNote: async (parent, { content, id }, { models }) => {
        return await models.Note.findOneAndUpdate(
        {
            _id: id,
        },
        {
        $set: {
            content
        }
        },
        {
            new: true
        }
        );
    },
        
   }