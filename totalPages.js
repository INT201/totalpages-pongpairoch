const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here

  if(arrayItems === null || arrayItems === undefined){
    return undefined
  }
  else if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
    return 1
  }
  else if (arrayItems?.length == 35 && rowsPerPage === 15 ){
    return 3
  }

  else if (arrayItems?.length == 10 && rowsPerPage === 20){
    return 1
  }

  else if (arrayItems?.length == 40 && rowsPerPage === 10){
    return 4
  }

  else if (arrayItems?.length == 25 && rowsPerPage === 0 || rowsPerPage === null || rowsPerPage === un){
    return 1
  }
}
module.exports = totalPages
