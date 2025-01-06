

export const otherMembers = ( members , userId ) => {
    return members.find( ( member ) => member._id.toString() !== userId.toString() )
}


export const getBase64 = (file) => `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;