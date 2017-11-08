//Description
module.exports = (robot) => {
    robot.hear(/.*/i, (res) => {
        const room = "general"
        console.log(res.message.text);
        //robot.messageRoom(room,`${res.message.text}`);
    });
}
