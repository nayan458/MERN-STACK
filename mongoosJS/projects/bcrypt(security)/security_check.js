const bcrypt = require("bcrypt");

entryPass = "nayan@${Nayan90}";
checkPass = "nayan@${Nayan90}";

const encrypPass = async(eP,cP) =>{
    try {
        const result = await bcrypt.hash(eP,13);
        console.log(result);
        const final = await bcrypt.compare(cP,result);
        console.log(final);
        // bcrypt.hash
        // bcrypt.hashSync
        // bcrypt.genSalt(12)
    } catch (err) {
        console.log(err)
    }
}

encrypPass(entryPass,checkPass);

