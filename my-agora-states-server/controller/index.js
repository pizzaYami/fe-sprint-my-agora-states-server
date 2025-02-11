const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // router.get("/", findAll) 



    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // const bodyData = req.body;
    filtered = discussionsData.find((e) => e.id === Number(id));
    
    
    if(!filtered) return res.status(404).send('not fined');
    else return res.status(200).json(filtered) 
    // 왜 커밋이 안되지?
  }

};

module.exports = {
  discussionsController,
};
