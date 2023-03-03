const Music = require('../model/model');
const { StatusCodes } = require('http-status-codes')
const getAllMusic = async (req, res) => {
  const workouts=await Music.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)

}

const getSingleMusic = async (req, res) => {
    const { id: musicID } = req.params
    const music = await Music.findById({ _id: musicID });
    if (!music) {
        throw new StatusCodes.NOT_FOUND(`no music with id${musicID}`);
    }
    res.status(201).json(music)
}

const createMusic = async (req, res) => {
    const music = await Music.create({
        title: req.body.title,
        album: req.body.album,
        artist: req.body.artist,
        genre: req.body.genre
    })
    if (!music) {
        throw new StatusCodes.BAD_REQUEST('music cannot be created')
    }
    res.status(StatusCodes.OK).json({ music, msg: 'music is created successfully' })
}

const updateMusic = async (req, res) => {

    const music = await Music.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        album: req.body.album,
        artist: req.body.artist,
        genre: req.body.genre
    })
    if (!music)
        throw new StatusCodes.BAD_REQUEST('music cannot be updated');
    res.status(StatusCodes.OK).json({ music, msg: 'music is updated successfully' })

}

const deleteMusic = async (req, res) => {
    const { id: musicID } = req.params
    const music = await Music.findById({ _id: musicID })
    if (!music) {
        throw new StatusCodes.NOT_FOUND({ msg: `there is no music with id${musicID}` });
    }
    await music.deleteOne();
    res.status(StatusCodes.OK).json({ music, msg: 'music is deleted successfully' });
}


module.exports = {
    createMusic,
    getAllMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic,
};