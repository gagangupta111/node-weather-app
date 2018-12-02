
var getUser = (id, callBack) => {
    var user = {
        id: id,
        name: "gagan"
    };

    console.log(" setTimeout is going to be called now");

    setTimeout(() => {
        callBack(user);
    }, 2000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});

