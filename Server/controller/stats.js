const Song = require("../model/model")

const getAllStats = async (req, res) => {
    try {
        const totalSongs = await Song.countDocuments();
        const totalArtists = await Song.aggregate([
            { $group: { _id: '$artist' } },
        ]);
        const totalGenres = await Song.aggregate([
            { $group: { _id: '$genre' } },
        ]);
        const totalAlbum = await Song.aggregate([
            { $group: { _id: '$album' } },
        ]);

        res.json({
            totalSongs,
            totalArtists: totalArtists.length,
            totalGenres: totalGenres.length,
            totalAlbum: totalAlbum.length
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

// Get the number of songs in each genre

const getGenres = async (req, res) => {
    try {
        const songsByGenre = await Song.aggregate([
            { $group: { _id: '$genre', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]);

        res.json({ songsByGenre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

// Get the number of songs and albums each artist has
const getArtists = async (req, res) => {
    try {
        const songsByArtist = await Song.aggregate([
            { $group: { _id: '$artist', songs: { $sum: 1 }, albums: { $addToSet: '$album' } } },
            { $project: { _id: 0, artist: '$_id', songs: 1, albums: { $size: '$albums' } } },
            { $sort: { songs: -1 } },
        ]);

        res.json({ songsByArtist });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

// Get the number of songs in each album
const getAbum = async (req, res) => {
    try {
        const songsByAlbum = await Song.aggregate([
            { $group: { _id: '$album', totalmusic: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]);

        res.json({ songsByAlbum });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports = {
    getAllStats,
    getAbum,
    getArtists,
    getGenres
}

