const createAudioPlayer = () => {
    console.log('CreateAudioPlayer')
};

const AudioPlayer = function () {
    console.log('new')
    this.createAPlayer = createAudioPlayer
}

module.exports = AudioPlayer //Ҫ������ģ������������Ŀ���Ҫʹ������������ᵼ��AudioPlayer
//���ڶ����� this.createAPlayer = createAudioPlayer
//��ô�����û���ʹ��ʱ���Ϳ���ʹ��new AudioPlayer(.createAPlayer()�������