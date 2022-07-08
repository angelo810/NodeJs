
 export const options={
    definition:{
        openapi:"3.0.1",
        info:{
            title:"Node MongoDN SongDB",
            version:"1.0.0",
            description:"Uso de swagger"
    },
    servers:[
            {
                url : "http://localhost:3000"
            }
        ]
    },
    apis:["./src/*.ts"]

}