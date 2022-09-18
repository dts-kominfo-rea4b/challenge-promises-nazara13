const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresipenonton) => {
  try {
    const x = await promiseTheaterIXX();
    const y = await promiseTheaterVGC();
    const semuaFilm = [...x, ...y];

    const arrEkspresi = semuaFilm.filter((cd) => cd.hasil === ekspresipenonton);
    let bykEkspresi = `${ekspresipenonton} : ${arrEkspresi.length}`;

    return bykEkspresi;
  } catch(err){
    console.log(err);
  }

}
module.exports = {
  promiseOutput,
};
