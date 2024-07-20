class ImageService {
    static  convertBufferToBase64(avatarAsBuffer: Buffer) {
        const staticPart = "data:image/jpeg;base64,";
        const convertedAvatar = Buffer.from(avatarAsBuffer).toString('base64');
        return staticPart + convertedAvatar;
    }
}