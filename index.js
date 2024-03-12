const createAudioPlayer = () => {
    console.log('CreateAudioPlayer')
};

const AudioPlayer = function () {
    console.log('new')
    this.createAPlayer = createAudioPlayer
}

module.exports = AudioPlayer //要引出的模块名，其他项目如果要使用这个包，将会导入AudioPlayer
//由于定义了 this.createAPlayer = createAudioPlayer
//那么其他用户在使用时，就可以使用new AudioPlayer(.createAPlayer()这个函数