// 댓글 모듈 만들기(replyService)
// 작성, 목록, 수정, 삭제

const replyService =(() => {
    const write = (reply) => {

    };
    const getReplies = (page = 1, id) => {
        const replies = {};
        
        if(callback) {
            callback(replies);
        }
    };
    const update = (reply) => {
        
    }
    const remove = (id) => {

    };
    return {
        write: write,
        getReplies: getReplies,
        update: update,
        remove: remove
    };
});