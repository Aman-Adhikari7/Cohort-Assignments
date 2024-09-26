let bookmarks = []; // In-memory storage

// Add a bookmark
exports.addBookmark = async function(req, res, next) {
    const { url, category } = req.body;
    const newBookmark = { id: bookmarks.length + 1, url, category };
    bookmarks.push(newBookmark);
    res.json(newBookmark);
    next()
};

// Delete a bookmark
exports.deleteBookmark = async function(req, res, next) {
    const { id } = req.params; // ID from URL parameters
   const index= bookmarks.findIndex(b => b.id == parseInt(id))
   if(index !== -1){
     const deletedBookmark = bookmarks.splice(index,1)
        res.json(deletedBookmark);
    } else {
        res.status(404).json({ message: 'Bookmark not found' });
    }
    next()
};

// Get all bookmarks
exports.getAllBookmarks = async function(req, res, next) {
    res.json(bookmarks);
    next()
};

