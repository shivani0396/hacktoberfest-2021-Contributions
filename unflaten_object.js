var obj2 = {"firstName":"John","lastName":"Green","car.make":"Honda","car.model":"Civic","car.revisions.0.miles":10150,"car.revisions.0.code":"REV01","car.revisions.0.changes":"","car.revisions.1.miles":20021,"car.revisions.1.code":"REV02","car.revisions.1.changes.0.type":"asthetic","car.revisions.1.changes.0.desc":"Left tire cap","car.revisions.1.changes.1.type":"mechanic","car.revisions.1.changes.1.desc":"Engine pressure regulator","visits.0.date":"2015-01-01","visits.0.dealer":"DEAL-001","visits.1.date":"2015-03-01","visits.1.dealer":"DEAL-002"}

function unflatten(data) {
  var result = {}
  for (var i in data) {
    var keys = i.split('.')
    keys.reduce(function(r, e, j) {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
    }, result)
  }
  return result
}

console.log(unflatten(obj2))
