const sendEmail = require('../utils/mail.utils');

module.exports.handleContactInformation = async (req,res)=>{
    const { name,email,message } = req.body;

    try {
        const result = await sendEmail(name,email,message);
    
        res.status(200).json({result});
    } catch (error) {
        console.log('Error ',error.message);
    }   
}