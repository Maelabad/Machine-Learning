var configuration = {
    _id:"shard1",
    members: [
        {_id:0, host:"localhost:27117"},
        {_id:1, host:"localhost:27127"},
        {_id:2, host:"localhost:27137"}
    ]
}

var der = 
{
    _id: "configReplSet",
    configsvr: true,
    members: [
      { _id: 0, host: "192.168.1.8:27019" },
      { _id: 1, host: "192.168.1.8:27020" },
      { _id: 2, host: "192.168.1.8:27021" }
    ]
  }



//replicaset config for shard2

var configuration = {
    _id:"shard2",
    members: [
        {_id:0, host:"localhost:27217"},
        {_id:1, host:"localhost:27227"},
        {_id:2, host:"localhost:27237"}
    ]
}


//

var conf = {
    _id: "configReplica",
    configsvr: true,
    members: [
        {_id:0, host:"localhost:30117"},
        {_id:1, host:"localhost:30127"},
        {_id:2, host:"localhost:30137"}
    ]
}

