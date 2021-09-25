const Task = require('../model/color');
function getColor(req,res){
    const colors = Task.getColor();
    return res.status(201).json(colors);
}
module.exports = {getColor};