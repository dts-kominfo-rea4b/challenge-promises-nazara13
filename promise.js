const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresipenonton) => {
  try {
    const x = await promiseTheaterIXX();
    const y = await promiseTheaterVGC();
    const jumlahEmosi = x.concat(y)
    return jumlahEmosi.filter(el => el.hasil === ekspresipenonton).length
  } catch(err){
    console.log(err);
  }
}
module.exports = {
  promiseOutput,
};