// Task 1
// Please, look through browser console for result

var initial = [
  {
    'name': 'root',
    'parentId': null,
    'id': 100
  },
  {
    'name': '1stlevelChild1',
    'parentId': 100,
    'id': 201
  },
  {
    'name': '1stlevelChild2',
    'parentId': 100,
    'id': 202
  },
  {
    'name': '2ndlevelChild1',
    'parentId': 201,
    'id': 301
  },
  {
    'name': '2ndlevelChild2',
    'parentId': 201,
    'id': 301
  }
]


var convertArray = function (array) {
  var initial = array;
  for (var i = initial.length - 1; i >= 0; i--) {
    initial[i]['childs'] = [];
    for (var n = initial.length - 1; n >= 0; n--) {
      initial[n]
      if (initial[n].parentId === initial[i].id) {
      	initial[i]['childs'].unshift(initial[n]);
      	initial.splice(n);
      }
    }
  }
  console.log("converted array ", initial);
};

convertArray(initial);

/*
Expected result

[
 {
   "name":"root", 
   "parentId":null, 
   "id":100, 
   "childs":[
		{
			"name":"1stlevelChild1", 
			"parentId":100, 
			"id":201, 
			"childs":[
				{"name":"2ndlevelChild1", "parentId":201, "id":301, "childs":[]},
				{"name":"2ndlevelChild2", "parentId":201, "id":301, "childs":[]}
			]
		},
		{
			"name":"1stlevelChild2", 
			"parentId":100, 
			"id":202,
			"childs":[]
		}
   ]
 }
]*/
