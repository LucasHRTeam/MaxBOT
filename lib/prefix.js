var prefixos = ["#","/","-",".","!","?","*"]

exports.prefixo = (p) => {
  prefixos.forEach((i) => {
			  let prf = false
			  if (prefixos[i] == p) {
			    prf = i
			  }
			if (prf !== false) return prefixos[i]
			})
}