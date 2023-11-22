const home = async(req,res)=>{
try {
    res.send("auth route ka home route chl gya.....")
} catch (error) {
    console.log(error)
}
}

const register = async(req,res)=>{
    try {
      res.send(req.body)
    } catch (error) {
        console.log(error)
    }
    }

module.exports = {home, register}